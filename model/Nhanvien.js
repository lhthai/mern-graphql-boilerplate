const mongoose = require("mongoose");

const nhanvienSchema = new mongoose.Schema({
  msnv: { type: String, required: true },
  hoten: { type: String, required: true },
  ngaysinh: Date,
  gioitinh: Boolean,
  cmnd: String,
  quoctich: String,
  chucvu: String,
  sohochieu: String,
  bophan: { type: mongoose.Schema.Types.ObjectId, ref: "Bophan" },
  phong: { type: mongoose.Schema.Types.ObjectId, ref: "Phong" },
  sovisa: String,
  ngaycapvisa: Date,
  ngayhethanvisa: Date
});

module.exports = Nhanvien = mongoose.model("Nhanvien", nhanvienSchema);
