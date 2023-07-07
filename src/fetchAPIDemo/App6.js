import React , {Component} from "react";

class App6 extends Component{
    constructor(props){
        super(props);
        this.state={
            repoName:null,
            jsonstring:null
        }
        this.handleClick=this.handleClick.bind(this);
    }
    methodGET(){
        fetch('https://10.20.16.153:7387/TMS/GetSysID',{method:"GET"})
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                repoName:data[2]['syS_ID'],
                jsonstring:data[2]['syS_DESC']
            });
            console.log(data);
        }).catch(e=>{
            console.log(e);
        })
    }
    methodPOST(){
        //post的資訊
        const data = {
            "RW_ID":"",
            "SAM_ID":"02034AFE00012F3E",
            "SYS_ID":"",
            "SP_ID":"",
            "SubComp_ID":""
        }
        fetch('https://10.20.16.153:7387/TMS/GetDeviceWithValue',
        {
            method:"POST",
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res=>res.json())
        .then(resData=>{
            console.log(resData);
        })
        .catch(e=>{
            console.log(e);
        })
    }
    handleClick(){
        this.methodGET();
        this.methodPOST();
    }
    render(){
        return(
            <div className="App6">
                <div className="data-display">
                    {(this.state.repoName===null)?"目前還有沒有資料":this.state.repoName}
                </div>
                <div className="data-display">
                    {(this.state.repoName===null)?"目前還有沒有資料2":this.state.jsonstring}
                </div>
                <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
            </div>
        );
    }
}

export default App6;