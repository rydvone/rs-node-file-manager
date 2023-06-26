export const objCommand = {
  command: [
    'up',
    'cd',
    'ls',
    'add',
    'rn',
    'cp',
    'mv',
    'rm',
    'os',
    'hash',
    'compress',
    'decompress',
  ],
  param: {
    os: ['--EOL', '--cpus', '--homedir', '--username', '--architecture'],
  },
  single: ['up', 'ls'],
};
