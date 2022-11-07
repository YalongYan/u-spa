## 单页应用监控工具
### 能监控啥
1. 监听url改变
2. 监听页面初次加载性能指标
3. 监听js异常
4. 监听图片加载异常
5. 监听以上数据并上报

### 使用方法
1.安装 & 使用  

`npm install u-spa -S`   

2.以react hooks 项目为例，只需在项目入口加入以下代码：   
```
import uSpa from 'u-spa';
useEffect(() => {
  uSpa(requestUrl, hostUrl, cookieNameKey)
}, []);
```
### 参数说明

- requestUrl - 必传 上报数据的服务地址，需要启动一个后台 server
- hostUrl - 必传 网站域名，就是 location.host，只有在此域名下才上报数据， 其他环境下不触发数据上报
- cookieNameKey - 非必传 如果想同时上报用户名字，或者其他cookie 信息，就用这个作为查找cookie 的 key

### 特性
1. 采集页面首次加载的性能指标，并上报

2. 监听url改变，并上报数据，包括首页也会触发上报

3. 监听js 异常，并上报详细错误，哪怕你的代码是 source-map 后的文件，也会把source-map 相关信息上报

4. 监听图片加载错误并上报

5. 接入方便，只需两行代码

6. 无技术壁垒，不管是vue 还是 react都可以支持

7. u-spa 不只是限制在单页应用上使用，多页应用也是可以用的
