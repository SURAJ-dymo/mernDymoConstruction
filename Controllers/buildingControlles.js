const AsyncError = require("../Middelwares/AsyncError")
const ErrorHandler = require("../Utils/ErrorHandler")
const Bulding = require("../Model/buildingModel");
const Building = require("../Model/buildingModel");


exports.addBuilding = AsyncError(async (req, res, next) => {


    const {name,desc,link,category}=req.body;

    const startIndex=link.lastIndexOf("/");
   
    const len=link.length;
   
    const myLink=link.slice(startIndex+1,len);
   

    const savedBuilding = await Building.create({
        name:name,
        desc:desc,
        link:myLink,
        category:category
    });



    res.status(200).json({
        success: true,
        building: savedBuilding
    })



})


exports.allBuldings = AsyncError(async (req, res, next) => {

    const allBuildings = await Building.find({});



    res.status(200).json({
        success: true,
        buildings: allBuildings
    })



})

exports.deletingBulding = AsyncError(async (req, res, next) => {
    const { id } = req.params;

    const allBuildings = await Building.findOneAndDelete({ _id: id });



    res.status(200).json({
        success: true,

    })



})
exports.gettingBuilding = AsyncError(async (req, res, next) => {
    const { id } = req.params;
    

    const getingBuilding = await Building.findOne({ _id: id });



    res.status(200).json({
        success: true,
        building:getingBuilding

    })



})

exports.updatingBuilding = AsyncError(async (req, res, next) => {
    
    const {name,desc,link,category}=req.body;

    const startIndex=link.lastIndexOf("/");
   
    const len=link.length;
   
    const myLink=link.slice(startIndex+1,len);
   
    
    const updatedBuilding = await Building.findByIdAndUpdate(req.params.id,{
        name:name,
        desc:desc,
        link:myLink,
        category:category
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });


    res.status(200).json({
        success: true,
        building:updatedBuilding

    })



})