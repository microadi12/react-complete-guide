import React from "react";

import AppClasses from './Cockpit.css'

const cockpit = (props) => {
  let classes = [];
  let btnClass = ''
  if(props.showPersons) {
      btnClass = AppClasses.Red;
  }
//   btnClass = AppClasses.Red
  if (props.persons.length <= 2) {
    classes.push(AppClasses.red);
  }
  if (props.persons.length <= 1) {
    classes.push(AppClasses.bold);
  }

  return (
    <div className={AppClasses.Cockpit}>
      <h1>Hi, I'm a React Developer.</h1>
      <h2>cool dude</h2>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Name
      </button>
    </div>
  );
};

export default cockpit;
