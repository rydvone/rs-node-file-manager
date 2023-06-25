import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const path = (filename) => {
  const curPath = join(__dirname, filename);
  return curPath;
}
