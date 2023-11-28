import React, { useState , useRef} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AppButton from '../../common/button/button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Toast from '../../common/alert/alert';
import Avatar from '@mui/material/Avatar';
import instance from '../../services/AxiosOrder';

export default function SaveCustomer({action='add',loadCustomers, obj = {
          name:'',
          contact:'',
          address:'',
          salary:'',
          image:''
}}) {

  const [open, setOpen] = useState(false);
  const [name,setName] = useState(obj.name);
  const [contact,setContact] = useState(obj.contact);
  const [address,setAddress] = useState('');
  const [salary,setSalary] = useState(obj.salary);
  const [selectedImage, setSelectedImage] = useState(null);
  const [addressArray,setAddressArray] = useState([]);

  const inputRef = useRef(null);

  let content = null;
  if(action==='update'){
      content = <>
          <IconButton onClick={()=>{setOpen(true)}} aria-label="delete"> 
              <UpgradeIcon />
          </IconButton>
       </>
  }else{
      content = <><AppButton clickEvent={()=>{setOpen(true)}} name='Add Customer'/></>
   }

  function addCustomer(){

      if (name.length===0){
           Toast.fire({icon: 'error', title: 'Name cant be empty'});
        return
      }

      var num = /^[0-9]+$/;
      if(contact.length===0){
        Toast.fire({icon: 'error', title: 'Contact no cant be empty'});
        return
      }else{
        if(!contact.match(num)){
              Toast.fire({icon: 'error', title: 'Contact no Invalid Format'});
            return
        }
      }

      if(salary.length===0){
        Toast.fire({icon: 'error', title: 'Salary cant be empty'});
        return
      }else{
        if(!salary.match(num)){
            Toast.fire({icon: 'error', title: 'Salary  Invalid Format'});
            return
        }
      }

        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('contact',contact);
        formdata.append('salary',salary);
        formdata.append('image',selectedImage)
        formdata.append('addresses',JSON.stringify(addressArray))
      
        instance.post('/customer' ,formdata)   
                .then(function (response) {
                    loadCustomers();
                    setOpen(false);
                    Toast.fire({icon: 'success', title: 'Customer Saved Successful..'});               
                  })
                .catch(   function (error)  {   console.log(error);     } );
  }

  function updateCustomer(){
      
      if(name.length===0){
          Toast.fire({icon: 'error', title: 'Name cant be empty'});
        return
      }

      var num = /^[0-9]+$/;
      if(contact.length===0){
        Toast.fire({icon: 'error', title: 'Contact no cant be empty'});
       return
      }else{

        if(!contact.match(num)){
            Toast.fire({icon: 'error', title: 'Contact no Invalid Format'});
            return
          }
      }

      if(salary.length===0){
        Toast.fire({icon: 'error',title: 'Salary cant be empty' });
        return
      }else{
        if(!salary.match(num)){
              Toast.fire({icon: 'error', title: 'Salary  Invalid Format'});
              return
        }
      }

         const data = {
            name:name,
            contact:contact,
            salary: salary
        }
         
      instance.put(`/customer/${obj.id}` ,data)   
         .then(    function (response) {
            loadCustomers();
            setOpen(false);
            Toast.fire({icon: 'success', title: 'Customer updated Successful..'});   
          } )
         .catch(   function (error)  {   console.log(error);     } );
  }

  return (
    <>
    <div>
        {content}
        <Dialog
          open={open}
          onClose={()=>{setOpen(false);}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description" >

          <DialogTitle textAlign={'center'} id="alert-dialog-title">
               {action==="update" ? <>{"Update Customer"}</> : <> {"Add New Customer"} </>}
          </DialogTitle>

          <DialogContent>
               <Box>
                  <Box onClick={()=>{inputRef.current.click();}}>
                       {selectedImage ? 
                          <Avatar
                              alt="Remy Sharp"
                              src={URL.createObjectURL(selectedImage)}
                              sx={{ width: 100, height: 100 }}
                          /> : 
                          <Avatar
                              alt="Remy Sharp"
                              src={"http://127.0.0.1:8000/"+obj.image} 
                              sx={{ width: 100, height: 100 }}
                            />
                         }
                      <input type='file' ref={inputRef} style={{display:"none"}} onChange={(val)=>{setSelectedImage(val.target.files[0])}}></input>
                  </Box>
                 
                  <TextField
                      margin='normal'
                      fullWidth
                      id="filled-basic"
                      label="Name"
                      variant="filled"
                      value={name}
                      onChange={(val)=>{setName(val.target.value)}}
                  />

                  <TextField
                      margin='normal'
                      fullWidth
                      id="filled-basic"
                      label="Contact"
                      variant="filled"
                      value={contact}
                      onChange={(val)=>{setContact(val.target.value)}}
                  />
                  
                  <TextField
                      margin='normal'
                      fullWidth
                      id="filled-basic"
                      label="Salary"
                      variant="filled"
                      value={salary}
                      onChange={(val)=>{setSalary(val.target.value)}}
                  />
                  
                  {action==='add' ?  
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
                    
                      <Button onClick={()=>{setAddressArray([...addressArray,{address:address}])}}> Add </Button>

                    {addressArray.map((add,index)=>(
                      <>
                        <Typography variant="h5" gutterBottom>
                          {add.address}
                        </Typography>
                      </>))}
                  </Box>
                 : <></>}
              </Box>

          </DialogContent>

          <DialogActions sx={{display:'flex' , justifyContent:'center'}}>
            {action === 'update' ? <><AppButton width={200} name='Update' clickEvent={()=>{updateCustomer()}}/></> : <><AppButton width={200} name='Add' clickEvent={()=>{addCustomer()}} /></>}
            <AppButton width={200} name='Cancel' clickEvent={()=>{setOpen(false)}}/>
          </DialogActions>

        </Dialog>
    </div>
  
  </>
  )
}
