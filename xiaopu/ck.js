hostname=veishop.iboxpay.com

############## 圈x
#笑谱获取header
https:\/\/veishop\.iboxpay\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js
#笑谱获取更新TOKEN
https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf-user-auth-web\/ignore_tk\/veishop\/v1\/* url script-response-body https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js
