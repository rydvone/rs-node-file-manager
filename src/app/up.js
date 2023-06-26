import { errors } from '../assets/errors.js';

export const up = async (params) => {
  if (params.length > 0) {
    console.error(errors.input);
    return 0;
  }

  try {
    process.chdir('..');
  } catch (err) {
    console.error(errors.operation);
  }
};
