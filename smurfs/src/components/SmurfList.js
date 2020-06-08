import React, { useContext } from "react";

import Smurf from "./Smurf";
import { smurfContext } from "../contexts/smurfContext";

const SmurfList = () => {
  const { smurfList, isLoading } = useContext(smurfContext);
  return (
    <>
      {isLoading ? (
        <h2>Smurfs Loading...</h2>
      ) : (
        <div className="smurfListContainer">
          {smurfList.length < 1 && <h2>Add Some Smurfs</h2>}
          {smurfList.map(smurf => (
            <Smurf smurf={smurf} key={smurf.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default SmurfList;
