const express = require('express');
const db = require('./db');
const app = express();
// const passport = require('./auth');
const cors = require("cors");


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.use(passport.initialize());
// const localAuthMidalwar = passport.authenticate('local', { session: false });

app.get('/', (req, res) => {
    res.send('Hello World')
})

const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true
}));


app.listen(3000)
