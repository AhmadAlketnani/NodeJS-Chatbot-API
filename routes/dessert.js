const {Router}=require('express')
const {dessertcontroller}=require("../controllers")
const router=Router();
router.get('/',dessertcontroller.getDessert);
router.get('/:name',dessertcontroller.getDessertByName);
module.exports=router;