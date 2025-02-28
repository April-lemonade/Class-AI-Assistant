# 模型调用

1. 注册千帆账号，获取API Key和Secret Key

![image-20250228113318518](https://p.ipic.vip/at9i48.png)

2. API Key填进client_id，Secret Key填进client_secret

![image-20250228112809834](https://p.ipic.vip/21xhcl.png)

3. deepseek部署文档：https://api-docs.deepseek.com/zh-cn/

# 聊天记录文件

1. 文件内容可以根据需要增删或者修改结构

![image-20250228113856496](https://p.ipic.vip/ox1utf.png)

2. 本地修改后的文件上传到云存储，获得下载地址（https://xxxxxxxx/records.txt?sign=xxxxxxxxx）

![image-20250228114808978](https://p.ipic.vip/uo37ix.png)

3. 修改文档读取地址![image-20250228114952759](https://p.ipic.vip/3609gk.png)

4. 可能出现的问题：目前所有的内容都是以prompt传入，会影响模型处理速率以及可能出现prompt超长的情况，可以考虑使用模型内置的系统记忆等解决方案（https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Mlwg321zw）

# 其他问题

1. 用户使用数据在小程序发布后可以通过微信官方获取（https://developers.weixin.qq.com/miniprogram/analysis/wedata/intro/）
2. 目前小程序未链接数据库，无法存储用户数据，如需埋点，或许需要先链接数据库