import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import jsdocToMarkdown from 'jsdoc-to-markdown';
import prettier from 'prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const passedPath =
  process.argv[2] &&
  path.normalize(path.join(__dirname, '..', process.argv[2]));

if (!passedPath) {
  console.log('did not pass a path to document');
  process.exit(0);
}

if (!fs.existsSync(passedPath)) {
  console.log('path does not exist');
  process.exit(0);
}

const isValidFile =
  fs.lstatSync(passedPath).isFile() && path.extname(passedPath) === '.js';

if (!isValidFile) {
  console.log('path is not a JS file');
  process.exit(0);
}

if (/.spec./i.test(passedPath) || /.test./i.test(passedPath)) {
  console.log('test files are not documented');
  process.exit(0);
}

if (/sandbox.js/i.test(passedPath)) {
  console.log('sandbox files are not documented');
  process.exit(0);
}

const SOURCE_PATH = passedPath;

const README_PATH = path.normalize(path.join(passedPath, '..', 'README.md'));
const oldReadme = fs.existsSync(README_PATH)
  ? fs.readFileSync(README_PATH, 'utf-8')
  : '';

let docs = null;
try {
  docs = jsdocToMarkdown.renderSync({
    files: SOURCE_PATH,
    exampleLang: 'js',
  });
} catch (err) {
  const now = new Date();
  const datedDocs = `\n\n> an error occurred while documenting your code\n\n> Docs generated: ${now.toDateString()}, ${now.toLocaleTimeString()}\n\n`;

  const docsRegex = /(<!--[ \t]*BEGIN DOCS[ \t]*-->)([\s\S]*)(<!--[ \t]*END DOCS[ \t]*-->)/i;
  const docsReplacer = `<!-- BEGIN DOCS -->${datedDocs}<!-- END DOCS -->`;
  const newReadme = oldReadme.match(docsRegex)
    ? oldReadme.replace(docsRegex, docsReplacer)
    : oldReadme + '\n\n' + docsReplacer;

  fs.writeFileSync(README_PATH, newReadme, 'utf-8');

  console.log('-- unable to document your code --\n\n');
  console.error(err);
  process.exit(0);
}

const kindlessDocs = docs.replace(/\*\*Kind[^\n]+/g, '');
const now = new Date();
const datedDocs = `${kindlessDocs}\n\n> Docs generated: ${now.toDateString()}, ${now.toLocaleTimeString()}\n\n`;

const docsRegex = /(<!--[ \t]*BEGIN DOCS[ \t]*-->)([\s\S]*)(<!--[ \t]*END DOCS[ \t]*-->)/i;
const docsReplacer = `<!-- BEGIN DOCS -->\n\n${datedDocs}\n\n<!-- END DOCS -->`;
const newReadme = oldReadme.match(docsRegex)
  ? oldReadme.replace(docsRegex, docsReplacer)
  : oldReadme + '\n\n' + docsReplacer;

let formattedDocs = newReadme;
try {
  formattedDocs = prettier.format(formattedDocs, {
    parser: 'markdown',
  });
} catch (o_0) {
  console.log(o_0);
}

fs.writeFileSync(README_PATH, formattedDocs, 'utf-8');

console.log('all done documenting ' + process.argv[2] + '\n');
