import React, { useState, useEffect } from "react";
import axios from "axios";

import { smurfContext } from "../contexts/smurfContext";

const SmurfContextProvider = ({ children }) => {
  const [smurfList, setSmurfList] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return <smurfContext.Provider>{children}</smurfContext.Provider>;
};

export default SmurfContextProvider;
