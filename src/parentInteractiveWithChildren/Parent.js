import React , {Component} from "react";
import Brother from './Brother';
import Sister from './Sister';

class Parent extends Component{
    constructor(props) {
      super(props);
      this.state={ 
        moneyForBrother:60,
        moneyForSister:40,
        AllMoney:100,
        moneyBrotherExpect:0
      }
      this.allocateMoney=this.allocateMoney.bind(this);
    }
      allocateMoney(target,amount){
          let int = this.state.AllMoney - amount;
          if(target==="brother"){
            this.setState({moneyBrotherExpect:amount})
          }
          else{
            this.setState({moneyForBrother:int,moneyForSister:amount});
          }
      }
      render(){
          return(
            <div>
                <Brother money={this.state.moneyForBrother} argue={this.allocateMoney} />
                <Sister money={this.state.moneyForSister} argue={this.allocateMoney} moneyForBrother={this.state.moneyBrotherExpect}/>
            </div>
          );
      }
  }
  export default Parent;