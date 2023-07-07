import React from "react";
import { Link,Outlet } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar">
                <Link to='/'>點我連到第一頁</Link>
                <Link to="/second/10/100" style={{ marginLeft: "20px" }}>點我連到第二頁</Link>
                <Outlet /> {/* 使用 Outlet 渲染子路由的内容 */}
            </nav>
        </div>
    );
}

export default Navbar;