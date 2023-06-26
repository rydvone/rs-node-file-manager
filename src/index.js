import * as readline from 'node:readline/promises';
import { getHomedir } from './app/homedir.js';
import { handleInData } from './app/handle-data.js';
import { welcome, goodbye } from './app/user-interaction.js';

const readData = () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on('line', (line) => {
    if (line.trim() === '.exit') {
      rl.close();
    }
    handleInData(line.trim());
  })
    .on('SIGINT', () => rl.close())
    .on('close', () => process.exit(0));
};

const app = () => {
  const nickname = welcome();
  process.on('exit', () => goodbye(nickname));
  const homeDir = getHomedir();
  console.log('Home directory: ', homeDir);
  readData();
};

app();
