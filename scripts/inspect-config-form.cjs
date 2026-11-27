// 检查插件管理页是否对未注册表单的行提供自动生成的配置区域
const fs = require('fs')
const p = 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai/dsh-client-ui-plugin-manager/lib/client.js'
const s = fs.readFileSync(p, 'utf8')
for (const needle of ['configurations', 'autoForm', 'AutoConfig', 'configForm']) {
  let from = 0
  let count = 0
  for (;;) {
    const at = s.indexOf(needle, from)
    if (at < 0) break
    count += 1
    if (count <= 4) {
      console.log('---', needle, '@', at)
      console.log(s.slice(Math.max(0, at - 200), at + 400).replace(/\n/g, ' '))
    }
    from = at + 1
  }
  console.log('===', needle, 'total', count)
}
