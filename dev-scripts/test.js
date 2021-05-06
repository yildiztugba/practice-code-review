import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import util from 'util';

import expect from 'expect';
global.expect = expect;

import { describeIt } from './describe-it.js';

const unlinkPromise = util.promisify(fs.unlink);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// re-throw any errors
process.on('uncaughtException', (err) => {
  throw err;
});
process.on('unhandledRejection', (err) => {
  throw err;
});

const passedPath =
  process.argv[2] &&
  path.normalize(path.join(__dirname, '..', process.argv[2]));

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

const isSpecFile = /.spec.js/.test(path.basename(passedPath));

if (!isSpecFile) {
  console.log('path is not a spec file');
  process.exit(0);
}

const SOURCE_PATH = passedPath;

(async () => {
  let report = '';

  // written to work with describeIt, not a general solution
  const outputIntercept = function () {
    for (const arg of arguments) {
      report += arg;
    }
  };

  const errors = [];
  const status = { fail: false };
  const { describe, it } = describeIt(outputIntercept, errors, status);
  global.describe = describe;
  global.it = it;

  try {
    await import(SOURCE_PATH);
  } catch (err) {
    status.err = err;
    report = err;
  }

  const compressedReport = status.err
    ? status.err.stack
    : report.replace(/\n[ \t]{2,}\n/gim, '\n');

  // log the colored report to the console
  if (status.err) {
    console.log(
      '--- ',
      SOURCE_PATH.replace(path.dirname(__dirname), ''),
      ' ---\n\n'
    );
    console.error(status.err);
  } else {
    console.log(
      '--- ',
      SOURCE_PATH.replace(path.dirname(__dirname), ''),
      ' ---\n\n',
      compressedReport
    );
  }

  // used for hiding local directory structure from reported callstacks
  const cleanCallstack = (stack) =>
    stack.split(path.dirname(__dirname)).join(' [ ... ] ');

  // format the report for writing to a .report.txt file
  const passPath = SOURCE_PATH.split('.spec.js').join(`.test-pass.txt`);
  const failPath = SOURCE_PATH.split('.spec.js').join(`.test-fail.txt`);
  const errorPath = SOURCE_PATH.split('.spec.js').join(`.test-error.txt`);
  if (fs.existsSync(passPath)) {
    await unlinkPromise(passPath);
  }
  if (fs.existsSync(failPath)) {
    await unlinkPromise(failPath);
  }
  if (fs.existsSync(errorPath)) {
    await unlinkPromise(errorPath);
  }

  const reportPath = status.fail ? failPath : status.err ? errorPath : passPath;

  const destyled = status.err
    ? compressedReport
    : compressedReport.replace(
        /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/gm,
        ''
      );
  const cleanedStacks = cleanCallstack(destyled);

  const now = new Date();
  const timeStamped = `${now.toDateString()}, ${now.toLocaleTimeString()}\n\n${cleanedStacks}`;
  fs.writeFile(reportPath, timeStamped, 'utf-8', (err) =>
    err ? console.error(err) : null
  );
})();
