import React, {Component} from 'react';
import styles from './Typer.module.sass';
import axios from 'axios'
import Input from "./Input/Input";
import Interspector from "./Interspector/Interspector";

class Typer extends Component{

    state={
        inputString:"",
        outString: "",
        wordsCount: 1,
    };

    componentDidMount() {
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
                    outString:this.state.outString.slice(1,this.state.outString.length)
                });
            }
        }
    }

    onSymbolInput(input){
        let evalString = input.target.value;
        let evalSymbol = evalString.charAt(evalString.length - 1);
        console.log(this.compareSymbol(evalSymbol));
    }

    getData(){
        axios.get('https://random-word-api.herokuapp.com/word?key=ZWDECO3G&number='+this.state.wordsCount)
            .then(response=>{
                this.setData(response.data);
            })
    }

    setData(data){
        this.setState({
            inputString:"",
            outString: data.join(' '),
        })
    }

    render() {
        return (
            <div>
              <Input onSymbolInput={this.onSymbolInput.bind(this)}/>
              <Interspector inputString={this.state.inputString}
                            outString={this.state.outString}/>
            </div>
        );
    }
}

export default Typer;