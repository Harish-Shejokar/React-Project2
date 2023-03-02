import './App.css';
import Form from './Components/NewItems/Form';
import Items from './Components/Items';
import React, { useState } from 'react';
import Card  from './Components/Card';

function App() {

  
  const dummy_details = [{name:'harry',age:24}]
  

const [allItems, setItems] = useState(dummy_details);

  
  const saveData = (enteredData) =>{
    setItems((prevItem) => {
      const arr = [enteredData,
        ...prevItem];
      return arr;
    })
    // console.log(enteredData)
  }
  


  return (
    <div>
      <Card>
        <Form onSaveDataHandler={saveData} />
      </Card>
      <Items items={allItems} />
    </div>
  );
}

export default App;
