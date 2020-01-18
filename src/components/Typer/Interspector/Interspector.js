import React, {Component} from 'react';
import styles from './Interspector.module.sass';

class Interspector extends Component{
    state = {
        dividerStatus:true,
        dividerClasses:[
            styles.divider,
            styles.divider_on
        ]
    };

    dividerPulse(){
        setInterval(()=>{
            if(this.state.dividerStatus){
                this.setState({
                    dividerStatus: !this.state.dividerStatus,
                    dividerClasses:[
                        styles.divider,
                        styles.divider_off
                    ]
                })
            }else{
                this.setState({
                    dividerStatus: !this.state.dividerStatus,
                    dividerClasses:[
                        styles.divider,
                        styles.divider_on
                    ]
                })
            }
        },500)
    }

    componentDidMount() {
        this.dividerPulse()
    }

    render(){
        return (
            <div>
                <div className={styles.right}>{this.props.inputString}</div>
                <div className={this.state.dividerClasses.join(' ')} id="divider"/>
                <div className={styles.wrong}>{this.props.outString}</div>
            </div>
        )
    }

}
export default Interspector;