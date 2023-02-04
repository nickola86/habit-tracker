import * as React from "react";
import {CircularProgress} from "@mui/material";

export function Spinner() {
    return <div style={{display:'flex',justifyContent:'center'}}>
        <CircularProgress/>
    </div>
 }