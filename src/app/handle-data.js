import { errors } from '../assets/errors.js';
import { ls } from './ls.js';
import { os } from './os.js';
import { up } from './up.js';

export const handleInData = (input) => {
  const inCommand = input.split(' ');

  switch (inCommand[0]) {
    case 'ls':
      ls(inCommand.slice(1));
      break;
    case 'os':
      os(inCommand.slice(1));
      break;
    case 'up':
      up(inCommand.slice(1));
      break;
    default:
      console.log(errors.input);
  }
  const curPath = process.cwd();
  console.log(`Current path : ${curPath}`);
  console.log('-------------------');
  return 0;
};
