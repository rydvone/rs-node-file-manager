import { parseArgs } from './args.js';

export const welcome = () => {
  const usernameArg = '--username=';
  const startArgs = process.argv;
  const nickname = parseArgs(startArgs, usernameArg);
  const welcomeMsg = `Welcome to the File Manager, ${nickname}!`;
  console.log(welcomeMsg);
  return nickname;
};

export const goodbye = () => {
  const usernameArg = '--username=';
  const startArgs = process.argv;
  const nickname = parseArgs(startArgs, usernameArg);
  const goodbyeMsg = `Thank you for using File Manager, ${nickname}, goodbye!`;
  console.log(goodbyeMsg);
};
