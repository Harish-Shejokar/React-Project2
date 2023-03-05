import React, { useState, useRef } from "react";
import Classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  // console.log(props)
 
 
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const refName= (nameInputRef.current.value)
    const refAge= (ageInputRef.current.value)
    const refCollege= (collegeInputRef.current.value)
    if (refName.trim().length === 0 || refAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name & age (non-Empty values)",
      });

      return;
    }

    //this if check is age is in negative or not and plus sign convert enterAge into number from string
    if (+refAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid age (> 0)",
      });
      return;
    }

    const obj = {
      name: refName,
      age: refAge,
      college : refCollege
    };
    props.onAddUser(obj);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
    console.log(refName, refAge , refCollege);
   
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={Classes.input}>
        <form onSubmit={addUserHandler}>
          <label id="username" htmlFor="username">
            UserName
          </label>
          <input
            type="text"
            ref={nameInputRef}
          />
          <label id="age" htmlFor="age">
            Age (Years)
          </label>
          <input
            type="number"
            ref={ageInputRef}
          />
          <label id="college" htmlFor="college">
            College Name
          </label>
          <input
            type="text"
            ref={collegeInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
