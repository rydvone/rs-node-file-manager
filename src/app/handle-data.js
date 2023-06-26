import { errors } from '../assets/errors.js';
import { path } from './path.js';
import { ls } from './ls.js';
import { os } from './os.js';

export const handleInData = (input) => {
  const inCommand = input.split(' ');
  const curDir = path();

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
  console.log(`Current path : ${curDir}`);
  console.log('-------------------');
  return 0;
};
