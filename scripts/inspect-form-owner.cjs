// 检查页面渲染 formFor 的位置：哪些视图把 formFor 传给插槽或直接渲染
const fs = require('fs')
const p = 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai/dsh-client-ui-plugin-manager/lib/client.js'
const s = fs.readFileSync(p, 'utf8')
for (const needle of ['formFor', 'ownerProps']) {
  let from = 0
  let count = 0
  for (;;) {
    const at = s.indexOf(needle, from)
    if (at < 0) break
    count += 1
    if (count <= 8) {
      console.log('---', needle, '@', at)
      console.log(s.slice(Math.max(0, at - 260), at + 320).replace(/\n/g, ' '))
    }
    from = at + 1
  }
  console.log('===', needle, 'total', count)
}
