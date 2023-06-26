import { EOL, cpus, userInfo, arch } from 'node:os';
import { errors } from '../assets/errors.js';
import { objCommand } from '../assets/commands.js';

const getEol = () => {
  return JSON.stringify(EOL);
};

const getCpus = () => {
  return cpus().map(({ model, speed }) => {
    return { model, speed };
  });
};

const getHomedir = () => {
  return userInfo().homedir;
};

const getUsername = () => {
  return userInfo().username;
};

const getArchitecture = () => {
  return arch();
};

export const os = async (params) => {
  if (params.length > 1 || !objCommand.param.os.includes(params[0])) {
    console.error(errors.input);
    return 0;
  }
  const param = params[0];

  try {
    switch (param) {
      case '--EOL':
        console.log(getEol());
        break;

      case '--cpus':
        console.log(getCpus());
        break;

      case '--homedir':
        console.log(getHomedir());
        break;

      case '--username':
        console.log(getUsername());
        break;

      case '--architecture':
        console.log(getArchitecture());
        break;

      default:
        break;
    }
  } catch (err) {
    console.error(errors.operation);
  }
};
