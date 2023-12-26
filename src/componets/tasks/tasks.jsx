import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTask,getAll} from '../../stor/slice'
import OneTask from './oneTask';
import useGet from '../../hooks/getHook';
import usePost from '../../hooks/postHook';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ToDoes = ()=>{

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const {res,axiosData} = useGet({url:'http/f'});
    const {axiosDataPost} = usePost({url:'http/f'});
    const [id,setId] = useState(0);
    const myTasks = useSelector(x=>x.ToDoSlice.tasks);


    const [name, setName] = useState("");
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const savaTask = () => {
      setId(id+1);
      const newTask = {
        id:id,
        name: name,
        createDate: Date.now(),
        isComplated: false
       
      }
      dispatch(addTask({tasks:newTask}));
      axiosDataPost(newTask);
      handleClose()
    };

    useEffect(()=>{
      axiosData();
      dispatch(getAll({res:res}));
    },[]);

    return (
        <>
          <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
              הוסף משימה
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>משימה</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="הוסף משימה"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={e=>{setName(e.target.value)}}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={()=>savaTask()}>הוסף</Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
          {
                myTasks.map((t)=>{
                  return(
                    <OneTask items={t}/>
                  )
                })
          }
        </>
      )
}
export default ToDoes