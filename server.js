const app=require("./app");
const mongoose=require("mongoose");
const PORT=process.env.PORT || 6010
const server=app.listen(PORT,()=>{
    console.log("server is runng on port no 8000")
})


