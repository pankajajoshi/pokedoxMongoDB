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

class New extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>Create New Pokémon</h1>
        <form action="/pokemon" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" required />

          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default New;
