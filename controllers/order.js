const {Order}= require('../modle')
const createError = require('http-errors')

const orderRepotr=(req, res,next)=>{
    const foodList = req.body
    // for(let key in foodList){
    const order = new Order(foodList);

    order.calculate().then(result=>{
        res.json({
            message:result.message
        })
    }

    ).catch(err=>{
      return  next(createError(err.statusCode, err.message))
    }
    )
}


module.exports={
    orderRepotr
}