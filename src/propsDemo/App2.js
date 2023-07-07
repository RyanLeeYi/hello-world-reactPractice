import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App2(props){
    return(
        <button onClick={props.handleClick}>{props.name}</button>
      );
}

export default App2;