
const express = require('express');
const app = express();

// 1、导入路由模块
const myrouter=require('./router')
// 2、注册路由模块
app.use(myrouter)


app.listen(3000,()=>{
    console.log("running at http://127.0.0.1:3000")
})

