const express = require('express');
const router = express.Router();
const {
	connection,
	requestQuery
} = require('../db/connection');
connection.connect(() => {
	console.log('数据库已连接');
})

// get请求
router.get('/blog', async (req, res) => {
	// query为get请求参数
	const id = req.query.id
	let sql = `select * from t_blog`;
	const data = await requestQuery(sql);
	res.json({
		msg: 'success',
		code: 200,
		data
	})
})

module.exports = router
