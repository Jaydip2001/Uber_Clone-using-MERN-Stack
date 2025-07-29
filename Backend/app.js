const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');


app.use(cors());
connectToDb();
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("hello world1");
});

app.use('/users', userRoutes);


module.exports = app;
