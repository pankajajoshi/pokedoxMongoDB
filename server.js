require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

// Set up Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Set up Express middlewares
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Import the Pokemon model
const Pokemon = require("./models/Pokedex");

app.get("/", (req, res) => {
  res.send(
    "<style>body { display: flex; justify-content: center; align-items: center; height: 100vh; background-color: lightyellow; font-size: 40px; }</style><div><h1>Welcome to the Pokemon App!</h1></div>"
  );
});

app.get("/pokemon", async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.render("Index", {
      pokemon: pokemon,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//new
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", async (req, res) => {
  const { name, image } = req.body;

  try {
    const newPokemon = new Pokemon({ name, image });
    await newPokemon.save();
    res.redirect("/pokemon");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/pokemon/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const selectedPokemon = await Pokemon.findById(id);
    res.render("Show", { pokemon: selectedPokemon });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
