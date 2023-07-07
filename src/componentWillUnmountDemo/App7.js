import React , {Component} from 'react';
import Baby2 from './Baby2';

class App7 extends Component{
    constructor(props) {
      super(props);
      this.state={
        rate:"",
        isBorn:true
      }
      this.handleClick=this.handleClick.bind(this);
      this.spawnBaby=this.spawnBaby.bind(this);
    }
  
    handleClick(){
      this.setState({isBorn:!this.state.isBorn})
    }
  
    spawnBaby(){
      if(this.state.isBorn)
        return <Baby2 dad="Chang"/>
    }
  
      render(){
          return(
            <div>
              <button onClick={this.handleClick}>
                  {(this.state.isBorn===true)?"讓他回去肚子裡":"讓他生"} 
              </button>
                {this.spawnBaby()}
            </div>
          );
      }
  }
  export default App7;