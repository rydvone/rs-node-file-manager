import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const path = () => {
  const pathDir = join(__dirname);
  return pathDir;
};
