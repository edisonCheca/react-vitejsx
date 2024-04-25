import React from 'react';
import RickyandMorty from "../RickyandMorty";
import Home from "../components/Home"
import {BrowserRouter,Route, Routes} from "react-router-dom";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characterCard" element={<RickyandMorty/>}/>
                <Route path="/*" element={<p>Error 404 Recuerdo</p>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Navigation