const express = require('express');
const bodyParser = require('body-parser');
const _connect = require('./db/_connect');
const userRoutes = require('./routes/userRouter')

require('dotenv').config();

//Mongodb connection

_connect();

const app = express();



app.use(bodyParser.json());

//Routes

app.use('/account', userRoutes);


app.listen(process.env.PORT, () => console.log(`App listening on ${process.env.PORT}`))