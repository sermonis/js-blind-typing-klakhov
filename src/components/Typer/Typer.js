import React, {Component} from 'react';
import styles from './Typer.module.sass';
import Input from "./Input/Input";
import Interspector from "./Interspector/Interspector";

class Typer extends Component{

    state={
        inputString:"",
        outString: "hello world",
        nextCharIndex:0,
    };

    compareSymbol(evalSymbol){
        if(evalSymbol === this.state.outString[this.state.nextCharIndex]){
            this.setState({
                nextCharIndex: this.state.nextCharIndex + 1,
                inputString:this.state.inputString + evalSymbol,
            });
            return true;
        }else{
            return false;
        }
    }

    onSymbolInput(input){
        let evalString = input.target.value;
        let evalSymbol = evalString.charAt(evalString.length - 1);
        console.log(this.compareSymbol(evalSymbol));
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