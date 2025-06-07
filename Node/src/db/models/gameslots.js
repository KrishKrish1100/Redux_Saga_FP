const mongoose = require("mongoose");

const gameSlotsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slots: [
    {
      id: {
        type: Number,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
      slotStatus: {
        type: String,
        required: true,
      },
    },
  ],
});

const GameSlots = new mongoose.model("GameSlots", gameSlotsSchema);

module.exports = GameSlots;
