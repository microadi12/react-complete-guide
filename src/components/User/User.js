import React from 'react';
import classes from '../User/User.css'

const user = (props) => {
    return <p className={classes.user}>Hello {props.name}, You are not {props.status}</p>

}

export default user        