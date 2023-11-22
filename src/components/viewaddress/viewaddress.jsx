
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AppButton from '../../common/button/button';


import axios from 'axios';

export default function ViewAddress() {

    const [open, setOpen] = useState(false);


  return (
    <div>

         <Button variant="outlined" onClick={()=>{setOpen(true)}}>View Address</Button>
         <Dialog
          
          open={open}
          onClose={()=>{setOpen(false);}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogTitle textAlign={'center'} id="alert-dialog-title">
                Addresses
          </DialogTitle>

          <DialogContent>
             
              <Box>
                 

                 


              </Box>

          </DialogContent>

          <DialogActions sx={{display:'flex' , justifyContent:'center'}}>
            
          </DialogActions>

        </Dialog>
    </div>
  )
}
