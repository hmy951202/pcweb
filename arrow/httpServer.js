/**
 * Created by hxsd on 2016/11/9.
 *
 * 使用视图引擎的步骤：
 * 1) 安装ejs模板引擎这个模块: npm install ejs
 * 2) 在项目的根目录下，创建一个文件夹，叫views，用来存放所有的视图模板文件
 * 3) 在views/下，创建一个叫success.ejs的模板文件:
 *    <p class="well lead text-info">登录成功，欢迎您,<%= username %>!</p>
 * 4) 在服务器端程序中，声明启用ejs引擎：
 *    // 设置模板引擎: 1)告诉express，我们的模板文件放在哪里;
     app.set("views", path.resolve(__dirname, "views"));
     //               2)告诉express，使用哪一种视图引擎来解析视图模板
     app.set("view engine","ejs");
 * 5) 在下面的路由方法中:
 *    app.post("/login",urlEncodedParser,function(req,res){
 *           .......
 *           // render()方法：找到指定的视图模板文件，解析填充数据，然后发送回客户端浏览器
            // 其中第一个参数，是要加载的模板文件名称，这里是success.ejs的名称
            //     第二个参数，是要填充到模板文件中的变量值/数据值
            res.render("success",{username:username});
 *    }
 */
// 引入相关的模块
var http = require("http");
var path = require("path");
var express = require("express");
var fs = require("fs"); // 文件系统



var formidable = require("formidable"); // 引入formidable模块
//var ejs = require("ejs");

var app = express();

// 设置模板引擎: 1)告诉express，我们的模板文件放在哪里;
app.set("views", path.resolve(__dirname, "views"));
//               2)告诉express，使用哪一种视图引擎来解析视图模板
app.set("view engine","ejs");

// 处理对静态资源的请求
var staticPath = path.resolve(__dirname, "public");  // 解决文件路径跨平台
app.use(express.static(staticPath));
// 创建服务器
http.createServer(app).listen(3000, function () {
    console.log("服务器正监听在3000端口...");
});