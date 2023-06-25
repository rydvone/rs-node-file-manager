export const parseArgs = (args, findArg) => {
  let nickname = 'friend';
  const keyArgs = findArg;
  const arrArgs = args.slice();

  arrArgs.forEach(item => {
    if (item.startsWith(keyArgs)) {
      const parseNickname = item.slice(11);
      nickname = parseNickname ? parseNickname : nickname;
    }
  });
  return nickname;
}
