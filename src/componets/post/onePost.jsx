import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../../stor/postSlice';
import useDelete from "../../hooks/deleteHook";
import usePut from '../../hooks/putHook';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Mode from '@mui/icons-material/Mode';
import Send from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import { pink, cyan, teal, lime,grey,red } from '@mui/material/colors';
import {moment} from 'moment';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const OnePost =(props)=>{
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false);
  const [like, setLike] = useState(false);
  const [cnt, setCnt] = useState(0);
//   const [time, setTime] = useState(props.items.caeteDate)
  const [content, setContent] = useState(props.items.content)
  const moment= require('moment') 
  const d=props.items.caeteDate;
  const Date=moment(d).format("DD/MM/yyy kk:mm:ss");

  const {axiosDataDelete} = useDelete({url:'https://localhost:7259/api/Post'});
  const {axiosDataPut} = usePut({url:'https://localhost:7259/api/Post'});
  const toEdit = () => {
      setEdit(false)
      dispatch(editPost({id: props.items.id, content: content,like:like}));
      axiosDataPut({id: props.items.id, content: content,like:like});
  }

  const todelete = (()=>{
    axiosDataDelete(props.items.id);
    dispatch(deletePost({id:props.items.id})); 
  })
  return (
      <>
          {!edit ?
            <Card sx={{ width:'15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {props.items.content}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {Date}
                      </Typography>
                  </CardContent>
                  {/* <Checkbox
                      {...label}
                      defaultNotChecked
                      
                       disabled
                  /> */}
                  <CardActions >
                      <Button size="xxlarge" onClick={() => {todelete()}}><DeleteForeverIcon size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                      <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                      {!like?
                        <Button size="xxlarge" onClick={() => setLike(true)}><FavoriteBorderIcon size="xxlarge" sx={{ color: grey['900'] }} /></Button>
                        :
                        <Button size="xxlarge" onClick={() => setCnt(cnt+1)}><FavoriteIcon size="xxlarge" sx={{ color: red['900'] }} /></Button>
                      }
                     
                  </CardActions>
                  <Typography gutterBottom variant="h5" component="div">
                          {cnt}
                  </Typography>
              </Card>
              : <Card sx={{ width:'15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                  <CardContent>
                      <TextField id="outlined-basic"  variant="outlined"  defaultValue={props.items.content} onChange={(e) => setContent(e.target.value)} />
                  </CardContent>
                  
                     
                  <CardActions >
                      <Button size="xxlarge" onClick={()=>toEdit()} ><Send size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                  </CardActions>
              </Card>}
      </>
  )
}

export default OnePost
