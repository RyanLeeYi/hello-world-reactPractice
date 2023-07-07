import React , { Component } from "react";

class App4 extends Component{
    constructor(props) {
        super(props);
        this.state={
            percent:"30%"
        }
        this.changePercent=this.changePercent.bind(this);
        this.changePercent02=this.changePercent02.bind(this);
      }
      changePercent(){ //加入changePercent函式
        this.setState({percent:"70%"})
      }
      changePercent02(){ //加入changePercent函式
        this.setState({percent:"10%"},()=>{
            console.log("HEY");
          })
      }
    
    render(){
        return(
            <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
            </div>
            <button onClick={this.changePercent}>轉換百分比01 </button>
            <button onClick={this.changePercent02}>轉換百分比02 </button>
            </div>
        );
    }
}

export default App4;