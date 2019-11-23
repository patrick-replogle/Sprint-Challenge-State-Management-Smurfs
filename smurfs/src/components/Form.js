import React, { useContext, useState } from "react";

import { smurfContext } from "../contexts/smurfContext";

const Form = () => {
  const { smurfList, addSmurf } = useContext(smurfContext);
  const [formData, setFormData] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSmurf({ ...formData, id: smurfList.length });
  };

  return (
    <>
      <h2>Add a Smurf to the Village</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="name"
          value={formData.name}
        />
        <input
          onChange={handleChange}
          name="age"
          type="number"
          placeholder="age"
          value={formData.age}
        />
        <input
          onChange={handleChange}
          name="height"
          type="number"
          placeholder="height"
          value={formData.height}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
