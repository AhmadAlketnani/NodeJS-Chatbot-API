const foodRouter = require('./food')
const {ordercontroller} = require('../controllers')
module.exports = (app) => {
   
    app.get('/', (req, res, next) => {
        res.json({
            message: 'welcome to our restaurant,\n write food to food maun \n write dessert to dessert maun'
        })

    })
    
    app.get('/help', (req, res, next) => {
        res.json({
            message: 'ou'
        })

    })
    app.post('/order',ordercontroller.orderRepotr)
    
    app.use('/food',foodRouter)
    

}



