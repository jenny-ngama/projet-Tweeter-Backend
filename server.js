const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT_NUMBER || 3001


const tweetRoutes = require('./routes/tweetRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(cors());
app.use(express.json());
app.use(tweetRoutes)
app.use(userRoutes)
 


app.listen(PORT, () => console.log('server de jenny a demaré'))