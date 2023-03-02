import React, { useState } from "react";
import "./Form.css";
import Card1 from './Card1'

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const userNameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const [card, setCard] = useState("");
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("working");

   
    if (name === '' || age === '') {
      setCard(<Card1/>);
    }
    else {

      const enteredData = {
        name, age
      }
      props.onSaveDataHandler(enteredData);
      setName('')
      setAge('')
    }

  };

  return (
    <div>
      {card}
      <div className="form-controls">
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label>UserName</label>
            <input value={name} type="text" onChange={userNameHandler} />
          </div>
          <div className="form-control">
            <label>Age(Year)</label>
            <input
              value={age}
              type="number"
              onChange={ageHandler}
              min="18"
              max="60"
              step="1"
            />
          </div>

          <div>
            <button type="submit">Add Details</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
