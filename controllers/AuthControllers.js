const { UserModel } = require("../models/AuthModel");


const userLogin = async (request, response) => {
    try {
        const { email, password } = request.body;
        // handle the error first
        if (!email || !password) {
            throw new Error("Please fill all fields");
        }
        const result = await UserModel.findOne({email: email})
        if (!result) {
            throw new Error('User not found')
        }
        if (result.password !== password) {
            throw new Error('Password not matching')
        }
        response.send(result)
    } catch (error) {
        console.error('40==', error.message);
        return response.status(400).json({ error: error.message });
    }
}

const createUser = async (request, response) => {
    try {
        const { name, email, password, mobile } = request.body;
        const user = await UserModel.create({ name, email, password, mobile } )
        response.send(user)
    } catch(error) {
        console.error('21==', error.message);
        if (error.message.includes("email_1 dup ")) {
            return response.status(400).json({error: "Enter new mail..."});
        }
        return response.status(400).json({error: error.message});
    }
}

const getAllUsers = async (req,res)=> {
    try {
        const users = await UserModel.find()
       res.send(users) 
    } catch (e) {
        res.status(403).json({error: e.message})
    }
}

const updateUser =async (req,res) => {
    try {
        const {id, data} = req.body
        console.log({id, data})
        const updateData = await UserModel.findOneAndUpdate({_id: id}, data, {new : true})
        res.send(updateData)
    } catch (e) {
        res.status(403).json({error: e.message})
    }
}

const deleteUser =async (req,res) => {
    try {
       const {id} = req.body
       const deletedUser = await UserModel.findOneAndDelete({_id: id})
       console.log(deletedUser)
       res.send(deletedUser)
    }
    catch (e) {
        res.status(403).json({error: e.message})
    }
}


module.exports = {
    userLogin,
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}