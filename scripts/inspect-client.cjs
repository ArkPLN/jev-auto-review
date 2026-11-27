// 读取打包后的插件管理页代码，定位行配置入口的渲染与判定逻辑
const fs = require('fs')
const p = process.env.DSH_NODE_EXECUTABLE && process.env.ELECTRON_RUN_AS_NODE
  ? 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai/dsh-client-ui-plugin-manager/lib/client.js'
  : 'D:/dev/dsh/resources/app.asar/dsh/node_modules/@deepseek-ai/dsh-client-ui-plugin-manager/lib/client.js'
// ASAR 内部文件必须用 Electron 运行时读取；普通 node 无法打开 app.asar 路径
const electronNode = process.env.DSH_NODE_EXECUTABLE
const s = fs.readFileSync(p, 'utf8')
for (const needle of ['renderSlot(`plugins.row.config`', 'plugins.row.config`', 'configureControl', 'view:`page`', "view:'page'"]) {
  const at = s.indexOf(needle)
  console.log('---', JSON.stringify(needle), 'at', at)
  if (at >= 0) console.log(s.slice(at - 400, at + 500).replace(/\n/g, ' '))
}
