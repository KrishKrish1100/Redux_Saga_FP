const mongoose = require("mongoose");
const GameSlots = require("./models/gameslots");
const Bookings = require("./models/booking");

const BookingOne = {
  bookingId: "47571458",
  name: "anu",
  contact: "1234567890",
  game: "BasketBall",
  slot: {
    id: 1,
    startTime: "09.00 A.M",
    endTime: "10.00 A.M",
    slotStatus: "btn btn-danger",
  },
  slotDate: "6/5/2020",
  id: 1,
};

const CricketGameSlot = {
  id: 2,
  date: "6/5/2020",
  name: "Cricket",
  slots: [
    {
      id: 1,
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 2,
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 3,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 4,
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 5,
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 6,
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 7,
      startTime: "05:00 PM",
      endTime: "06:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 8,
      startTime: "06:00 PM",
      endTime: "07:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 9,
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      slotStatus: "btn btn-success",
    },
  ],
};

const VBGameSlot = {
  id: 1,
  date: "6/5/2020",
  name: "VolleyBall",
  slots: [
    {
      id: 1,
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 2,
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 3,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 4,
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 5,
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 6,
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 7,
      startTime: "05:00 PM",
      endTime: "06:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 8,
      startTime: "06:00 PM",
      endTime: "07:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 9,
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      slotStatus: "btn btn-success",
    },
  ],
};

const FBGameSlot = {
  id: 3,
  date: "6/5/2020",
  name: "FootBall",
  slots: [
    {
      id: 1,
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 2,
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 3,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 4,
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 5,
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 6,
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 7,
      startTime: "05:00 PM",
      endTime: "06:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 8,
      startTime: "06:00 PM",
      endTime: "07:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 9,
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      slotStatus: "btn btn-success",
    },
  ],
};

const BBGameSlot = {
  id: 0,
  date: "6/5/2020",
  name: "BasketBall",
  slots: [
    {
      id: 1,
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 2,
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      slotStatus: "btn btn-success",
    },
    {
      id: 3,
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 4,
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 5,
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 6,
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 7,
      startTime: "05:00 PM",
      endTime: "06:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 8,
      startTime: "06:00 PM",
      endTime: "07:00 PM",
      slotStatus: "btn btn-success",
    },
    {
      id: 9,
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      slotStatus: "btn btn-success",
    },
  ],
};

const setUpDataBase = async () => {
  await GameSlots.deleteMany();
  await new GameSlots(VBGameSlot).save();
  await new GameSlots(CricketGameSlot).save();
  await new GameSlots(FBGameSlot).save();
  await new GameSlots(BBGameSlot).save();
};

module.exports = {
  VBGameSlot,
  FBGameSlot,
  BBGameSlot,
  CricketGameSlot,
  setUpDataBase,
};
