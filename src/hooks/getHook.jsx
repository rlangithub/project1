import axios from "axios";
import React, { useState } from "react";

const useGet = (props)=>{
    // const [res,setRes] = useState([{id: 5, name:"Rivky", createDate:Date.now(),isComplete:true}]);
    const [res,setRes] = useState([{id: 5, content:"Rivky", createDate:Date.now(),like:false}]);
    const axiosData =async ()=>{
        try{
            const get = await axios.get(props.url);
            setRes(get.data);
        }
        catch{
            console.log("erorr get");
        }
    }
    return {axiosData,res};
}
export default useGet