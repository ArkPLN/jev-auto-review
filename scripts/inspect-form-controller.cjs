// 提取 ui-settings 客户端包中 ConfigFormController 的完整定义
const fs = require('fs')
const p = 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai/dsh-client-ui-settings/lib/client.js'
const s = fs.readFileSync(p, 'utf8')
const at = s.indexOf('ConfigFormController=class')
console.log('controller at', at)
if (at >= 0) console.log(s.slice(at, at + 4200).replace(/\n/g, ' '))
const ns = s.indexOf('ConfigFormSnapshot')
console.log('---snapshot ref at', ns)
if (ns >= 0) console.log(s.slice(Math.max(0, ns - 200), ns + 900).replace(/\n/g, ' '))
