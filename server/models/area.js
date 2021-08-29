const mongoose = require("mongoose");

const area = mongoose.Schema({
  areaId: String,
  name: String,
  description: String,
  maxCapacity: Number,
});

const AreaModel = mongoose.model("AreaModel", area);
module.exports = AreaModel;
