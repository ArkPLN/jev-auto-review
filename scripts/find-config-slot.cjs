// 在全部客户端模块包中定位自动配置表单到插件页的注册方
const fs = require('fs')
const path = require('path')
const root = 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai'
const names = fs.readdirSync(root).filter(name => name.startsWith('dsh-client-ui'))
const hits = []
for (const name of names) {
  const file = path.join(root, name, 'lib', 'client.js')
  if (!fs.existsSync(file)) continue
  const text = fs.readFileSync(file, 'utf8')
  for (const needle of ['plugins.row.config', 'plugins.bundle.config', 'plugins.item']) {
    if (text.includes(needle)) hits.push(`${name}: ${needle} @ ${text.indexOf(needle)}`)
  }
}
console.log(hits.join('\n') || 'no hits')
