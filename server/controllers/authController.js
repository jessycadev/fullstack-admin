import bcrypt from "bcryptjs";
import UserModel from "../models/User.js";

export const signup = async (req, rest) => {
    try {

        const { email, password } = req.body;
        const user = await UserModel.find({ email });
        if (user.email) {
            return rest.status(409).json({ message: 'Esse usuário já existe na base de dados', success: false })
        }
        const dados = new UserModel({ 
            email: email, 
            password: bcrypt.hash(password, 10),
            name: "FIXO PRA TESTAR" 
        });
        dados.save().then(() => console.log('salvo'));
        console.log('debug:' + dados);
        // await UserModel.save();
        // rest.status(201).json({
        //     message: "signup sucessfully",
        //     success: true
        // })
    } catch (error) {
        rest.status(500).json({
            message: "não cadastrado",
            success: false
        })
    }
}

export default {
    signup
}
