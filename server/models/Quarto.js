import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema(
    {
        quartoId: String,
        identificador: Number,
        ocupante_Id: String,
        alojamento: String,
        status: String,
        dataEntrada: String,
        dataSaida: String
    },
    { timestamps: true }
);

const Quarto = mongoose.model("Quarto", QuartoSchema);
export default Quarto;