const {Router}=require('express')
const {foodcontroller}=require("../controllers")
const router=Router();
router.get('/',foodcontroller.getFood);
router.get('/:name',foodcontroller.getFoodByName);

module.exports=router;