import React from "react";
import NavLink from "react-router-dom/modules/NavLink";
export default class Header extends React.Component{
    render() {
        return (
            <div className="container">
              <NavLink>Type</NavLink>
              <NavLink>How to</NavLink>
            </div>
        )
    }
}