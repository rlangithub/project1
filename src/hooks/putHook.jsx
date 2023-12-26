import axios from "axios";

const usePut = (props)=>{
    const axiosDataPut =async (updateDate)=>{
        try{
            const put = await axios.put(props.url,updateDate);
        }
        catch{
            console.log("erorr put");
        }
    }
    return {axiosDataPut};
}
export default usePut