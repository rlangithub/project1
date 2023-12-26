import { createSlice } from "@reduxjs/toolkit";

const d=new Date();
const nowDate=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();

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
            state.tasks = [...state.tasks,actions.payload.tasks];
        },
       deleteTask:(state,actions)=>{
            state.tasks = state.tasks.filter(t => t.id != actions.payload.id);
        },
        editTask:(state,actions)=>{
            state.tasks.map((t)=>{
                if(t.id == actions.payload.id){
                    t.name = actions.payload.name;
                    t.isComplete = actions.payload.isComplete;
                };
            });
        }
    }
});
export const {getAll,addTask,deleteTask,editTask} = ToDoSlice.actions;
export default ToDoSlice.reducer;