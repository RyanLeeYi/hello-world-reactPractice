import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Navbar from "./Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path='/' element={<FirstPage />} />
                    <Route path="/second/:id?/:sdata?" element={<SecondPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;