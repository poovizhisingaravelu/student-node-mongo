const mongoose=require("mongoose");
const studentschema=mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    studentEmail:{
        type:String,
        required:true
    },
    studentContact:{
        type:Number,
        required:true
    },
    courseId:{
        type:String,//mongoose.Types.ObjectId,
        required:true
    },
    primary_language:{
        type:String,
        required:true
    },
    mentorId:{
        type:mongoose.Types.ObjectId,
        required:false,
        default:null
    },
});