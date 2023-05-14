const { Dessert } = require('../modle')
const { dbConnection } = require('../configurations');



const getDessert = (req, res, next) => {
    const dessert = new Dessert()
    dessert.getDessert().then(desserts =>{
        res.json(desserts)
    }

    ).catch(err => {
        res.json(err)
    }
    )
}
const getDessertByName = (req, res, next) => {
    const dessert = new Dessert()
    dessert.getDessertByName(req.params.name).then(desserts =>{
        res.json(desserts)
    }

    ).catch(err => {
        res.json(err)
    }
    )
}
module.exports = {
    getDessert,getDessertByName
}