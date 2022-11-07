import { requestUlr } from './config';
import { postRequest } from './uploadData'
import { getCurrentDate, getUserName } from './utils';
import { initType } from './common'

let initRequestUrlValue: string = ''
let initHostUrlValue: string = ''
let initCookieNameValue: string | undefined = ''

const monitorErrorInitFn = (obj: initType) => {
  const { requestUrl, hostUrl, cookieNameKey } = obj
  initRequestUrlValue = requestUrl
  initHostUrlValue = hostUrl
  initCookieNameValue = cookieNameKey

  // const oldErrorLog = console.error;

  let userName = getUserName(initCookieNameValue)

  window.onunhandledrejection = (e: PromiseRejectionEvent) => {
    throw new Error(e.reason.stack);
  }

  // 设置成 true 是捕获阶段，可以获取图片加载失败的情况， 冒泡阶段获取不到
  window.addEventListener('error', (e: any) => {
    const {message, filename, lineno, colno, error} = e
    const imageSrc = (e.target && e.target.src) || ''
    let reqObj
    if (imageSrc) {
      reqObj = {
        type: 'image-error',
        userName,
        value: imageSrc,
        userAgent: navigator.userAgent,
        visitTime: getCurrentDate(),
      }
     
    } else {
      let obj = {
        filename, lineno, colno, message
      }
      reqObj = {
        type: 'js-error',
        userName,
        value: JSON.stringify(obj),
        userAgent: navigator.userAgent,
        // visitTime: getCurrentDate(),
      }
    }
    postRequest(initRequestUrlValue, reqObj)
  }, true)
}

export default monitorErrorInitFn
