const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    validate(value) {
      if (!value.match(/[A-Za-z ]+/)) {
        throw new Error("only alphabets and spaces are allowed in name");
      }
    },
  },
  contact: {
    type: String,
    required: true,
    validate(value) {
      if (!value.match(/[0-9]{10}/)) {
        throw new Error("Phone number is not valid");
      }
    },
  },
  game: {
    type: String,
    required: true,
  },
  slot: {
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
  slotDate: {
    type: String,
    required: true,
  },
});

const Bookings = mongoose.model("Bookings", bookingsSchema);

module.exports = Bookings;
