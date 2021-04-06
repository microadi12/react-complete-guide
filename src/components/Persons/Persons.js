import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( (person, index) => {
    return (
      // <ErrorBoundary  key={person.id}>   ErrorBoundary custom error message to control prod mode
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={( event ) => props.changed(event, person.id)}
      >
        She is my sister
      </Person>
      // </ErrorBoundary> 
      // ErrorBoundary is a Higher order function which wraps the person component
    );
  })


  export default persons;