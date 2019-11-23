import React, { useContext, useState } from "react";

import { smurfContext } from "../contexts/smurfContext";

const Smurf = props => {
  const { isEditing, setIsEditing, editSmurf, deleteSmurf } = useContext(
    smurfContext
  );

  const [editFormData, setEditFormData] = useState({
    name: props.smurf.name,
    age: props.smurf.age,
    height: props.smurf.height
  });

  const handleEditChange = e => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    editSmurf(props.smurf.id, { ...editFormData, id: props.smurf.length });
  };

  return (
    <>
      {isEditing ? (
        <>
          <form className="editForm" onSubmit={handleEditSubmit}>
            <input
              onChange={handleEditChange}
              name="name"
              type="text"
              placeholder={props.smurf.name}
              value={editFormData.name}
            />
            <input
              onChange={handleEditChange}
              name="age"
              type="number"
              placeholder={props.smurf.age}
              value={editFormData.age}
            />
            <input
              onChange={handleEditChange}
              name="height"
              type="number"
              placeholder={props.smurf.height}
              value={editFormData.height}
            />
            <button>Submit</button>
          </form>
        </>
      ) : (
        <div className="smurfContainer">
          <p>Name: {props.smurf.name}</p>
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.height}</p>
          <button onClick={() => deleteSmurf(props.smurf.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  );
};

export default Smurf;
