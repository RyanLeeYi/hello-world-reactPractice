import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App3(props){
    return(
        <button>{props.children}</button>
      );
}

export default App3;