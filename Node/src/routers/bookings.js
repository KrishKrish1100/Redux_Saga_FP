const express = require("express");
const Bookings = require("../db/models/booking");
const GameSlots = require("../db/models/gameslots");
const { setUpDataBase } = require("../db/defaultDB");

const bookingsRouter = new express.Router();

//updating date
bookingsRouter.post("/dateUpdate", async (req, res) => {
  const date = req.body.todayDate;
  try {
    const gameslot = await GameSlots.findOne({ date });
    if (!gameslot) {
      await setUpDataBase();
    }
    const Cricgameslots = await GameSlots.findOne({ name: "Cricket" });
    Cricgameslots.date = date;
    await Cricgameslots.save();
    const VBgameslots = await GameSlots.findOne({ name: "VolleyBall" });
    VBgameslots.date = date;
    await VBgameslots.save();
    const FBgameslots = await GameSlots.findOne({ name: "FootBall" });
    FBgameslots.date = date;
    await FBgameslots.save();
    const BBgameslots = await GameSlots.findOne({ name: "BasketBall" });
    BBgameslots.date = date;
    await BBgameslots.save();
    res.send();
  } catch (e) {
    res.status(400).send(e);
  }
});

//booking slots
bookingsRouter.post("/book", async (req, res) => {
  try {
    const gameslot = await GameSlots.findOne({ date: req.body.slotDate });
    if (!gameslot) {
      throw new Error("No game slots available for this date");
    }
    const booking = new Bookings(req.body);
    const id = req.body.slot.id;
    const name = req.body.game;
    const bookinggameslot = await GameSlots.findOne({ name });
    if (bookinggameslot.slots[id - 1].slotStatus === "btn btn-success") {
      const bookedgameslot = await GameSlots.findOne({ name });
      bookedgameslot.slots[id - 1].slotStatus = "btn btn-danger";
      await bookedgameslot.save();
      await booking.save();
      res.status(201).send("Booked Successfully");
    }
    res.send("Slot unavailable");
  } catch (e) {
    res.status(400).send(e?.message || "Error booking slot");
  }
});

//getting booked slots
bookingsRouter.get("/bookedData", async (req, res) => {
  try {
    const bookings = await Bookings.find();
    res.send(bookings);
  } catch (e) {
    res.status(400).send();
  }
});

//getting game and slots
bookingsRouter.get("/gameAndSlot", async (req, res) => {
  try {
    const gameAndSlot = await GameSlots.find();
    res.send(gameAndSlot);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = bookingsRouter;
