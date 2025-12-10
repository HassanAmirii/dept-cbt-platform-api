require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = require("./middleware/app");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("succesfully connected to DB");

    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("database connection error", err);
  });
