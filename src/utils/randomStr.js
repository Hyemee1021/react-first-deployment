export const randomCharGenerator = () => {
  const str = `qwertyuiopasdfghjklzxcvbnm`;
  const num = Math.round(Math.random() * str.length);

  return str[num];
};
