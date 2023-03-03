import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
// import Card from './Components/UI/Card';

function App() {
  const [data, setData]=useState([{name:"harry",age:23}]);

  const addUserHandler = (userData) => {
    setData(prevData => {
      return [userData,...prevData]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={data} />
    </div>
  );
}

export default App;
