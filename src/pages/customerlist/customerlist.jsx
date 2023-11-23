import React, { useState } from 'react'
import { useEffect } from 'react';
import CustomerTable from '../../components/customertable/customertable';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';

import axios from 'axios';
import SaveCustomer from '../../components/savecustomer/savecustomer';

import Swal from "sweetalert2"
import ViewAddress from '../../components/viewaddress/viewaddress';
import AddAddress from '../../components/addaddress/addaddress';


const columns = [

    { id: 'profilePic',
      label: 'Profile Pic',
      minWidth: 170 
    },
    { id: 'name',
      label: 'Name',
      minWidth: 170 
    },

    { id: 'contact',
      label: 'Contact',
      minWidth: 100 
    },
    
    {
      id: 'salary',
      label: 'Salary',
      minWidth: 170,
      align: 'center',
      
    },

    {
      id: 'address',
      label: 'Address',
      minWidth: 170,
      align: 'center',
      
    },
    
    {
      id: 'action',
      label: 'Action',
      minWidth: 170,
      align: 'center',

      
    }
    
  ];


 
const dummyCustomersArray = [

    {
        id:1,
        name:'Prasad',
        contact:'0770826701',
        address:'Katuneriya',
        salary:20000,
        profilePic:<><Avatar src="" /></>,
        action:
            <>
                <IconButton onClick={()=>{}} aria-label="delete"> <UpgradeIcon />  </IconButton>
                <IconButton onClick={()=>{}} aria-label="delete"> <DeleteIcon/>  </IconButton>
            </>
               
    },
    {
        id:2,
        name:'Kasun',
        contact:'0770826701',
        address:'Katuneriya',
        salary:20000,
        profilePic:<><Avatar src="" /></> ,
        action:
            <>
                <IconButton onClick={()=>{}} aria-label="delete"> <UpgradeIcon />  </IconButton>
                <IconButton onClick={()=>{}} aria-label="delete"> <DeleteIcon/>  </IconButton>
            </>     
    },
    {
        id:3,
        name:'Isuru',
        contact:'0770826701',
        address:'Katuneriya',
        salary:20000,
        profilePic:<><Avatar src="" /></>,
        action:
            <>
                <IconButton onClick={()=>{}} aria-label="delete"> <UpgradeIcon />  </IconButton>
                <IconButton onClick={()=>{}} aria-label="delete"> <DeleteIcon/>  </IconButton>
            </>      
    }
]

export default function CustomerList() {
    
    const [customerRaws,setRaws] = useState([])

    function loadCustomers(){

      axios.get('http://127.0.0.1:8000/api/customer')
              .then(    function (response) { 
                
                const customersData = response.data.customer;
                const array = [];
                customersData.forEach((val)=>{
  
                  array.push({
                      
                      id:val.id,
                      name:val.name,
                      contact:val.contact,
                      address:
                      <>
                          <Box sx={{display:'flex' , justifyContent:'center'}}>
                              <ViewAddress id={val.id}/>
                              <AddAddress loadCus={()=>{loadCustomers();}} id={val.id}/>
                          </Box>
                     </>,
                      salary:val.salary,
                      profilePic:<><Avatar src={val.image} /></>,
                      action:
                      <>
                          <Box sx={{display:'flex' , justifyContent:'center'}}>
                              <SaveCustomer loadCustomers={()=>{loadCustomers();}} action='update' obj={val}/>
                              <IconButton onClick={()=>{deleteCustomer(val.id)}} aria-label="delete"> <DeleteIcon/>  </IconButton>
                          </Box>
                          
                      </>  
                      
                    }) 
               
                } )
              
                setRaws(array);
              
              })
              .catch(   function (error)  {   console.log(error);     } )
              .finally( function () {  } );
    }

    function deleteCustomer(id){


      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
    
          axios.delete(`http://127.0.0.1:8000/api/customer/${id}`)
                .then(    function (response) { 
                  loadCustomers();
                  Toast.fire({
                    icon: 'success',
                    title: 'Customer Ddelet Sucessful..'
                  });  
                } )
                .catch(   function (error)  {   console.log(error);     } );
    
        }
      })
    
    }
    
    useEffect(() => {
       loadCustomers()
    }, []);


  return (
    <div>
        <CustomerTable columns={columns} rows={customerRaws}/>
    </div>
  )
}
