import React, { useState } from "react";
import Classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  // console.log(props)
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (event) => {
      event.preventDefault();
      
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
      }
      
      //this if check is age is in negative or not and plus sign convert enterAge into number from string
      if (+enteredAge < 1){
          return;
        }
      
    const obj = {
      name: enteredName,
      age : enteredAge
    }
    props.Data(obj);
    
    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card className={Classes.input}>
      <form onSubmit={addUserHandler}>
        <label id="username" htmlFor="username">
          UserName
        </label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <label id="age" htmlFor="age">
          Age (Years)
        </label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
