const { dbConnection } = require('../configurations');
class Food {
    constructor() {

    }

    getFood() {
        return new Promise((resolve, reject) => {
            try {
                dbConnection('food', async (db) => {

                    const food = await db.find().toArray();
                    resolve(food)
                })
            } catch (error) {
                reject(error)
            }
        })

    }
    getFoodByName(name) {
        return new Promise((resolve, reject) => {
            try {
                dbConnection('food', async (db) => {
                    name= name.toLowerCase()

                    const food = await db.findOne({name:name});
                    resolve(food)
                })
            } catch (error) {
                reject(error)
            }
        })

    }
}
    

module.exports = Food