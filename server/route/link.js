const express = require('express');
const router = express.Router();
const {
	connection,
	requestQuery
} = require('../db/connection');
connection.connect(() => {
	console.log('数据库已连接');
})


// router.post('/link/add', (req, res) => {
// 	// query为get请求参数
// 	// const id = req.query.id
// 	// let post =JSON.parse(req.body) 
// 	let post = req.body,
// 		postArr = [];
// 		console.log(req.body);
// 	for (let i in post) {
// 		postArr.push(post[i]);
// 	}
// 	console.log(JSON.stringify(postArr));
// 	const newPost = JSON.stringify(postArr).slice(1, JSON.stringify(postArr).length-1)
// 	// console.log(postArr);
// 	// console.log(newPost);
// 	let sql = `insert into t_blogger (userName,password,proFile,nickName,sign,imageName) values(${newPost}) `;
// 	connection.query(sql, (err, data) => {
// 		if (err) {
// 			throw err;
// 		} else {
// 			// console.log(res);
// 			// res.send("插入成功");
// 			res.json({
// 				msg: 'success',
// 				code: 200,
// 			})
// 		}
// 	})

// })

// post请求
router.post('/link', (req, res) => {
	// body为post请求的参数
	// const name = req.body.id
	const id = req.body.id
	console.log(req.body);
	connection.query(`select * from t_link`, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.json({
				msg: 'success',
				code: 201,
				data
			})
		}
	})
})

module.exports = router
