import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OnePost from './onePost';
import {addPost,getAll} from '../../stor/postSlice';
import useGet from '../../hooks/getHook';
import usePost from '../../hooks/postHook';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Post=()=>{

  const dispatch = useDispatch();
  const myPostes = useSelector(x=>x.PostSlice.postes);
 
  const [open, setOpen] = React.useState(false);
  const {res,axiosData} = useGet({url:'http/f'});
  const {axiosDataPost} = usePost({url:'http/f'});
  const [id,setId] = useState(0);
  const [content, setContent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const savaPost = () => {
    setId(id+1);
    const newPost = {
      id:id,
      content: content,
      createDate: Date.now(),
      like:false
    }
    dispatch(addPost({postes:newPost}));
    axiosDataPost(newPost);
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
            ADD POST
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Post</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Add Post"
                type="email"
                fullWidth
                variant="standard"
                onChange={e=>{setContent(e.target.value)}}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={()=>savaPost()}>Add</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
        {
              myPostes.map((p)=>{
                return(
                  <OnePost items={p}/>
                )
              })
        }
      </>
    )
}

export default Post
