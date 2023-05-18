const {Food} = require('../modle');


const getFood=(req,res,next)=>{
    const food = new Food()
    food.getFood().then(foods =>{
        res.json({
            headerMessage: "this is our menu",
            data: foods,
            footerMessage:"input food name and quantity\n Note : input one item in message \n example name,quantity ,if you end enter order to calculate "
    })
    }
    ).catch(err =>{
        res.json(err)
    })
}
const getFoodByName = (req, res, next) => {
    const food = new Food()
    food.getFoodByName(req.params.name).then(food =>{
        res.json(food)
    }

    ).catch(err => {
        res.json(err)
    }
    )
}
module.exports={
getFood,getFoodByName
}