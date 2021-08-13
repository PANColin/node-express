const express = require('express');
const router = express.Router();
const {
	connection,
	requestQuery
} = require('../db/connection');
connection.connect(() => {
	console.log('数据库已连接');
})

//注册博主
router.post('/blogger/add', (req, res) => {
	let post = req.body,
		postArr = [];
	console.log(req.body);
	for (let i in post) {
		postArr.push(post[i]);
	}
	const newPost = JSON.stringify(postArr).slice(1, JSON.stringify(postArr).length - 1)
	let sql = `insert into t_blogger (userName,password) values(${newPost}) `;
	connection.query(sql, (err, data) => {
		if (err) {
			throw err;
		} else {
			// console.log(res);
			// res.send("插入成功");
			res.json({
				msg: 'success',
				code: 200,
			})
		}
	})

})

// 查询博主
router.post('/blogger/login', (req, res) => {
	// body为post请求的参数
	// const name = req.body.id
	const userName = req.body.userName;
	const password = req.body.password;
	console.log(req.body);
	connection.query(`select * from t_blogger where userName = '${userName}' and password='${password}'`, (err,
		data) => {
		if (err) {
			console.log(err);
		} else {
			if (data.length <= 0) {
				res.json({
					msg: '用户名或密码错误',
					code: 303,
					data
				})
			} else {
				res.json({
					msg: 'success',
					code: 200,
					data
				})
			}
		}
	})
})

module.exports = router
