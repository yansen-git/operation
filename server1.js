const http = require("http");
const fs = require("fs");
const url = require("url");
const mysql = require("mysql");
const io = require("socket.io");
const regs = require("../libs/regs");

//数据库
let db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "123456",
	database: "database"
})


//http服务器
let httpServer = http.createServer((req, res) => {
	//console.log(req.url)=="/reg?a=1&b=2"
	//console.log(url.parse(req.url,true))将？后的参数转化为json对象的形式
	let {
		pathname,
		query
	} = url.parse(req.url, true); //es6结构赋值，可作用于对象和数组，类似于映射，一一对应
	//注册
	if (pathname == "/reg") {
		//获取用户名和密码
		let {
			user,
			pass
		} = query;

		//1.效验是数据
		if (!regs.username.test(user)) {
			res.write(JSON.stringify({
				code: 1,
				msg: "用户名不符合规范"
			}))
			res.end();
		} else if (!regs.password.test(pass)) {
			res.write(JSON.stringify({
				code: 1,
				msg: "密码不符合规范"
			}))
			res.end();
		} else {
			//2.效验用户名是否重复
			db.query(`SELECT ID FROM user_table WHERE username='${user}'`, (err, data) => {
				if (err) {
					res.write(JSON.stringify({
						code: 1,
						msg: "数据库有错"
					}))
					res.end();
				} else if (data.length > 0) {
					res.write(JSON.stringify({
						code: 1,
						msg: "此用户名已存在"
					}))
					res.end();
				} else {
					//3.插入数据库新用户名
					db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`, err => {
						if (err) {
							res.write(JSON.stringify({
								code: 1,
								msg: '数据库有错'
							}));
							res.end();
						} else {
							res.write(JSON.stringify({
								code: 0,
								msg: '注册成功'
							}));
							res.end();
						}
					});
				}
			})
		}
	}else if(pathname == "/login"){
		//登陆接口
		let {
			user,
			pass
		} = query;
		//1.效验数据
		if(!regs.username.test(user)){
			res.write(JSON.stringify({
				code:1,
				msg:"用户名不符合规范"
			}))
			res.end();
		}else if(!regs.password.test(pass)){
			res.write(JSON.stringify({
				code:1,
				msg:"密码不符合规范"
			}))
			res.end();
		}else{
			//2.查询数据
			db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`,(err,data)=>{
				if(err){
					console.log(err)
					res.write(JSON.stringify({
						code:1,
						msg:'数据库有错'
					}))
					res.end();
				}else if(data.length == 0){
					res.write(JSON.stringify({
						code:1,
						msg:'此用户名不存在'
					}))
					res.end();
				}else if(data[0].password!=pass){
					res.write(JSON.stringify({
						code:1,
						msg:'用户名或密码有误'
					}))
					res.end();
				}else{
					//3.设置状态
					db.query(`UPDATE user_table SET online=1 WHERE ID='${data[0].ID}'`,(err)=>{
						if(err){
							res.write(JSON.stringify({
								code:1,
								msg:'数据库错误'
							}))
							res.end();
						}else{
							res.write(JSON.stringify({
								code:0,
								msg:'登陆成功'
							}))
							res.end();
						}
					})
				}
			})
		}
	}else{//如果是请求静态文件的话
		fs.readFile(`../www${pathname}`,(err,data)=>{
			if(err){
				res.writeHeader(404);
				res.write('Not Found');
			}else{
				res.write(data);
			}
			res.end();
		})
	}
});

httpServer.listen(8088);
