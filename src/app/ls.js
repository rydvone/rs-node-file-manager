import { readdir } from 'node:fs/promises';
import { path } from './path';

export const ls = async () => {
  const msgError = '-ls- operation failed';
  const srcPath = path('files');
  try {
    const files = await readdir(srcPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.error(msgError);
  }
};

// await ls();
