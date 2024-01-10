const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const registerUsersData = []
app.post("/register", async (request, response) => {
    const { name, email, password, mobile } = request.body;
    try {
        if (name && email && password && mobile) {
            if(registerUsersData.filter((user) => user.email.includes(email)).length === 0){
                registerUsersData.push(request.body)
            } else {
                throw new Error("User already exist, Please login")
            }
            return response.status(200).json(request.body);
        }
        throw new Error("Please fill all fields");
    } catch(error) {
        console.error('21==', error.message);
        return response.status(400).json({error: error.message});
    }
});

app.post("/login", async (request, response) => {
    const {email, password} = request.body;
    try {
        if (email && password) {
            if(registerUsersData.filter((user) => user.email.includes(email)).length){
                return response.status(200).json(registerUsersData.find((val) => val.email === email));
            } else {
                throw new Error("New user, Create an Account")
            }
        }
        throw new Error("Please fill all fields");
    } catch(error) {
        console.error('40==', error.message);
        return response.status(400).json({error: error.message});
    }
});

app.get("/users", async (req,res) => {
    try {
        return res.status(200).json(registerUsersData)
    } catch(error) {
        return res.status(400).json({error: "Failed to fetch users data"})
    }
})
app.listen(3214, () => {
    console.log("29== Server is running on port 3214", registerUsersData);
});
