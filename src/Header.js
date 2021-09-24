import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (<div className="App-header">
    <NavLink src="../assets/logo192.png" to="/">home</NavLink>
    </div>)

}

export default Header;