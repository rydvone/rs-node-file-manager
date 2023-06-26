import { homedir } from 'node:os';

export const getHomedir = () => {
  process.chdir(homedir());
  return homedir();
}