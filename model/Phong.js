const mongoose = require("mongoose");

const phongSchema = new mongoose.Schema({
  maphong: { type: String, required: true },
  sogiuong: Number,
  dsnhanvien: [{ type: mongoose.Schema.Types.ObjectId, ref: "Nhanvien" }]
});

module.exports = Phong = mongoose.model("Phong", phongSchema);
