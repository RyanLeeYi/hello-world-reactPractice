import React from 'react';
import { BrowserRouter,Routes, Route, Outlet, Link } from 'react-router-dom';

// 页面组件
const Home = () => <h1>首页</h1>;
const About = () => <h1>关于</h1>;

// 布局组件
const Layout = () => (
    <div>
        <h1>头部</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Outlet /> {/* 使用 Outlet 渲染子路由的内容 */}
        <h1>底部</h1>
    </div>
);

// 路由配置
const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;