import monitorErrorInitFn from './monitorError'
import monitorUlrInitFn from './monitorUlr'
import performanceInitFn from './performance'
import { initType } from './common'

/** 
 * @param requestUrl 接受数据的服务地址
 * @param hostUrl 网站域名，就是 location.host，只有在此域名下才上报数据
 * @param cookieNameKey  如果想同时上报用户名字，或者其他cookie 信息，就用这个作为查找cookie 的 key
 */
function initSpaInfo (requestUrl: string, hostUrl: string, cookieNameKey: string | undefined): void {
  const obj: initType = {
    requestUrl,
    hostUrl,
    cookieNameKey
  }
  setTimeout(() => {
    performanceInitFn(obj)
    monitorUlrInitFn(obj)
    monitorErrorInitFn(obj)
  }, 1000);
}

export default initSpaInfo;

