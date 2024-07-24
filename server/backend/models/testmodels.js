const mongoose = require("mongoose");

const TestSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, " Enter some Text "],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('goal', TestSchema);
