const { dbConnection } = require('../configurations');
class Dessert {
    constructor() {

    }

    getDessert() {
        return new Promise((resolve, reject) => {
            try {
                dbConnection('dessert', async (db) => {

                    const dessert = await db.find().toArray();
                    resolve(dessert)
                })
            } catch (error) {
                reject(error)
            }
        })

    }
    getDessertByName(name) {
        return new Promise((resolve, reject) => {
            try {
                dbConnection('dessert', async (db) => {

                    const dessert = await db.find({name:name}).toArray();
                    resolve(dessert)
                })
            } catch (error) {
                reject(error)
            }
        })

    }
}

module.exports = Dessert