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

    return (
      <div style={myStyle}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    );
  }
}

export default Show;
