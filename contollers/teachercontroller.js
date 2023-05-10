const teacher_Router=require('express').Router();
const studentmodel=require('../modules/student.module')
student_Router.get("/",function(req,res,next){
    const newstudent=new studentmodel();
    return res.status(200).json({
        message:"teacher router working"
    })
})

module.exports=teacher_Router;