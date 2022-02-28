### 单页应用监控工具
### 使用方法
1.安装
npm i u-spa -S
2.以react hook 项目为例，只需在项目入口加入以下代码：
```
import uSpa from 'u-spa';
useEffect(() => {
  uSpa(id) // 这个id就是填写信息生成的id
}, []);
```
通过上面的id，获得项目的配置信息

### 一.获取首屏加载相关数据
1. 首次可交互时间
2. 页面完全加载时间
3. 白屏时间

### 二.监听url变化并上传数据

### 三.监控error输出并上报数据