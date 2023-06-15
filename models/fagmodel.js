const mongoose = require("mongoose");
const faginfoSchema = mongoose.Schema({
  emne: { type: String, required: true },
  semester: { type: String, required: true },
  beskrivelse: {
    type: String,
    required: true,
  },
  karakter: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  emnetype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("faginfo", faginfoSchema);
