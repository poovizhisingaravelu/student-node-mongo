const student_Router=require('express').Router();

student_Router.get("/",function(req,res,next){
    return res.status(200).json({
        message:"student router working"
    })
})
student_Router.post("/createstudent",function(req,res,next){
    const{
        studentName,
        studentEmail,
        studentContact,
        courseId,
        primary_language,
        mentorId,
    }=req.body;

});

module.exports=student_Router;