const express=require('express');
const categoryRouter=require('./Routes/categoryRoute');
const buldingRouter=require('./Routes/buildingRoutes');
const cors=require("cors");
const body_parser=require("body-parser");
const cookie_parser=require("cookie-parser");
const err=require("./Middelwares/error")
const Connection=require("./Connection/Db");


Connection();
const app=express();


app.use(express.json());
app.use(cors())
app.use(body_parser.urlencoded({extended:true}));
app.use(cookie_parser());




app.use("/api/v1",categoryRouter);
app.use("/api/v1",buldingRouter);


app.use(err);
module.exports=app;