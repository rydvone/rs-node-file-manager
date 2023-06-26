import { errors } from '../assets/errors.js';
import { ls } from './ls.js';
import { os } from './os.js';

export const handleInData = (input) => {
  const inCommand = input.split(' ');
  const curPath = process.cwd();

  switch (inCommand[0]) {
    case 'ls':
      ls(inCommand.slice(1));
      break;
    case 'os':
      os(inCommand.slice(1));
      break;
    default:
      console.log(errors.input);
  }
  console.log(`Current path : ${curPath}`);
  console.log('-------------------');
  return 0;
};
