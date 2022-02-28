import { requestUlr } from './config';
import { postRequest } from './uploadData';
import { getCurrentDate, getUserName } from './utils';

// history 扩展函数, 只扩展 pushState replaceState 这俩就行
var _extendEvent = function(type: 'pushState' | 'replaceState') {
  // 保留原来的事件
  let history: History = window.history
  var orig = history[type];
  return function() {
      // 执行原来的事件，保证不影响原有事件
      let result= orig.apply(this, arguments);
      let e: any = new Event(type);
      e.arguments = arguments;
      // 主动触发'pushState','replaceState'事件
      window.dispatchEvent(e);
      return result;
  };
};

// 扩展原有的 pushState、replaceState 方法
history.pushState = _extendEvent('pushState');
history.replaceState = _extendEvent('replaceState');
let userName = getUserName()

let tempUrl = '' // historyFn hashFn 有时候会重复，所以用这个变量去重

let historyFn = async (e: any) => {
  console.log('history====')
  let href = e.currentTarget.location.href
  if (tempUrl === href) {
    return false
  } else {
    tempUrl = href
  }
  console.log({
    type: 'url',
    userName,
    value: href,
    userAgent: navigator.userAgent,
    visitTime: getCurrentDate(),
  })
  // const res = await postRequest(requestUlr, {
  //   type: 'url',
  //   value: href,
  //   userAgent: navigator.userAgent,
  //   visitTime: getCurrentDate(),
  // })
}

let hashFn = async (e: HashChangeEvent) => {
  console.log('hash===')
  let href = e.newURL
  if (tempUrl === href) {
    return false
  } else {
    tempUrl = href
  }
  console.log({
    type: 'url',
    userName,
    value: href,
    userAgent: navigator.userAgent,
    visitTime: getCurrentDate(),
  })
  // const res = await postRequest(requestUlr, {
  //   type: 'url',
  //   value: href,
  //   url: location.href,
  //   userAgent: navigator.userAgent,
  //   visitTime: getCurrentDate(),
  // })
  // console.log(res)
}

let url = location.href

const monitorUlrInitFn = () => {
  /**
   * location.hash, history.go, history.back, history.forward 会触发 popstate
   * 不加下面的判断，在hash模式下 会触发两次
   */
   window.addEventListener('hashchange', hashFn);
   window.addEventListener('replaceState', historyFn);
   window.addEventListener('pushState', historyFn);
   window.addEventListener('popstate', historyFn);
  // if (url.indexOf('#') > -1) {
  //   window.addEventListener('hashchange', hashFn);
  // } else {
  //   window.addEventListener('replaceState', historyFn);
  //   window.addEventListener('pushState', historyFn);
  //   window.addEventListener('popstate', historyFn);
  // }
}

export default monitorUlrInitFn;
