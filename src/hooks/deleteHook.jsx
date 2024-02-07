import axios from "axios";

const useDelete = (props)=>{
    const axiosDataDelete =async (id)=>{
        try{
            const deleteTask = await axios.delete(props.url+'/'+id,id);
        }
        catch(erorr){
            console.erorr(erorr);
        }
    }
    return {axiosDataDelete};
}
export default useDelete