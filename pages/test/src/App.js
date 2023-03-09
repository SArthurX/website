import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function App2(props){
  return(
  <button>{props.children}</button> 
  );
}

function App1(props){
  return(
    <button onClick={props.handleClick}>{props.name}</button>);
}
let i =0;

const chname=(x)=>{
  (x)?document.getElementById('chn').innerHTML='<h1>你媽死了</h1>':document.getElementById('chn').innerHTML='<h1>你媽真的死了別按了==</h1>';

}

class App extends Component{
  render(){
    
    return(
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#FF0000",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
        </div>
        <button id = "chn" onClick={this.changePercent}>點我</button>
      </div>
    );
  }
  /*render(){
    
    return(
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
        </div>
        <button onClick={this.changePercent}>轉換百分比 </button>
      </div>
    );
  }
  */
  constructor(props) {
    super(props);
    this.state={
      percent:"0%"
    }
    this.changePercent=this.changePercent.bind(this); //綁定changePercent
  }
  changePercent(){ //加入changePercent函式
    i +=10;
    if(i>=200){chname(1);}
    if(i>=300){chname(0);}
    this.setState({percent:0+i})
  }
}

export default App;
