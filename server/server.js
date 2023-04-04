const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

//Middleware
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Connect to MongoDB
(async () => {
    try {
      await mongoose.connect(
        "mongodb://localhost:27017/local/favourites",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      console.log("Successfully connected to MongoDB database!");
    } catch (err) {
      console.error("Error connecting to MongoDB database:", err);
    }
  })();


  
//Start server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });