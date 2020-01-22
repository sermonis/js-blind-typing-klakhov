import React from "react";
import styles from './Statistics.module.sass'
const statistics = (props) =>{
    let data = {
        errors:props.statistics.errors,
        correctRate: Math.floor(props.statistics.right/
            (props.statistics.right + props.statistics.wrong)*1000)/10
    };
    return (
        <div className="container">
            <div className="row justify-content-around mt-4 mb-3">
                <div className={styles.left + " col-auto mr-5"}>
                    {data.errors} errors
                </div>
                <div className={styles.right +" col-auto ml-5"}>
                    {data.correctRate ? data.correctRate : '0'}% correct rate
                </div>
            </div>
        </div>
    )
}
export default statistics
