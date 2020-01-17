import * as React from 'react';
import styles from './Interspector.module.sass';

const Interspector = (props)=>{
    return (
        <div>
            <div className={styles.right}>{props.inputString}</div>
            <div className={styles.wrong}>{props.outString}</div>
        </div>
    )
};
export default Interspector;