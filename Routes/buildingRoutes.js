const express=require("express");
const { addBuilding,allBuldings,deletingBulding,gettingBuilding,updatingBuilding} = require("../Controllers/buildingControlles");

const router=express.Router();
router.route('/add_building').post(addBuilding);
router.route('/all_buildings').get(allBuldings);
router.route('/delete_building/:id').delete(deletingBulding);
router.route('/building/:id').get(gettingBuilding);
router.route('/building/:id').put(updatingBuilding);

module.exports=router;