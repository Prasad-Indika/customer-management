import React, { useState } from 'react'
import { useEffect } from 'react';
import CustomerTable from '../../components/customertable/customertable';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';


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
      id: 'address',
      label: 'Address',
      minWidth: 170,
      align: 'center',
      
    },
    
    {
      id: 'salary',
      label: 'Salary',
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
    useEffect(() => {
       setRaws(dummyCustomersArray);
    }, []);


  return (
    <div>
        <CustomerTable columns={columns} rows={customerRaws}/>
    </div>
  )
}
