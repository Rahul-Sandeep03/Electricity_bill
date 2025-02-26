import React from "react";
import { Route ,Routes } from "react-router-dom";
import Insert from './Insert';
import Update from "./Update";
import Getall from './Getall';
import DeleteOperation from './DeleteOperation';
import GetOne from "./GetOne";

const Body=()=>{
    return(<>

    <div>
        <Routes >
            <Route path="/" element={<Insert />}> </Route>
            <Route path="/update" element={<Update />}> </Route>
            <Route path="/delete" element={<DeleteOperation />}> </Route>
            <Route path="/getAll" element={<Getall />}> </Route>
            <Route path="/getone" element={<GetOne />}> </Route>
            
        </Routes>
    </div>
    </>)

}

export default Body;