import axios from "axios";
import React from "react";

const usePut = (props)=>{
    const axiosDataPut =async (updateDate)=>{
        try{
            let s=props.url;
            s+='/';
            s+=updateDate.id
            const put = await axios.put(s,updateDate);
        }
        catch{
            console.log("erorr put");
        }
    }
    return {axiosDataPut};
}
export default usePut