import React, { Component } from 'react';
class GrandSon extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      feeling:"?",
      expectAmount: 40
    }
  }
    render(){
        return(<div>我是孫子，我拿到{this.props.money}</div>);
    }
}
export default GrandSon;