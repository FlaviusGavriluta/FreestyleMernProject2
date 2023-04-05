const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const favouritesSchema = new Schema({
  imdbID: String,
  your_rating: Number,
});

const Favourites = model("Favourites", favouritesSchema);

const createFavourites = async () => {
  try {
    const favourite = await Favourites.create({
      imdbID: "tt0372784",
      your_rating: 17,
    });
  } catch (error) {
    console.error(error);
  }
};

// createFavourites();

module.exports = Favourites;
