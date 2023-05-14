const {Food} = require('../modle');
const {dbConnection}=require('../configurations');


const getFood=(req,res,next)=>{
    const food = new Food()
    food.getFood().then(foods =>{
        res.json(foods)
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