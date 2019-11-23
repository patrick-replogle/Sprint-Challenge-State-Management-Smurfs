import React, { useState, useEffect } from "react";
import axios from "axios";

import { smurfContext } from "../contexts/smurfContext";

const SmurfContextProvider = ({ children }) => {
  const [smurfList, setSmurfList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //fetch smurfs
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        setSmurfList(res.data);
      })
      .catch(err => console.log("error fetching: ", err));
    setIsLoading(false);
  }, []);

  //post smurf
  const addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => console.log("error posting: ", err));
  };

  //delete smurf

  const deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => console.log("error deleting: ", err));
  };

  //edit smurf

  const editSmurf = (smurfId, smurf) => {
    axios
      .put(`http://localhost:3333/smurfs/${smurfId}`, smurf)
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => console.log("error editing: ", err));
    setIsEditing(false);
  };

  return (
    <smurfContext.Provider
      value={{
        smurfList,
        setSmurfList,
        isLoading,
        isEditing,
        setIsEditing,
        addSmurf,
        deleteSmurf,
        editSmurf
      }}
    >
      {children}
    </smurfContext.Provider>
  );
};

export default SmurfContextProvider;
