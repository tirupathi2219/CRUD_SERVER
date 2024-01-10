const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", (request, response) => {
    console.log("Request body:", request.body);
    const { name, email, password, mobile } = request.body;
    try {
        if (name && email && password && mobile) {
            return response.status(200).json(request.body);
        }
        throw new Error("Please send valid info");
    } catch(error) {
        console.error('18== Error:', error.message);
        return response.status(400).json({ error: error.message });
    }
});

app.get("/getApi", (req, res) => {
    console.log("24== Request:", req);
    return res.json("Hello");
});

app.listen(3214, () => {
    console.log("29== Server is running on port 3214");
});
