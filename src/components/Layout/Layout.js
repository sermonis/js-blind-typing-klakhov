import React, {Component} from 'react';
import styles from './layout.module.sass';
import Typer from "../Typer/Typer";
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
                <Typer/>
            </div>
        );
    }
}

export default Layout;