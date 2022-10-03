import React from "react";

export default function AddArrangement() {
  
  
    return (
    <div>
      <h1>Legg til et arrangement</h1>
      <form>
        <label for="name">Arrangørens navn:</label>
        <br></br>
        <input type="text" id="name" name="name"></input> <br></br>
        <label for="description">Kort beskrivelse av arrangementet:</label>
        <br></br>
        <input type="text" id="description" name="description"></input>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
