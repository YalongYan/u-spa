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

// 通过 key 获取 cookie 的值
export const getCookieByKey = (key: string) => {
  let cookieArr = document.cookie.split(';')
  let result = ''
  cookieArr.forEach(item => {
    let arr = item.split('=')
    if (arr[0].trim() === key) {
      result = arr[1].trim()
    }
  })
  return result
}

/**
 * 
 * @param str
 * localStorage 可能存储的是对象，层层嵌套，这种情况，str 就传 "a.b.c"， 对象的示例： {a: {b: {c: 'hi'}}}
 * @returns localStorage中寻找到的值
 */
export const getLocalStorageByKey = (str: string) => {
  let result = ''
  if (str.indexOf('.') > 0) {
    let keyArr = str.split('.')
    // 避免空值
    let initObj = localStorage.getItem(keyArr[0]) ? JSON.parse(localStorage.getItem(keyArr[0])) : ''
    if (!initObj) {
      return ''
    }
    for (let i = 1; i < keyArr.length; i++) {
      if (i === keyArr.length - 1) {
        result = initObj[keyArr[i]]
      } else {
        initObj = initObj[keyArr[i]]
      }
    }
  } else {
    result = localStorage.getItem(str)
  }
  return result
}

/**
 * 
 * @param cookieKey cookie 的 key 值
 * @returns 
 */
export const getUserName = (cookieKey: string) => {
  if (!cookieKey) {
    return ''
  }
  let result = ''
  let cookieStr = document.cookie || ''
  cookieStr && cookieStr.split(';').forEach(item => {
    let subItem = item.trim()
    let subArr = subItem.split('=')
    if (subArr[0] === cookieKey) {
      result = subArr[1]
    }
  })
  return result
}