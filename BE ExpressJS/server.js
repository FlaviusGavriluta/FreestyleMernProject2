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
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH")
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

app.post('/favorites', (req, res) => {
  const imdbID = req.body.imdbID;
  const your_rating = 0;
  const movie = new Favourites({
  imdbID,
  your_rating
  });
  movie.save()
  .then(movie => res.json(movie))
  .catch(err => res.status(400).json({ success: false }));
});

app.delete('/favorites', async (req, res) => {
  try {
    const movie = await Favourites.findOneAndDelete({ imdbID: req.body.imdbID });
    res.send(movie)
  } catch (error) {
    console.error(error);
  }
});


//Start BE ExpressJS
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
