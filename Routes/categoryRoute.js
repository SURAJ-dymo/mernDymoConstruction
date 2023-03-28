const express=require("express");
const { addcategory,allcategory,deletingCategory } = require("../Controllers/categoryController");

const router=express.Router();
router.route('/add_category').post(addcategory);
router.route('/all_category').get(allcategory);
router.route('/delete_category/:id').delete(deletingCategory);

module.exports=router;