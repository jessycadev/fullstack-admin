import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema(
    {
        idQuarto: Number,
        alojamento: String,
        status: String,
        id_usuario: String,
    },
    { timestamps: true }
);

const Quarto = mongoose.model("Quarto", QuartoSchema);
export default Quarto;