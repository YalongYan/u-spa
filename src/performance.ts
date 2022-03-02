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

  /**
   * 加定时 是因为 初始化的时候，需要把数据存在 localStorage 中，
   * 如果没有定时，获取不到 localStorage 中的数据
  */
  setTimeout(() => {
    console.log({
      type: 'performance',
      userName,
      value: JSON.stringify(obj),
      userAgent: navigator.userAgent,
      visitTime: getCurrentDate(),
      visitUrl:location.href,  // 访问地址
    })
    // 上报第一次页面的数据
    console.log({
      type: 'url',
      userName,
      value: location.href,
      userAgent: navigator.userAgent,
      visitTime: getCurrentDate(),
    })
  }, 1000);
}

function performanceInitFn() {
  window.addEventListener('load', fn)
}

export default performanceInitFn;