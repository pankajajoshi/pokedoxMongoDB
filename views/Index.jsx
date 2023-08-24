import React from "react";

const myStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "lightblue",
  backgroundColor: "Teal",
  padding: "20px",
  fontSize: "24px",
  marginTop: "100px",
};

class Index extends React.Component {
  render() {
    // Assuming you have a `pokemon` prop containing the Pokemon data from your 'database'
    const { pokemon } = this.props;

    // Render the list of Pokemon names
    const pokemonList = pokemon.map((p) => (
      <li key={p._id}>
        <a href={`/pokemon/${p._id}`}>{p.name}</a>
      </li>
    ));

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>{pokemonList}</ul>
        <a href={"/pokemon/new"}>Back</a>
      </div>
    );
  }
}

export default Index;
