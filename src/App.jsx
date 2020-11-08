import React from 'react';
import AddToDo from './components/AddToDo';
import MyHeader from './components/MyHeader';
import './App.css'

const App = () => {
  return (
    <div className="mainContainer">
      <MyHeader />
      <AddToDo />
    </div>
  );
}

export default App;