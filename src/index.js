import * as readline from 'node:readline/promises';

import { parseArgs } from './app/args.js';
import { getHomedir } from './app/homedir.js';
import { handleInData } from './app/inData.js';

const welcome = () => {
  const usernameArg = '--username=';
  const startArgs = process.argv;
  const nickname = parseArgs(startArgs, usernameArg);
  const welcomeMsg = `Welcome to the File Manager, ${nickname}!`;
  console.log(welcomeMsg);
  return nickname;
};

const goodbye = () => {
  const usernameArg = '--username=';
  const startArgs = process.argv;
  const nickname = parseArgs(startArgs, usernameArg);
  const goodbyeMsg = `Thank you for using File Manager, ${nickname}, goodbye!`;
  console.log(goodbyeMsg);
};

const readData = () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    if (line.trim() === 'exit') {
      rl.close();
    }
    handleInData(line.trim());
  })
    .on('SIGINT', () => rl.close())
    .on('close', () => process.exit(0));
};

const app = () => {
  const nickname = welcome();
  const homeDir = getHomedir();
  console.log('Homedir: ', homeDir);
  
  process.on('exit', () => goodbye(nickname));

  readData();
};

app();
