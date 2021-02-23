//加载express模块
const express = require('express');

//加载MYSQL模块
const mysql = require('mysql');
// 创建MYSQL连接池
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'menu',
  connectionLimit: 20,
  charset: 'utf8'
});
//创建服务器
const server = express();
const md5 = require('md5')
//配置body-parser
const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({
  extended: false
}))
//加载CORS模块
const cors = require('cors');
server.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));

// 获取所有菜单分类的接口
server.get('/category_all', (req, res) => {
  //SQL语句以获取文章分类表的数据
  let sql = 'SELECT id,category_name FROM menu_category order by id';
  //执行SQL语句
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200, results: results })
  });
});
// 获取首页菜单分类的接口
server.get('/category_home', (req, res) => {
  //SQL语句以获取文章分类表的数据
  let sql = 'SELECT id,category_name,image FROM home_category order by id';
  //执行SQL语句
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200, results: results })
  });
});
// 获取导航栏分类下包含的菜单数据的接口
server.get('/index_all', (req, res) => {
  //获取客户端传递的cid参数
  let id = req.query.id;
  // let page = req.query.page;
  // let pagesize = 20;
  // let offset = (page - 1) * pagesize;
  // let rowcount;
  // let sql="SELECT COUNT(id) AS count FROM menu_article WHERE category_id=?";
  // pool.query(sql,[cid],(error ,results)=>{
  //   if(error) throw error;
  //   rowcount = results[0].count;
  //   let pagecount=Math.ceil(rowcount/pagesize)
  // 查询sql语句
  let sql = 'SELECT id,subject,main,content,image,user_id,category_id FROM menu_article WHERE category_id=?'
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200, results: results})
  })
});
  

// 获取首页小图标菜单数据的接口
server.get('/index_home', (req, res) => {
  //获取地址栏中的id参数
  let id = req.query.id;
  let sql = "SELECT r.id,subject,main,content,r.image,user_id,home_id FROM home_article AS r INNER JOIN home_category AS u ON home_id = u.id WHERE u.id=?";
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send({ message: "ok", code: 200, result: results })
  })
});
// 获取热门推荐菜单数据的接口
server.get('/hot', (req, res) => {
  //获取地址栏中的id参数
  let sql = "SELECT id,subject,main,content,image,user_id FROM menu_hot";
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.send({ message: "ok", code: 200, result: results })
  })
});
//注册接口
// server.post('/register',(req,res)=>{
//   console.log(md5('123456'))
//   // 获取用户名和密码
//   let username=req.body.username;
//   let password=req.body.password;
//   let sql='select count(id) as count from xzqa_author where username=?'
//   pool.query(sql,[username],(error,results)=>{
//     if(error) throw error;
//     let count=results[0].count;
//     if(count==0){
//       sql='insert xzqa_author(username,password) value(?,MD5(?))';
//       pool.query(sql,[username,password],(error,results)=>{
//         if(error) throw error;
//         res.send({message:'ok',code:200});
//       })
//     }else{
//       res.send({message:'user exists',code:201});
//     }
//   })
// })
// 登录接口
// server.post('/login',(req,res)=>{
//   let username=req.body.username;
//   let password=req.body.password;
//   let sql='select id,username,nickname,avatar from xzqa_author where username=? and password=MD5(?)'
//   pool.query(sql,[username,password],(error,results)=>{
//     if(error) throw error;
//     if(results.length==0){
//       res.send({message:'login failed',code:201})
//     }else{
//       res.send({message:'ok',code:200,result:results[0]})
//     }
//   })
// })
// 端口号
server.listen(3000, () => {
  console.log('server is running...');
});