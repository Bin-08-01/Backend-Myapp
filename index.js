const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');

const routerAuth = require('./routes/auth');
const routeLanguage = require('./routes/vocabulary');
const routerUser = require('./routes/user');
dotenv.config();
const app = express();

//Connect Database
mongoose.connect("mongodb+srv://minhtri21:minhtri21@cluster0.atfcmke.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Connect successfully");
})

app.use(cors());
app.use(cookieparser());
app.use(express.json());

//Route
app.get('/home', (req, res) => res.json("Home"));
app.use('/v1/auth', routerAuth);
app.use('/v1/user', routerUser);
app.use('/v2/language', routeLanguage);

app.listen(process.env.PORT, () => console.log('Server is running ...'));
