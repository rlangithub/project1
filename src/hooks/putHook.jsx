import axios from "axios";
import React from "react";

const usePut = (props)=>{
    const axiosDataPut =async (updateDate)=>{
        try{
            console.log("i in put")
            debugger;
            const put = await axios.put(props.url+'/'+updateDate.id,updateDate);
            //const put = await axios.put(updateDate.id,updateDate);
            console.log("i finish put")
        }
        catch{
            console.log();
        }
    }
    return {axiosDataPut};
}
export default usePut