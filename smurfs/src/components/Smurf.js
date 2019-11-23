import React from "react";

const Smurf = props => {
  return (
    <div className="smurfContainer">
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      {/* <button onClick={() => deleteSmurf(props.smurf.id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button> */}
    </div>
  );
};

export default Smurf;
