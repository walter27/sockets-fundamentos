"use strict";var express=require("express"),socketIO=require("socket.io"),path=require("path"),http=require("http"),app=express(),server=http.createServer(app),publicPath=path.resolve(__dirname,"../public"),port=process.env.PORT||3e3;app.use(express.static(publicPath)),module.exports.io=socketIO(server),require("./sockets/socket"),server.listen(port,function(e){if(e)throw new Error(e);console.log("Servidor corriendo en puerto ".concat(port))});