import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    tasks: []    
};

const ToDoSlice = createSlice({
    name:"toDo",
    initialState:initValue,
    reducers:{
        getAll:(state,actions)=>{
            state.tasks = actions.payload.res;
        },
        addTask:(state,actions)=>{
            console.log("slice");
            state.tasks = [...state.tasks,actions.payload.tasks];
            console.log('state.tasks',state.tasks);
        },
       deleteTask:(state,actions)=>{
            state.tasks = state.tasks.filter(t => t.id != actions.payload.id);
        },
        editTask:(state,actions)=>{
            state.tasks.map((t)=>{
                if(t.id == actions.payload.id){
                    t.name = actions.payload.name;
                    t.Complated = actions.payload.Complated;
                };
            });
        }
    }
});
export const {getAll,addTask,deleteTask,editTask} = ToDoSlice.actions;
export default ToDoSlice.reducer;