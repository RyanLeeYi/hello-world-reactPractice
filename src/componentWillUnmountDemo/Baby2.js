import React, { Component } from 'react';
class Baby2 extends Component{
  constructor(props) {
    super(props);
    this.state={
        isRightDad: true,
        isGetData: false,
        Mom: ""
    }
    this.ajaxSimulator=this.ajaxSimulator.bind(this)
  }
    componentWillUnmount(){
        document.getElementById("callDad").remove();
    }

    ajaxSimulator(){
        setTimeout(()=>{this.setState({isGetData:true, Mom:"小美"})},3000)
    }

    componentDidMount(){
        if(this.props.dad!=="Chang"){
            this.setState({isRightDad:false})
        }
        this.ajaxSimulator();
        let dadElement = document.createElement('div');
        dadElement.setAttribute('id','callDad');
        dadElement.textContent = "爸!";
        document.getElementById("talk").append(dadElement)
    }

    render(){
        if(this.state.isGetData===false)
            return(
                <div id="msg">讀取中</div>
            );
        else
            return(
                <div id="msg">他的媽媽是{this.state.Mom}</div>
            );                
    }
}
export default Baby2;