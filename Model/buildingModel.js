const mongoose=require("mongoose");
const buldingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const Building=new mongoose.model("building",buldingSchema);


module.exports=Building;