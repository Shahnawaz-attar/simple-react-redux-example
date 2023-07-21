import React from 'react';
import Parent from './components/Parent';
import ClassBase from './components/ClassBase';
import ParentComp from './components/forwordRed/ParentComp';
import Form from './components/Form';
import MyComponentWithExtraProp from './components/HOC';
import API from './components/API';
import Reducer from './components/Reducer';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      {/* <Parent />
      <ClassBase name="Shahanwaz" /> */}
      {/* <ParentComp /> */}
      {/* <Form /> */}
      {/* <MyComponentWithExtraProp /> */}
      {/* <API /> */}
      {/* <Reducer /> */}
      <Counter />
    </div>
  );
};

export default App;
