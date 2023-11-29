import React from 'react'
import SaveCustomer from '../../components/savecustomer/savecustomer'
import CustomerTable from '../../components/customertable/customertable';
import Avatar from '@mui/material/Avatar';
import { Box, Button } from '@mui/material'
import { useState , useEffect} from 'react';
import axios from 'axios';
import ViewAddress from '../../components/viewaddress/viewaddress';
import instance from '../../services/AxiosOrder';

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
    
  }
];

export default function CustomerView() {

  const [customerRaws,setRaws] = useState([])

  function loadCustomers(){

    instance.get('/customer')
            .then(function (response) { 
 
              const customersData = response.data.customer;
              const array = [];
              customersData.forEach((val)=>{

                array.push({
                    
                    id:val.id,
                    name:val.name,
                    contact:val.contact,
                    address:<><ViewAddress id={val.id}/></>,
                    salary:val.salary,
                    
                    profilePic:<><Avatar src={"http://127.0.0.1:8000/storage/"+val.image} /></>,
                    
                  }) 
             
              } )
            
              setRaws(array);
            
            })
            .catch(   function (error)  {   console.log(error);     } )
            .finally( function () {  } );
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div>
       <Box sx={{display:'flex', justifyContent:'end'}}>
            <SaveCustomer loadCustomers={()=>{loadCustomers()}} />
       </Box>

       <Box sx={{marginTop:2}}>
          <CustomerTable columns={columns} rows={customerRaws}/>
       </Box>
  
    </div>
  )
}
