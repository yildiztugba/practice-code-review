import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import util from 'util';

import eslintPackage from 'eslint';

const unlinkPromise = util.promisify(fs.unlink);

const rootPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const passedPath =
  process.argv[2] && path.normalize(path.join(rootPath, process.argv[2]));

if (!fs.existsSync(passedPath)) {
  console.log('path does not exist');
  process.exit(0);
}

const isJsFile =
  fs.lstatSync(passedPath).isFile() && path.extname(passedPath) === '.js';

if (!isJsFile) {
  console.log('path is not a JS file');
  process.exit(0);
}

const filePath = path.join(rootPath, process.argv[2]);

(async () => {
  try {
    const eslint = new eslintPackage.ESLint();

    const results = await eslint.lintFiles(filePath);

    const formatter = await eslint.loadFormatter('codeframe');
    const lintResult = formatter.format(results);
    console.log(lintResult);

    if (
      !path.basename(filePath).includes('.spec.js') &&
      !path.basename(filePath).includes('sandbox.js')
    ) {
      const successMessage = 'all good';

      const cleanResult = lintResult
        ? lintResult.replace(
            /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
            ''
          )
        : successMessage;

      const now = new Date();
      const lintReport = `${now.toDateString()}, ${now.toLocaleTimeString()}\n\n${cleanResult}`;

      const passPath = filePath.replace('.js', `.lint-pass.txt`);
      const failPath = filePath.replace('.js', `.lint-fail.txt`);
      const errorPath = filePath.replace('.js', `.lint-error.txt`);
      if (fs.existsSync(passPath)) {
        await unlinkPromise(passPath);
      }
      if (fs.existsSync(failPath)) {
        await unlinkPromise(failPath);
      }
      if (fs.existsSync(errorPath)) {
        await unlinkPromise(errorPath);
      }

      const reportPath =
        results[0].errorCount > 0
          ? errorPath
          : cleanResult === successMessage
          ? passPath
          : failPath;

      fs.writeFile(reportPath, lintReport, 'utf-8', (err) =>
        err ? console.error(err) : null
      );
    }
  } catch (err) {
    console.error(err);
  }
})();
