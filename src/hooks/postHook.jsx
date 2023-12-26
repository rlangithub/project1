import axios from "axios";

const usePost = (props)=>{
    const axiosDataPost =async (newDate)=>{
        try{
            const post = await axios.put(props.url,newDate);
        }
        catch{
            console.log("erorr put");
        }
    }
    return {axiosDataPost};
}
export default usePost