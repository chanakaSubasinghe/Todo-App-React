import React, {Component} from "react";
import {Link} from "react-router-dom";

// NavBar Component
export default class NavBar extends Component{

    render() {

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand container">Todo App</h1>
            </nav>
        )
    }
}