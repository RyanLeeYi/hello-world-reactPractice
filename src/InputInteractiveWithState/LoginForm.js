import React,{useEffect, useState} from "react";

const LoginForm = () => {
    const [account, setAccount] = useState("輸入數字");

    useEffect(()=>{
        setTimeout(() => {
            setAccount("用fetch拿到的資料");
        }, 2000);
    },[])

    return (
        <div>
            <input type="text" value={account} placeholder={account} onChange={(e)=>{
                setAccount(e.target.value);
            }}/>
            <div>目前account:{account}</div>
            <button onClick={()=>{setAccount("")}}>用按鍵取得新的Account</button>
        </div>
    )
}
export default LoginForm;