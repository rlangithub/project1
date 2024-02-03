import { X } from "@mui/icons-material";
import axios from "axios";
import React from "react";

const usePost = (props)=>{
    const axiosDataPost =async (newDate)=>{
        try{
            console.log("i in post first")
            debugger;
            const post = await axios.post(props.url,newDate);
            
        }
        catch(erorr){
            console.error(erorr);
        }
    }
    return {axiosDataPost};
}
export default usePost