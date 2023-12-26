import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../stor/slice';
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
import { pink, cyan, teal, lime } from '@mui/material/colors';
import {moment} from 'moment';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const OneTask =(props)=>{
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [isComplete, setIsComplete] = useState(props.items.isComplete)
  const [time, setTime] = useState(props.items.caeteDate)
  const [name, setName] = useState(props.items.name)
  const moment= require('moment') 
  const d=props.items.caeteDate;
  const Date=moment(d).format("DD/MM/yyy kk:mm:ss");

  const {axiosDataDelete} = useDelete({url:'http/f'});
  const {axiosDataPut} = usePut({url:'http/f'});
  const toEdit = () => {
      setEdit(false)
      dispatch(editTask({id: props.items.id, name: name,isComplete: isComplete}));
      axiosDataPut({id: props.items.id, name: name,isComplete: isComplete});
  }

  const todelete = (()=>{
    axiosDataDelete(props.items.id);
    dispatch(deleteTask({id:props.items.id})); 
  })
  return (
      <>
          {!edit ?
            <Card sx={{ width:'15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {props.items.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {Date}
                      </Typography>
                  </CardContent>
                  <Checkbox
                      {...label}
                      defaultNotChecked
                      
                       disabled
                  />
                  <CardActions >
                      <Button size="xxlarge" onClick={() => {todelete()}}><DeleteForeverIcon size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                      <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                  </CardActions>
              </Card>
              : <Card sx={{ width:'15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                  <CardContent>
                      <TextField id="outlined-basic"  variant="outlined"  defaultValue={props.items.name} onChange={(e) => setName(e.target.value)} />
                  </CardContent>
                  {props.items.isComplete ?
                      <Checkbox
                          {...label}
                          defaultChecked
                       
                          onClick={() => setIsComplete(!isComplete)}
                      />
                      : <Checkbox
                          {...label}
                          defaultNotChecked
                          sx={{
                              color: lime['50'],
                              '&.Mui-checked': {
                                  color: lime['50'],
                              },
                          }}
                          onClick={() => setIsComplete(!isComplete)}
                      />
                  }
                  <CardActions >
                      <Button size="xxlarge" onClick={()=>toEdit()} ><Send size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                  </CardActions>
              </Card>}
      </>
  )
}

export default OneTask
