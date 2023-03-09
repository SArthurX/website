import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

const showOne = true;
const styleArgument = {color: 'red' };
let i = 0;
const getValue=(event)=>{
  if (event) {i+=1;
  return i;}
}

const testFunction =()=> {
  return( 
    <div>
        <button> 大家好 </button>
        <h1> 我不好 </h1>
    </div>
  )
}
const multiButton=(z)=>{
  var output=[];
  for(let i=1;i<=z;i++)
      output.push(<button><h1 style = { styleArgument }>我是第{i}個按鍵</h1></button>)
  return output;
}

function Ab(){
  return(<button>不...</button>);
}

function Progress(){
  const barWidth="50%";
  return(
      <div className="progress-back" 
          style={{
            backgrou  ndColor:"#d8ced0",
            width:"200px",
            height:"7px",
            borderRadius:"10px"}}>
      <div className="progress-bar" 
          style={{
            backgroundColor:"#fe5196",
            width:barWidth,
            height:"100%",
            borderRadius:"10px"}}>
      </div>
    </div>
  );
}

const printMessage=()=>{
  document.getElementById('show-area').innerHTML='<h1>我被按到了</h1>';
  document.getElementById('nnn').innerHTML='<h1>0000</h1>';
}



root.render(
  <div>
    <App/>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
