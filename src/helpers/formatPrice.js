/* eslint-disable no-cond-assign */
export default (price, sign) => {
  const pieces = parseFloat(price)
    .toFixed(sign ? 2 : 0)
    .split('');

  let ii = pieces.length;

  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ' ');
  }

  return sign ? `${pieces.join('')} ${sign}` : pieces.join('');
};
