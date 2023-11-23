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
import Toast from '../../common/alert/alert';

export default function SaveCustomer({action='add',loadCustomers, obj = {
          name:'',
          contact:'',
          address:'',
          salary:'',

}}) {

  const [open, setOpen] = useState(false);

  const [name,setName] = useState(obj.name);
  const [contact,setContact] = useState(obj.contact);
  const [address,setAddress] = useState(obj.address);
  const [salary,setSalary] = useState(obj.salary);

  const navigate = useNavigate();

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
           Toast.fire({
            icon: 'error',
            title: 'Name cant be empty'
          });
        return
      }

      var num = /^[0-9]+$/;
      if(contact.length===0){

        Toast.fire({
            icon: 'error',
            title: 'Contact no cant be empty'
          });
        
        return
      }else{
        if(!contact.match(num)){
       
            Toast.fire({
                icon: 'error',
                title: 'Contact no Invalid Format'
              });
            return

        }
      }

      if(salary.length===0){

        Toast.fire({
            icon: 'error',
            title: 'Salary cant be empty'
          });
        
        return
      }else{
        if(!salary.match(num)){
       
            Toast.fire({
                icon: 'error',
                title: 'Salary  Invalid Format'
              });
            return
        }
      }

          const data = {
          name:name,
          contact:contact,
          salary: salary
        }
        axios.post('http://127.0.0.1:8000/api/customer' ,data)   
            .then(    function (response) { 
                loadCustomers();
                setOpen(false);
                Toast.fire({
                  icon: 'success',
                  title: 'Customer Saved Successful..'
                });               
            
              } )
            .catch(   function (error)  {   console.log(error);     } );
  }

  function updateCustomer(){
      
      if (name.length===0){
        Toast.fire({
            icon: 'error',
            title: 'Name cant be empty'
          });
        return
      }

      var num = /^[0-9]+$/;
      if(contact.length===0){
        Toast.fire({
            icon: 'error',
            title: 'Contact no cant be empty'
          });
       return
      }else{
        if(!contact.match(num)){
            Toast.fire({
                icon: 'error',
                title: 'Contact no Invalid Format'
              });
            return
          }
      }

      if(salary.length===0){
        Toast.fire({
            icon: 'error',
            title: 'Salary cant be empty'
          });
        return
      }else{
        if(!salary.match(num)){
       
            Toast.fire({
                icon: 'error',
                title: 'Salary  Invalid Format'
              });
            return
        }
      }
         const data = {
            name:name,
            contact:contact,
            salary: salary
        }
      axios.put(`http://127.0.0.1:8000/api/customer/${obj.id}` ,data)   
         .then(    function (response) { 
            
            loadCustomers();
            setTimeout(()=>{
                navigate('/customerlist');
            },1500);  
            setOpen(false)

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
          aria-describedby="alert-dialog-description"
        >

          <DialogTitle textAlign={'center'} id="alert-dialog-title">
              
              {action==="update" ? <>{"Update Customer"}</> : <> {"Add New Customer"} </>}
          </DialogTitle>

          <DialogContent>
             
              <Box>
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
                  {/* <TextField
                      margin='normal'
                      fullWidth
                      id="filled-basic"
                      label="Address"
                      variant="filled"
                      value={address}
                      onChange={(val)=>{setAddress(val.target.value)}}
                  /> */}

              </Box>

          </DialogContent>

          <DialogActions sx={{display:'flex' , justifyContent:'center'}}>
            {action === 'update' ? <><AppButton width={200} name='Update' clickEvent={()=>{updateCustomer()}}/></> : <><AppButton width={200} name='Add' clickEvent={()=>{addCustomer()}} /></>}
          </DialogActions>

        </Dialog>
    </div>
  
  </>
  )
}
