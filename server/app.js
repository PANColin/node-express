const express = require('express');
const app = express();
// 跨域中间件
const cors = require('cors');

// 配置跨域
app.use(cors());

// 配置post请求可以接受json格式数据
app.use(express.json());
// 配置post请求可以接受窗体格式数据
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./route/blog'));
app.use('/api', require('./route/blogger'));
app.use('/api', require('./route/blogtype'));
app.use('/api', require('./route/comment'));
app.use('/api', require('./route/link'));

// 监听端口
app.listen(3000, () => {
    console.log('3000端口开启!');
})