// 提取官方伴随设置页渲染配置表单的方式，作为行配置表单的参照
const fs = require('fs')
const p = 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai/dsh-client-ui-settings-web-search/lib/client.js'
const s = fs.readFileSync(p, 'utf8')
const at = s.indexOf('plugins.item')
console.log(s.slice(Math.max(0, at - 3000), at + 1500).replace(/\n/g, ' '))
