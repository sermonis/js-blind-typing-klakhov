import React, {Component} from 'react';
import styles from './layout.module.sass';
import Typer from "../Typer/Typer";
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import bcImg from "../../img/fone.png";
import About from "../About/About";

class Layout extends Component {
    render() {
        return (
            <div className={styles.app} style={{backgroundImage: `url(${bcImg})`}}>
                <Header/>
                <Route path='/blind-typer' exact component={Typer}/>
                <Route path='/blind-typer/about' exact component={About}/>
            </div>
        );
    }
}

export default Layout;