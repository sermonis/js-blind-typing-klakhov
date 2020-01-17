// @flow
import * as React from 'react';
import styles from './Import.module.sass'
const Input = (props) => {
    return (
        <div>
            <input type="text" id="folder" className={styles.folder} onChange={props.onSymbolInput}/>
        </div>
    );
};
export default Input;