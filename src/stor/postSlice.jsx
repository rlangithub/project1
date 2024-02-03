import { createSlice } from "@reduxjs/toolkit";
const initValue = {
    postes: []    
};

const PostSlice = createSlice({
    name:"postes",
    initialState:initValue,
    reducers:{
        getAll:(state,actions)=>{
            state.postes = actions.payload.res;
        },
        addPost:(state,actions)=>{
            state.postes = [...state.postes,actions.payload.postes];
        },
        deletePost:(state,actions)=>{
            state.postes = state.postes.filter(p => p.id != actions.payload.id);
        },
        editPost:(state,actions)=>{
            state.postes.map((p)=>{
                if(p.id == actions.payload.id)
                    p.content = actions.payload.content;
              
            });
        }
    }
});
export const {getAll,addPost,deletePost,editPost} = PostSlice.actions;
export default PostSlice.reducer;