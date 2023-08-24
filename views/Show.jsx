import React from "react";

const myStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  backgroundColor: "lightgrey",
  marginLeft: "10%",
  marginRight: "20%",
  padding: "20px",
  marginTop: "100px",
  fontSize: "24px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
};

class Show extends React.Component {
  render() {
    // Assuming you have a `pokemon` prop containing the Pokemon datafrom your 'database'
    const { pokemon } = this.props;

    // Manipulate the data to add ".jpg" to the end of the image URL
    const updatedPokemon = { ...pokemon, image: `${pokemon.image}.jpg` };

    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={updatedPokemon.image} alt={updatedPokemon.name} />
        <a href={"/pokemon"}>Back</a>
      </div>
    );
  }
}

export default Show;
