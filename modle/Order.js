class Order {
    constructor(foodList) {
        this.foodList = foodList
    }

    calculate() {
        return new Promise((resolve, reject) => {
            try {
                let finalPrice = 0;
                for (const key in this.foodList) {
                    const foods = this.foodList[key];
                    console.log(foods);

                    dbConnection('food', async (db) => {
                        const foodname =foods.name.toLowerCase()
                        const food = await db.findOne({ name: foodname });

                        console.log(food);
                        finalPrice += (Number(foods.quantity) * Number(food.price))
                        console.log(finalPrice);

                    })
                    
                }
                resolve({
                    message: `You will pay ${finalPrice} \n if you can't afford to come wash the dishes 😁`
                })

            } catch (error) {
                reject(error)
            }
        })

    }
}


module.exports = Order