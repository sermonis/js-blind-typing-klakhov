import React, {Component} from 'react';
import styles from './Typer.module.sass';
import axios from 'axios'
import Input from "./Input/Input";
import Interspector from "./Interspector/Interspector";
import Statistics from "./Statistics/Statistics";
class Typer extends Component{

    state={
        inputString:"",
        outString: "",
        wordsCount: 10,

        secondCheck: false,
        statistics:{
            errors:0,
            right:0,
            wrong:0,
        }
    };

    componentDidMount() {
        let folder = document.getElementById('folder');
        folder.focus();
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.outString){
            this.getData();
        }
    }

    compareSymbol(evalSymbol){
        if(this.state.outString){
            if(evalSymbol === this.state.outString[0]){
                this.setState({
                    inputString:this.state.inputString + evalSymbol,
                    outString:this.state.outString.slice(1,this.state.outString.length),
                    secondCheck: false,
                    statistics:{
                        ...this.state.statistics,
                        right:  !this.state.secondCheck ? this.state.statistics.right+1 : this.state.statistics.right
                    }
                });
            }else{
                this.setState({
                    secondCheck: this.state.secondCheck ? this.state.secondCheck : true,
                    statistics:{
                        ...this.state.statistics,
                        errors: this.state.statistics.errors + 1,
                        wrong: this.state.secondCheck ? this.state.statistics.wrong : this.state.statistics.wrong +1,
                    }
                })
            }
        }
    }

    onSymbolInput(input){
        let evalString = input.target.value;
        let evalSymbol = evalString.charAt(evalString.length - 1);
        console.log(this.compareSymbol(evalSymbol));
    }

    getData(){
        axios.get('https://random-word-api.herokuapp.com/word?key=3P468F7E&number='+this.state.wordsCount)
            .then(response=>{
                this.setData(response.data);
            })
    }

    setFocus(){
        let folder = document.getElementById('folder');
        folder.focus();
    }

    setData(data){
        this.setState({
            inputString:"",
            // outString: data.join(' '),
        })
    }

    render() {
        return (
            <div className={styles.typerContainer+" container"} onClick={this.setFocus}>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Input onSymbolInput={this.onSymbolInput.bind(this)}/>
                        <Statistics statistics={this.state.statistics}/>
                        <Interspector inputString={this.state.inputString}
                                      outString={this.state.outString}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Typer;