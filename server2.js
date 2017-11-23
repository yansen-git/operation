const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
const io = require("socket.io");
const regs = require("../libs/regs");

//数据库
let db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"database"
})

//http服务器
let httpServer = http.createServer((req,res)=>{
    //读取静态文件
    fs.readFile(`../www${req.url}`,(err,data)=>{
        if(err){
            res.writeHeader(404);
            res.write("Not Found");
        }else{
            res.write(data);
        }
        res.end();
    })
})
httpServer.listen(8080);

//websocket服务器
let aSock = [];//sock对象数组
let wsServer = io.listen(httpServer);
wsServer.on("connection",sock=>{
    aSock.push(sock);
    let cur_username = "";//用户名
    let cur_userID = "";//ID

    //注册
    sock.on("reg",(user,pass)=>{
        //效验
        if(!regs.username.test(user)){
            sock.emit("reg_ret",1,"用户名不符合规范");
        }else if(!regs.password.test(pass)){
            sock.emit("reg_ret",1,"密码不符合规范");
        }else{
            //查询用户是否已存在
            db.query(`SELECT ID FROM user_table WHERE username='${user}'`,(err,data)=>{
                if(err){
                    sock.emit("reg_ret",1,"数据库错误");
                }else if(data.length>0){
                    sock.emit("reg_ret",1,"用户名已存在");
                }else{
                    //插入数据库
                    db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,err=>{
                        if(err){
                            sock.emit("reg_ret",1,"数据库错误");
                        }else{
                            sock.emit("reg_ret",0,"注册成功");
                        }
                    })
                }
            })
        }
    })

    //登陆
    sock.on("login",(user,pass)=>{
        //效验
        if(!regs.username.test(user)){
            sock.emit("login_ret",1,"用户名不符合规范");
        }else if(!regs.password.test(pass)){
            sock.emit("login_ret",1,"密码不符合规范");
        }else{
            //验证用户是否存在，如果存在密码是否正确
            db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`,(err,data)=>{
                if(err){
                    sock.emit("login_ret",1,"数据库错误");
                }else if(data.length==0){
                    sock.emit("login_ret",1,"用户名不存在");
                }else if(data[0].password!=pass){
                    sock.emit("login_ret",1,"用户名或密码错误");
                }else{
                    //登陆成功设置状态为1
                    db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`,err=>{
                        sock.emit("login_ret",0,"登陆成功");
                        cur_username = user;
                        cur_userID = data[0].ID;
                    })
                }
            })
        }
    })

    //发言
    sock.on("msg",text=>{
        if(!text){
            sock.emit("msg_ret",1,"发送信息不能为空");
        }else{
            //触发自己的发送信息
            sock.emit("msg_ret",0,"发送成功");
            //派发给其他用户的信息
            aSock.forEach(item=>{
                if(item==sock)return;
                item.emit("msg_other",cur_username,text);
            })
        }
    })

    //离线
    sock.on("disconnect",err=>{
        db.query(`UPDATE user_Table SET online=0 WHERE username='${cur_username}'`,err=>{
            if(err){
                console.log("");
            }
            cur_username = "";
            cur_userID = "";
            aSock = aSock.filter(item=>item!=sock);
        })
    })
})
