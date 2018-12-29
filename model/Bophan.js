const mongoose = require("mongoose");

const bophanSchema = new mongoose.Schema({
  mabophan: { type: String, required: true },
  tenbophan: String,
  dsnhanvien: [{ type: mongoose.Schema.Types.ObjectId, ref: "Nhanvien" }]
});

module.exports = Bophan = mongoose.model("Bophan", bophanSchema);
