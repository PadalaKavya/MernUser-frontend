import React from 'react'
import { } from 'react-router-dom';

const Navbar = () => {
    return(
    <div>
        <ul>
        <a href="/">Home</a><br></br>
        <a href="/Register">signup </a><br></br>
        <a href="/Login">Login</a><br></br>
        <a href="/Profile">Profile</a></ul>
    </div>
    );
}

export default Navbar