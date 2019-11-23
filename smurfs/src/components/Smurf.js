import React, { useContext, useState } from "react";

import { smurfContext } from "../contexts/smurfContext";

const Smurf = props => {
  const { isEditing, setIsEditing, editSmurf, deleteSmurf } = useContext(
    smurfContext
  );
  return (
    <div className="smurfContainer">
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button onClick={() => deleteSmurf(props.smurf.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
};

export default Smurf;
