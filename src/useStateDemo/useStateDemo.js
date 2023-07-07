import React , { useState } from "react";

const App5=()=>{
  //變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值)
  const [percent, changePercent] = useState("20%");
  console.log(useState("初始值"));

  return(
    <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent,height:"100%",borderRadius:"10px"}}></div>
      </div>
      <button onClick={()=>{changePercent("70%")}}>轉換百分比01 </button>
      <button onClick={()=>{changePercent("10%")}}>轉換百分比02 </button>
    </div>
  );
}

export default App5;