import { getCurrentDate, getUserName } from './utils';
import { initType } from './common'
import { postRequest } from './uploadData';
let initRequestUrlValue: string = ''
let initHostUrlValue: string = ''
let initCookieNameValue: string | undefined = ''

function fn () {
  let timing: any = performance.getEntriesByType('navigation')[0]
  let TTI = timing.domInteractive - timing.fetchStart; // 首次可交互时间
  let L = timing.loadEventStart - timing.fetchStart; // 页面完全加载时间
  let FP = timing.responseEnd - timing.fetchStart; // 白屏时间
  let obj = {
    TTI, L, FP
  }

  let userName = getUserName(initCookieNameValue)

  const reqObj = {
    type: 'performance',
    userName,
    value: JSON.stringify(obj),
    userAgent: navigator.userAgent,
    visitUrl:location.href,  // 访问地址
  }
  if (initHostUrlValue === location.host) {
    postRequest(initRequestUrlValue, reqObj)
  }
}

function performanceInitFn(obj: initType) {
  const { requestUrl, hostUrl, cookieNameKey } = obj
  initRequestUrlValue = requestUrl
  initHostUrlValue = hostUrl
  initCookieNameValue = cookieNameKey

  window.addEventListener('load', fn)
}

export default performanceInitFn;