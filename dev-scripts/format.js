import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import util from 'util';

import prettier from 'prettier';

const unlinkPromise = util.promisify(fs.unlink);
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const rootPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const passedPath =
  process.argv[2] && path.normalize(path.join(rootPath, process.argv[2]));

if (!fs.existsSync(passedPath)) {
  console.log('path does not exist');
  process.exit(0);
}

const filePath = path.join(rootPath, process.argv[2]);

const extname = path.extname(filePath);
if (extname !== '.js' && extname !== '.md') {
  console.log(
    `can only format .js and .md files - your path has the ${extname} extension`
  );
  process.exit(0);
}

const passPath = filePath.replace('.js', `.format-pass.txt`);
const errorPath = filePath.replace('.js', `.format-error.txt`);
(async () => {
  try {
    if (fs.existsSync(passPath)) {
      await unlinkPromise(passPath);
    }
    if (fs.existsSync(errorPath)) {
      await unlinkPromise(errorPath);
    }

    const configText = await readFilePromise(
      path.join(rootPath, '.prettier.json'),
      'utf-8'
    );
    const config = JSON.parse(configText);

    config.parser = extname === '.js' ? 'babel' : 'markdown';

    const code = await readFilePromise(filePath, 'utf-8');

    // const isFormatted = prettier.check(code, prettierConfig);
    // console.log(isFormatted);

    const formattedCode = prettier.format(code, config);

    await writeFilePromise(filePath, formattedCode);

    if (
      !path.basename(filePath).includes('.spec.js') &&
      !path.basename(filePath).includes('sandbox.js') &&
      extname !== '.md'
    ) {
      const now = new Date();
      const formatReport = `${now.toDateString()}, ${now.toLocaleTimeString()}\n\nall good`;

      fs.writeFile(passPath, formatReport, 'utf-8', (err) =>
        err ? console.error(err) : null
      );
    }
  } catch (err) {
    if (
      !path.basename(filePath).includes('.spec.js') &&
      !path.basename(filePath).includes('sandbox.js') &&
      extname !== '.md'
    ) {
      const colorless = err.message.replace(
        /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/gm,
        ''
      );
      const now = new Date();
      const formatReport = `${now.toDateString()}, ${now.toLocaleTimeString()}\n\n${colorless}`;

      fs.writeFile(errorPath, formatReport, 'utf-8', (err) =>
        err ? console.error(err) : null
      );
    }
    console.error(err.message);
  }
})();
