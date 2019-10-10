/* eslint-disable */
/**
 * 添加千位分隔符
 * @param {数值} val
 */
export function addCommas(val) {
  if (val === '-') {
    return val;
  }

  if (val == null) {
    return val;
  }

  let valStr = val.toString();
  let flag = false;

  if (valStr.slice(-1) === '%') {
    flag = true;
    valStr = valStr.slice(0, -1);
  }

  const aIntNum = valStr.split('.');

  aIntNum[0] = aIntNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');

  if (aIntNum[1] && aIntNum[1].length >= 5) {
    aIntNum[1] = aIntNum[1].replace(/(\d{3})/g, '$1 ');
  }

  return flag ? `${aIntNum.join('.')}%` : aIntNum.join('.');
};
