### 单页应用监控工具
### 使用方法
1.安装  
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
### 功能特性
#### 一.获取首屏加载相关数据
1. 首次可交互时间
2. 页面完全加载时间
3. 白屏时间

#### 二.监听url变化并上传数据

#### 三.监控error输出并上报数据

#### 四.无技术壁垒，vue react 项目都可以使用

#### 无.接入成本低，对现有代码侵如程度很低