# reward.js
## 1.reward.js 是什么？
reward.js 是一个只需一行代码即可实现网站赞赏功能的 JS 。（当然，是基于二维码实现的。）
## 2.为什么要开发 Reward.js ？
目前网上有很多种基于二维码赞赏功能的实现方式，但大部分实现都需要改动网站多处地方，侵入性太强。因此就有了这个项目，至少我认为这种实现方式更优雅一些。
## 3.Reward.js 怎么用？
1. 下载 [reward.min.js](https://raw.githubusercontent.com/shelwee/reward.js/master/reward.min.js) 
2. 把 reward.min.js 文件里的两个二维码图片链接改为自己的并上传到服务器上
3. 在对应的页面插入下面这行代码即可显示赞赏按钮。（同样把下面的 src 的链接修改为你服务器上的 reward.min.js 的链接。）
```js
<script type="text/javascript">document.write(unescape("%3Cdiv id='reward' %3E%3C/div%3E%3Cscript src='http://www.shelwee.com/wp-content/themes/shelwee/js/reward.min.js' type='text/javascript'%3E%3C/script%3E"));</script>
```
## 4.示例图
![image](http://www.shelwee.com/wp-content/uploads/2017/11/reward-demo.png)

## 5.reward.js Change Logs
---

Version 1.1 – Released date: 11-22-2017
```
* 修改部分布局及样式
* 渠道名从文字改为 base64 logo 图标
```
Version 1.0 - Released date: 11-17-2017
```
* 第一个版本
```
