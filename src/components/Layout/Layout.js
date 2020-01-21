import React, {Component} from 'react';
import styles from './layout.module.sass';
import Typer from "../Typer/Typer";
import Header from "../Header/Header";
import Route from "react-router-dom/modules/BrowserRouter";
class Layout extends Component {
    componentDidMount() {
        let folder = document.getElementById('folder');
        folder.focus();
    }

    setFocus(){
        let folder = document.getElementById('folder');
        folder.focus();
    }

    render() {
        return (
            <div className={styles.app} onClick={this.setFocus}>
                <Header/>
            </div>
        );
    }
}

export default Layout;