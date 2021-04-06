import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import AppClasses from "./App.css";
import User from "../components/User/User";
import Cockpit from "../components/Cockpit/Cockpit";
// import logo from './logo.svg';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
// import styled from "styled-components";  styled-components


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

    let persons = null;
  

    if (this.state.showPersons) {
      persons =  <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed = {this.changedNameHandler}>
       </Persons>
         
    } else {
      persons = <User
          name={this.state.user[0].name}
          status={this.state.user[0].status}
        ></User> 
    }

    return (
      // <StyleRoot>
      <div className={AppClasses.App}>
        <Cockpit showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.togglePersonHandler}> </Cockpit>
        {persons}
      </div>
       /* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toggle Name
        </StyledButton> this stylebutton we getting from styled-component package*/
      // </StyleRoot>
    );
  }
}

export default App;


// return React.createElement('div', null, 'h1', 'Hi, I\'m a React Developer.')
// return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React Developer.'));
// export default Radium(App);