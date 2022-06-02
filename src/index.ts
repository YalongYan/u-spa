import monitorErrorInitFn from './monitorError'
import monitorUlrInitFn from './monitorUlr'
import performanceInitFn from './performance'

/**
 * @description 通过id 获得用于统计的信息
 * @param id 
 */
 async function getInfoById (id: number) {
  var promise = new Promise((resolve, reject) => {
    // 模拟异步处理, 请求后端获得 infoById的数据
    let infoById = { // 这是模拟从后端获取的
      originUrl: 'abc.com', // 网站域名，只有在此域名下才上报数据
      userNameLocation: 'localStorage', // 用户信息是存在 localStorage 还是 cookie 下， 这里是存放在在localStorage 中
      userNameKey: 'name', // 这是具体的key值，对于对象格式的数据，就写成 'a.b.c'
      temporaryUserName: '', // 如果没有userNameLocation 和userNameKey 后端就生成一个临时的用户名
    }
    resolve(infoById)
  });
  let res = await(promise)
  console.log('spa 初始配置信息如下:')
  console.log(res)
  localStorage.setItem('uSpaInfoObj', JSON.stringify(res))

  performanceInitFn()
  
  setTimeout(() => {
    monitorUlrInitFn()
    monitorErrorInitFn()
  }, 1000);
}

function initSpaInfo (id: number) {
  getInfoById(id)
}

export default initSpaInfo;

