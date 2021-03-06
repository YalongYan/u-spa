import { requestUlr } from './config';
import { postRequest } from './uploadData'
import { getCurrentDate, getUserName } from './utils';

const monitorErrorInitFn = () => {
  /**
   * 由于vue react 这些框架本身会处理js异常，这里就只监听 console.error
   * console.error 打印的错误，就是要处理上报的信息
   * 上报的信息就存储为一个字符串
   */
  const oldErrorLog = console.error;

  let userName = getUserName()
  console.error = null // 这一步是避免重复添加
  console.error = function(str) {
    oldErrorLog(str)
    console.log({
      type: 'error',
      userName,
      url: location.href,
      value: str,
      userAgent: navigator.userAgent,
      visitTime: getCurrentDate(),
    })
  }
}

export default monitorErrorInitFn
