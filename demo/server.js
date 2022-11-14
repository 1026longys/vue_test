const express  = require('express')
var history = require('connect-history-api-fallback');

const app = express()
// 在引入资源之前使用
app.use(history())
app.use(express.static(__dirname+ '/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'John',
        age: 18
    })
})

app.listen(5005, (err)=> {
    if(!err) console.log('服务器启动成功了！')    
})