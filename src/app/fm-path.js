import { getHomedir } from './homedir.js';

let pathInFM = getHomedir();

export const getFMPath = () => {
  return pathInFM;
};

export const setFMPath = (newPath) => {
  pathInFM = newPath;
};
