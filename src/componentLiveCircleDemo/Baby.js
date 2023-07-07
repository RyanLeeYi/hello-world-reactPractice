import React , { Component } from "react";

class Baby extends Component{
    //執行順序為 1.constructor
    constructor(props){
        super(props);
        this.state={
            isRightDad: true,
            isGetData: false,
            Mom: ""
        }
        this.ajaxSimulator=this.ajaxSimulator.bind(this)
        this.scrollTo=this.scrollTo.bind(this);
        this.autoChangeMom = this.autoChangeMom.bind(this);
    }
    //2.getDerivedStateFromProps
    static getDerivedStateFromProps(props,state){
        if(props.dad!=="Chang")
          return {isRightDad:false}
    }
    //5.componentDidMount
    //所以若是要對html元素進行操作，需要等到這個階段
    componentDidMount(){
        this.ajaxSimulator();
        this.scrollTo();
    }
    ajaxSimulator(){
        setTimeout(()=>{this.setState({isGetData:true, Mom:"小美"})},3000)
    }
    autoChangeMom(){
        if(this.state.Mom === "小美"){
            this.setState({isGetData:true, Mom:"小華"});
        }else{
            this.setState({isGetData:true, Mom:"小美"});
        }
        setTimeout(this.autoChangeMom, 1000);//重複循環執行
    }
    scrollTo(){
        /* 讀取 container元素的scrollLeft */
        let scrollLeft=document.getElementById('container').scrollLeft; 
        if(scrollLeft<300){
            /* 修改 container元素的scrollLeft */
            document.getElementById('container').scrollLeft=scrollLeft+5;
            setTimeout(this.scrollTo,20);
        }
    }
    //3.render -> 4.渲染DOM
    render(){
        return(
            <div>
                <div id="msg">
                    {(this.state.isGetData===false)?"讀取中":"他的媽媽是"+this.state.Mom}
                </div>
                <div id="container" style={{width:"400px",overflowX:"scroll"}}>
                    <div id="left"  style={{width:"700px",fontSize:"30px",textAlign:"center"}}>
                        {"我是頭 O->---------------< 我是腳，我滑出來囉~ "}
                    </div>       
                </div> 
            </div>
        )
    }
}
export default Baby;