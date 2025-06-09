const mongoose = require("mongoose");
const { setUpDataBase } = require("./defaultDB");

mongoose.connect("mongodb://127.0.0.1:27017/slot-booking", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", async () => {
  await setUpDataBase();
  console.log("Mongoose is connected to the database");
});
