const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Pokemon = mongoose.model("Pokedex", pokemonSchema);

module.exports = Pokemon;
