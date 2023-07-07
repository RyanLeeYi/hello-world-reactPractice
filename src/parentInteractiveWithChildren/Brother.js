import React, { Component } from 'react';
import GrandSon from './GrandSon';
class Brother extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      feeling:"?",
      expectAmount: 40
    }
    this.setMyFeeling=this.setMyFeeling.bind(this);
  }

    setMyFeeling(){
        if(this.props.money<this.state.expectAmount){
            this.setState({feeling:"不能接受"})
            this.props.argue("brother",this.state.expectAmount);
        }else{
            this.setState({feeling:"可以接受"})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.money!==this.props.money){
            this.setMyFeeling();
        }
    }

    render(){
        return(
        <div>
            <div>
            我是兒子，我拿到{this.props.money}，我目前{this.state.feeling}
            </div>
            <GrandSon {...this.props}/>
        </div>
        );
    }
}
export default Brother;