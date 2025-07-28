import bcrypt from "bcryptjs";
import UserModel from "../models/User.js";

export const signup = async (req, rest) => {
    try {

        const { email, password } = req.body;
        const user = await UserModel.find({ email });
        user.password = await bcrypt.hash(password, 10);
        console.log(user.password)
        if (user.email) {
            return rest.status(409).json({ message: 'Esse usuário já existe na base de dados', success: false })
        }
        const dados = new UserModel({
            email: email,
            password: user.password
        });
        dados.save().then(() => console.log('salvo'));
        console.log('debug:' + dados);
        rest.status(201).json({
            message: "signup sucessfully",
            success: true
        })
    } catch (error) {
        rest.status(500).json({
            message: "não cadastrado",
            success: false
        })
    }
}

export const login = async (req, rest) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.find({ email });
        const match = await bcrypt.compare(password, user.password);
        console.log(match);
        // if (user.email &&  password) {
        //     console.log('debug:' + dados);
        //     rest.status(201).json({
        //         message: "login sucessfully",
        //         success: true
        //     })
        // };
    } catch (error) {
        rest.status(500).json({
            message: "não cadastrado",
            success: false
        })
    }
}

export default {
    signup,
    login
}
