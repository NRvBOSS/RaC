require('dotenv').config();

const express = require ('express');
const cors = require('cors')
const carsRouters = require ('./routes/carsRoutes')
const userRouters = require('./routes/userRoutes')
const mongoose = require('mongoose')

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, res.method);
    next();    
})

// routes
app.use('/api/cars', carsRouters);
app.use('/api/user', userRouters);

// connecting to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connecting to Db and listening on port', process.env.PORT);
    })
})
.catch( err => console.log(err))