const express =require('express')
const createError = require('http-errors')
const middlewares=require('./middlewares');
const routes=require('./routes');
const app =express();
app.use(express.json());
middlewares(app);
routes(app);  

app.use((req, res, next) => {
    next(createError(404));
})

app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.statusCode).json({
        status: false,
        message: error.message
    })
})

module.exports=app;
