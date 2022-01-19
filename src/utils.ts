// 获取当前时间 年-月-日 时:分:秒
export const getCurrentDate = () => {
  let time: Date = new Date();
  let year = time.getFullYear();
  let month: number | string = time.getMonth() + 1;
  let day: number | string = time.getDate();
  let h: number | string = time.getHours();
  let m: number | string = time.getMinutes();
  let s: number | string = time.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return `${year}-${month}-${day} ${h}:${m}:${s}`;
};
