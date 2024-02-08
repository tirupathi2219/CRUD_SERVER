const express = require("express");
const cors = require("cors");
require('./DBConnection')

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authRoutes = require('./routes/AuthRoutes')
const registerUsersData = []
let userId = 0;
console.log('70==')
app.use('/auth', authRoutes)
app.listen(3214, () => {
    console.log("29== Server is running on port 3214", registerUsersData);
});
