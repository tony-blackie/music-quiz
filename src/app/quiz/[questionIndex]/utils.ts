export const getRandomValueFromZeroToNum = (num: number) => {
  const part = 1 / num;

  const randomNumber = Math.random();

  return Math.floor(randomNumber / part) + 1;
};
