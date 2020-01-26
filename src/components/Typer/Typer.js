import React, {Component} from 'react';
import styles from './Typer.module.sass';
import * as firebase from "firebase/app";
import "firebase/firestore";
import Input from "./Input/Input";
import Interspector from "./Interspector/Interspector";
import Statistics from "./Statistics/Statistics";
class Typer extends Component{

    state={
        inputString:"",
        outString: "",
        wordsCount: 8,
        libraryLength: 17000,
        secondCheck: false,
        statistics:{
            errors:0,
            right:0,
            wrong:0,
        },
        loading: false,
    };

    componentDidMount() {
        let folder = document.getElementById('folder');
        folder.focus();
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.loading && !prevState.loading){
            if(!this.state.outString){
                this.getData();
            }
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
        this.compareSymbol(evalSymbol);
    }

    async getData(){
        this.syncFirebaseApp();
        let db = firebase.firestore();
        let words = db.collection('words');
        let wordsToShow = [];
        this.setLoading(true);
        for(let i=0; i<this.state.wordsCount; i++){
            let index = Math.floor(-0.5 + Math.random()*(this.state.libraryLength + 1));
            await words.doc(index.toString()).get().then(doc=>{
                wordsToShow.push(doc.data().name);
            });
        }
        this.setLoading(false);
        this.setData(wordsToShow);
    }

    setLoading(loading){
        this.setState({
            statistics:{
                ...this.state.statistics,
            },
            loading: loading,
        });
    }

    setFocus(){
        let folder = document.getElementById('folder');
        folder.focus();
    }

    setData(data){
        this.setState({
            inputString:"",
            outString: data.join(' '),
        })
    }

    syncFirebaseApp(){
        try{
            firebase.initializeApp({
                apiKey: 'AIzaSyDH7MRNLgPWkefxHmQbQmEhPK1fGuahXBo',
                authDomain: 'eur3',
                projectId: 'touch-typer-841ef'
            });
        }catch (e) {}
    }

    render() {
        return (
            <div className={styles.typer+" container"} onClick={this.setFocus}>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Input onSymbolInput={this.onSymbolInput.bind(this)}/>
                        <Statistics statistics={this.state.statistics}/>
                        <Interspector inputString={this.state.inputString}
                                      outString={this.state.outString}
                                      loading={this.state.loading}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Typer;