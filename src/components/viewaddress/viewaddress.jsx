
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

import axios from 'axios';

export default function ViewAddress({id}) {

    const [open, setOpen] = useState(false);
    const [adresses,setAddress] = useState([]);

    function getAddresses(){
      axios.get('http://127.0.0.1:8000/api/customer/address/'+id)
      .then(    function (response) { 
          setAddress(response.data.addresses);        
       } )
      .catch(   function (error)  {   console.log(error);     } );
     
    }

    useEffect(() => {
      getAddresses();
    }, []);


  return (
    <div>

         <Button sx={{marginRight:1}} variant="outlined" onClick={()=>{setOpen(true)}}>View</Button>
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
                  {adresses.map((val,index)=> 
                  <>
                    <Typography variant="h6" gutterBottom>
                      {'Address  ' + (index+1) + ' : ' + val.address}
                    </Typography>                    
                  </> )}
                  <Button onClick={()=>{setOpen(false)}} variant="outlined">Cancel</Button>                
              </Box>

          </DialogContent>

          <DialogActions sx={{display:'flex' , justifyContent:'center'}}>
            
          </DialogActions>

        </Dialog>
    </div>
  )
}
