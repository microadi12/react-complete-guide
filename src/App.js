import React, { Component } from "react";
import Person from "./Person/Person.js";
// import logo from './logo.svg';
import AppClasses from "./App.css";
// import Radium, { StyleRoot } from 'radium';
import User from "./User/User";
// import styled from "styled-components";  styled-components import

// const StyledButton = styled.button`
//   background: ${props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   padding: 10px;
//   border: 1px solid blue;
//   cursor: pointer;
//   border-radius: 5px;
//   outline: none;
//   &:hover {
//     background: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   } styeled-component css code to add to component
// `;

class App extends Component {
  //  const [ personsState, setPersonsState ] = useState();

  //   const [otherState, setOtherState]  = useState('some other value');
  //   console.log(personsState, otherState);

  state = {
    persons: [
      { id: "h1", name: "Aditya", age: 26 },
      { id: "h2", name: "Sujata", age: 31 },
      { id: "h3", name: "Tripti", age: 29 },
    ],
    showPersons: false,
    user: [{ name: "Aditya", status: "married" }],
  };

  // clickPersonHandler = (dadName) => {
  //   console.log("was clicked");
  //   // this.state.persons[0].name="Pooja"; for change the state property use setState() of react don't do like this.
  //   this.setState(
  //     {
  //       persons: [
  //         { name: dadName, age: 23 },
  //         { name: "Sujata", age: 31 },
  //         { name: "Tripti", age: 28.5 },
  //       ],
  //     }
  //   )
  // }

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    // alternative approach to copy object

    // const person = Object.assign({}, this.state.persons[personIndex]) alternative approach to copy object

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      // persons: [
      //   { name: 'Aditya', age: 23 },
      //   { name: event.target.value, age: 31 },
      //   { name: "Tripti", age: 28.5 },
      // ],
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    console.log("i am clicked");
    this.showDoes = this.state.showPersons;
    console.log(this.showDoes);
    this.setState({ showPersons: !this.showDoes });
  };

  deletePersonHandler = (personIndex) => {
    // we use the spread oprator in reason behind the scene is to make a state immutable that it.
    // Here we are directly excess the persons state but when working with 1st create a copy of it.
    // Then do the opration you want. we can achieve this doing spice() or using a spread operator.

    // const persons = this.state.persons.slice(); 1st approach to create copy of array. 2nd use spread operator.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(persons);
  };

  render() {
    // const style = {
    //   background: 'green',
    //   font: 'inherit',
    //   padding: '10px',
    //   border: '1px solid blue',
    //   cursor: 'pointer',
    //   borderRadius: '5px',
    //   outline: 'none',
    //   ':hover': {
    //     background: 'lightgreen',
    //     color: 'black'
    //   }
    // }  radirm package inline style css

    let person = null;
    let btnClass = [AppClasses.Button]

    if (this.state.showPersons) {
      person = (
        <div>
          {/* {this.state.persons.map((person, index) => {
            return <Person click={this.deletePersonHandler.bind(this, index)} name={person.name} age={person.age}></Person>
          })} */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changedNameHandler(event, person.id)}
              >
                She is my sister
              </Person>
            );
          })}
          {/* Above method is arrow function to delete a particular person*/}
          {/* In the above code is iterate the list of persons object in person class */}
          {/* <Person
            name={this.state.persons[0].name}           
            age={this.state.persons[0].age}
          />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
            click={this.clickPersonHandler.bind(this, "Papa!!!")} changed={this.changedNameHandler}>
            she is my sister
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
      btnClass.push(AppClasses.Red)
       // style.background = "red";
      // Below fuctionality we can achieve using radium added all pesudo class also taking advantage to write media quaries
      // style[":hover"] = {
      //   background: "#ccc",
      //   color: '#333'
      // }
    } else {
      person = (
        <User
          name={this.state.user[0].name}
          status={this.state.user[0].status}
        ></User>
      );
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      console.log("aditya singh");
      classes.push(AppClasses.red);
    }
    if (this.state.persons.length <= 1) {
      console.log("aditya bomb");

      classes.push(AppClasses.bold);
      console.log(classes);
    }

    return (
      // <StyleRoot>
      <div className={AppClasses.App}>
        <h1>Hi, I'm a React Developer.</h1>
        <h2>cool dude</h2>
        <p className={classes.join(" ")}>This is really working</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Toggle Name</button>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toggle Name
        </StyledButton> this stylebutton we getting from styled-component package*/}
        {person}
       
      </div>
      // </StyleRoot>
    );
  }

  // return React.createElement('div', null, 'h1', 'Hi, I\'m a React Developer.')

  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React Developer.'));
}

// export default Radium(App);
export default App;
