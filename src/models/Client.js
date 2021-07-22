const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    alias: String,
    email: {
      type: String,
      required: true,
    },
    tel: String,
    cuil: String,
    fiscal: String,
    localidad: String,
    address: String,
    dni: String,
    debe: {
      type: Number,
      default: 0,
    },
    haber: {
      type: Number,
      default: 0,
    },
    cantidadVentas: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("client", clientSchema);
