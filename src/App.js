import React, { useState,Fragment } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
// import Card from './Components/UI/Card';

function App() {
  const [data, setData]=useState([{name:"harry",age:23,college:'prmceam'}]);

  const addUserHandler = (userData) => {
    setData(prevData => {
      return [userData,...prevData]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={data} />
    </Fragment>
  );
}

export default App;
