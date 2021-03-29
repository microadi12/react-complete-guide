import React from "react";
import classes from "./Person.css";
// import Radium from 'radium';
// import './Person.css'

// import styled from 'styled-components';

// const StyledDiv = styled.div`

//  width: 60%;
//  margin: 16px auto;
//  border: 1px solid #ccc;
//  box-shadow: 0 2px 3px #ccc;
//  padding: 16px;
//  text-align: center;

//  @media (max-width:500px) {
// width : 450px;
// }
// `;

// function person() {
//     return <p>I'm a Person</p>
// } ES 5 Syntax function

const person = (props) => {
  //  const style = {
  //    '@media (max-width:500px) ' : {
  //       width : '450px'
  //    }
  //  }

  return (
    // <div className="person" style={style}>

    /* <p>I'm a Person</p> */
    // <StyledDiv>
    <div className={classes.person}>
      <p onClick={props.click}>
        My name is {props.name} & i am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>

    // </StyledDiv>
  );
};
// Arrow function. we create a person component on functional component which returning a html

// export default Radium(person);
export default person;
// Radium is a component which wrap the person component is just like a injecting some thing.
