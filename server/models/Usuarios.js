import mongoose from "mongoose";

const UsuariosSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        escala: String,
    },
    { timestamps: true }
);

const Usuarios = mongoose.model("Usuarios", UsuariosSchema);
export default Usuarios;