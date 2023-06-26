import { readdir, stat } from 'node:fs/promises';
import { path } from './path.js';
import { getFMPath } from './fm-path.js';
import { errors } from '../assets/errors.js';

const arrList = [];

const getSortArr = (arrData) => {
  const arr = arrData.slice();
  return arr.sort((a, b) => a.category.localeCompare(b.category));
};

export const ls = async (params) => {
  if (params.length > 0) {
    console.error(errors.input);
    return 0;
  }
  const srcPath = path();
  // const srcPath = process.cwd();

  try {
    const filesFull = await readdir(srcPath, { withFileTypes: true });
    for (const file of filesFull) {
      if (file.isFile()) {
        arrList.push({ name: file.name, category: 'file' });
      } else if (file.isDirectory()) {
        arrList.push({ name: file.name, category: 'dir' });
      }
    }
    console.log('Table list: ');
    console.table(getSortArr(arrList));
    arrList.length = 0;
  } catch (err) {
    console.error(errors.operation);
  }
};
