## 单页应用监控工具
### 能监控啥
1. 监听url改变
2. 监听页面初次加载性能指标
3. 监听console.error异常输出

### 使用方法
1.安装 & 使用  

`npm install u-spa -S`   

2.以react hooks 项目为例，只需在项目入口加入以下代码：   
```
import uSpa from 'u-spa';
useEffect(() => {
  uSpa(id) // 通过这个id，获得项目的配置信息
}, []);
```

3.以vue项目为例，只需在main.js 添加如下代码
```
import uSpa from 'u-spa';
uSpa(id) // 通过这个id，获得项目的配置信息
```
上面id是干啥的，以及内部实现原理看这里  [https://www.cnblogs.com/yalong/p/15954026.html](https://www.cnblogs.com/yalong/p/15954026.html)


### 特性
1. 采集页面首次加载的性能指标，并上报

2. 监听url改变，并上报数据，包括首页也会触发上报

3. 监听console.error 并上报打印的数据

4. 接入方便，只需两行代码

5. 无技术壁垒，不管是vue 还是 react都可以支持

6. u-spa 不只是限制在单页应用上使用，多页应用也是可以用的
