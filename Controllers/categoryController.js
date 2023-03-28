const AsyncError = require("../Middelwares/AsyncError")
const ErrorHandler = require("../Utils/ErrorHandler")
const Category = require("../Model/categoryModel")
exports.addcategory = AsyncError(async (req, res, next) => {

    const { category } = req.body;

    const c = new Category({
        category
    })
    const savedCategory = await c.save();

    res.status(201).json({
        success: true,
        category: savedCategory
    })




})


exports.allcategory = AsyncError(async (req, res, next) => {



    const categories = await Category.find({});


    res.status(201).json({
        success: true,
        categories: categories
    })




})


exports.deletingCategory = AsyncError(async (req, res, next) => {
    const { id } = req.params;

    const allCategoty = await Category.findOneAndDelete({ _id: id });



    res.status(200).json({
        success: true,

    })
})