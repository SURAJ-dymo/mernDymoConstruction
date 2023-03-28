const mongoose=require("mongoose");
const categorySchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    }
})

const Category=new mongoose.model("category",categorySchema);


module.exports=Category;