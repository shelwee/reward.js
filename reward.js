/*! reward.js v1.0 | (c) Shelwee | www.shelwee.com/reward-js */
window.onload=function(){ 
	var root = document.getElementById("reward");
	var content = '赞赏<div id="reward_content">'+
	'<span class="qrcode"><img src="http://www.shelwee.com/wp-content/uploads/2017/11/wechat.jpg">微信</span>'+
	'<span class="qrcode"><img src="http://www.shelwee.com/wp-content/uploads/2017/11/alipay.jpg">支付宝</span></div>' +
	'<style type="text/css">'+
		'#reward{position:relative;display:block;margin:50px auto;text-align:center;font-size:20px;line-height:40px;z-index:1;width:100px;height:40px;color:#fff;border-radius:50px;background:#E64340;letter-spacing:3px;text-indent:5px;cursor:pointer;transition:color .3s,background-color .3s}'+
		'#reward:hover{background:#CE3C39}'+
		'#reward:hover #reward_content{display:block}'+
		'#reward_content{margin:0!important;z-index:1;position:absolute;width:470px;top:-266px;left:-186px;display:none;background:#fff;box-shadow:0 0 10px #ccc;border:1px solid #ccc;border-radius:5px}'+
		'#reward_content .qrcode{width:220px;height:250px;float:left;font-size:14px;text-align:center;line-height:1em;color:#333;padding: 5px;}'+
		'#reward_content img{width:200px;height:200px;padding:10px;margin: 5px 0;border: solid 1px #e5e5e5;}'+
	'</style>';
	root.innerHTML = content;
}