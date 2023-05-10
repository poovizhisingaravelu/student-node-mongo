const express=require('express');
const student_Router = require('./contollers/studentcontroller');
const App_Server=express();
//const Approuter=express.Router();
//Approuter.get("/",(req,res,next)=>{
//   return res.status(200).json({
//        message:"server start"
//    });
//})
App_Server.use('/student',student_Router)

module.exports=App_Server;