import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const SecondPage = () => {
    const {id,sdata} = useParams();
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#08D9D6",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
            <h1>輸入字串:{id}</h1>
            <h1>輸入字串2:{sdata}</h1>
        </div>
    )
}
export default SecondPage;