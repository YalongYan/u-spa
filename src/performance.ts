import { requestUlr } from './config';
import { postRequest } from './uploadData';
import { getCurrentDate, getUserName } from './utils';

let fn = async () => {
  let timing: any = performance.getEntriesByType('navigation')[0]
  let TTI = timing.domInteractive - timing.fetchStart; // 首次可交互时间
  let L = timing.loadEventStart - timing.fetchStart; // 页面完全加载时间
  let FP = timing.responseEnd - timing.fetchStart; // 白屏时间
  let obj = {
    TTI, L, FP
  }
  let userName = getUserName()

  setTimeout(() => {
    console.log({
      type: 'performance',
      userName,
      value: JSON.stringify(obj),
      userAgent: navigator.userAgent,
      visitTime: getCurrentDate(),
      visitUrl:location.href,  // 访问地址
    })
    console.log({
      type: 'url',
      userName,
      value: location.href,
      userAgent: navigator.userAgent,
      visitTime: getCurrentDate(),
    })
  }, 1000);
  // const res = await postRequest(requestUlr, {
  //   type: 'url',
  //   value: JSON.stringify(obj),
  //   userAgent: navigator.userAgent,
  //   visitTime: getCurrentDate(),
  // })
}

function performanceInitFn() {
  window.addEventListener('load', fn)
}

export default performanceInitFn;