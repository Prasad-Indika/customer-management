import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Toast from '../../common/alert/alert';

import axios from 'axios';
import instance from '../../services/AxiosOrder';

export default function AddAddress({id,loadCus}) {

    const [open, setOpen] = useState(false);
    const [address,setAddress] = useState();

    function AddNewAddress(){

        const data = {
            address : address,
        }
        console.log(id)
        instance.post(`/customer/address/${id}` , data)   
            .then(    function (response) { 
                loadCus();
                setOpen(false);
                Toast.fire({
                  icon: 'success',
                  title: 'Address Saved'
                });               
            
              } )
            .catch(   function (error)  {   console.log(error);     } );

    }

  return (
    <div>
        <Button variant="outlined" onClick={()=>{setOpen(true)}}>Add</Button>
         <Dialog
          
          open={open}
          onClose={()=>{setOpen(false);}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogTitle textAlign={'center'} id="alert-dialog-title">
                Add New Addresses
          </DialogTitle>

          <DialogContent>
             
              <Box>

                    <TextField
                        margin='normal'
                        fullWidth
                        id="filled-basic"
                        label="Address"
                        variant="filled"
                        value={address}
                        onChange={(val)=>{setAddress(val.target.value)}}
                  /> 
                 
                  <Button onClick={()=>{AddNewAddress()}} variant="outlined">Add</Button>
                  <Button onClick={()=>{setOpen(false)}} variant="outlined">Cancel</Button>                
              </Box>

          </DialogContent>

          <DialogActions sx={{display:'flex' , justifyContent:'center'}}>
            
          </DialogActions>

        </Dialog>

    </div>
  )
}
