const foodRouter = require('./food')
const dessertRouter = require('./dessert')
module.exports = (app) => {
   
    app.get('/', (req, res, next) => {
        res.json({
            message: 'welcome to out restaurant '
        })
    })  
    app.use('/food',foodRouter)
    app.use('/dessert',dessertRouter)

}