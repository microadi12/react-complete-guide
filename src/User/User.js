import React from 'react';
import '../User/User.css'

const user = (props) => {
    return <p className="user">Hello {props.name}, You are {props.status}</p>

}

export default user        