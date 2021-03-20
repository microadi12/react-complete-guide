import React from "react";
import './Person.css'

// function person() {
//     return <p>I'm a Person</p>
// } ES 5 Syntax function

const person = (props) => {
  return (
    <div className="person">
      {/* <p>I'm a Person</p> */}
      <p onClick={props.click}>
        My name is {props.name} & i am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange = {props.changed} value={props.name}></input>
    </div>
  );
};
// Arrow function. we create a person component on functional component which returning a html

export default person;
