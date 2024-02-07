import axios from "axios";

const usePost = (props)=>{
    const axiosDataPost =async (newDate)=>{
        try{
            console.log("i in post")
            debugger;
            const post = await axios.post(props.url,newDate);
            console.log("i finish post")
        }
        catch(erorr){
            console.log(erorr);
        }
    }
    return {axiosDataPost};
}
export default usePost