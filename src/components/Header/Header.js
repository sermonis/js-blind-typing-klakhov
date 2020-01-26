import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.sass"
export default class Header extends React.Component{
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-end mr-5 ml-5">
                    <div className="col-auto">
                        <NavLink to="/blind-typer" className="h-b" activeClassName="h-a-b" exact>Home</NavLink>
                    </div>
                    <div className="col-auto">
                        <NavLink to='/blind-typer/about' className="h-b" activeClassName="h-a-b" exact>About</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}