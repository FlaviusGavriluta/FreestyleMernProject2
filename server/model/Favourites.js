const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const favouritesSchema = new Schema({
  imdbID: String,
  your_rating: String,
});

const Favourites = model("Favourites", favouritesSchema);

module.exports = Favourites;