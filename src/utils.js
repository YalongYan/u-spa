// 获取当前时间 年-月-日 时:分:秒
export const getCurrentDate = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return `${year}-${month}-${day} ${h}:${m}:${s}`;
};
