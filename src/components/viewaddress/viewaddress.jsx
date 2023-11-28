
import React, { useState ,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import instance from '../../services/AxiosOrder';

export default function ViewAddress({id , action='add',load}) {

    const [open, setOpen] = useState(false);
    const [adresses,setAddress] = useState([]);

    function getAddresses(){
      instance.get('/customer/address/'+id)
      .then(    function (response) { 
          setAddress(response.data.addresses);        
       } )
      .catch(   function (error)  {   console.log(error);     } );
     
    }

    const updateAddresState = (id,text) => {
      setAddress((address)=>{
        const newAddress = [...address];
        newAddress[id] = { ...newAddress[id], address:text };
        return newAddress;
      });
    }

    function updateAddresses(){
      adresses.forEach((val,index)=>{
        instance.put('/address/'+val.id,{address:val.address})
      .then(    function (response) { 
        load();
       } )
      .catch(   function (error)  {   console.log(error);     } );
      });
      
      
      setOpen(false);

    }

    useEffect(() => {
      getAddresses();
    }, []);

  return (
    <div>

         <Button sx={{marginRight:1}} variant="outlined" onClick={()=>{setOpen(true)}}>{action==='add' ? <>View</> : <>Update</>}</Button>
         <Dialog
          
          open={open}
          onClose={()=>{setOpen(false);}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"  >

          <DialogTitle textAlign={'center'} id="alert-dialog-title">
                Addresses
          </DialogTitle>

          <DialogContent>
              {action==='update' ? 
                  <Box>
                      {adresses.map((val,index)=> 
                        <>
                          <TextField
                            margin='normal'
                            fullWidth
                            id="filled-basic"
                            label="Address"
                            variant="filled"
                            value={adresses[index].address}
                            onChange={(text)=>{ updateAddresState(index,text.target.value); }}
                          />                                 
                        </>
                      )}
                  </Box>
                  : 
                  <Box>
                     {adresses.map((val,index)=> 
                        <>
                          <Typography variant="h6" gutterBottom>
                              {'Address  ' + (index+1) + ' : ' + val.address}
                          </Typography>                    
                        </> )}
                 </Box>}
        
          </DialogContent>
          
          <DialogActions sx={{display:'flex' , justifyContent:'center'}}>
              <Button onClick={()=>{setOpen(false)}} variant="outlined">Cancel</Button>
              {action==='update' ? <><Button onClick={()=>{updateAddresses()}} variant="outlined">update</Button></> : <></> }
          </DialogActions>

        </Dialog>
    </div>
  )
}
