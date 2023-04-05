const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Favourites = require("./model/favourites.js");

const app = express();
const PORT = 3001;

//Middleware
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Connect to MongoDB
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MERN_project");
    console.log("Successfully connected to MongoDB database!");
  } catch (err) {
    console.error("Error connecting to MongoDB database:", err);
  }
})();

app.get("/favorites", async (req, res) => {
  try {
    const favorites = await Favourites.find({});
    res.send(JSON.stringify(favorites))
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
