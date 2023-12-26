import axios from "axios";

const useDelete = (props)=>{
    const axiosDataDelete =async (id)=>{
        try{
            const deleteTask = await axios.delete(props.url,id);
        }
        catch{
            console.log("erorr get");
        }
    }
    return {axiosDataDelete};
}
export default useDelete