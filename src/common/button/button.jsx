import React from 'react'
import Button from '@mui/material/Button';

export default function AppButton({name='Name',clr,clickEvent,width,radius}) {
  return (
    <div>
          <Button
            sx={{backgroundColor:clr,width:width,padding:1.5,borderRadius:radius}} 
            onClick={()=>{clickEvent()}}  
            variant="contained"
            
            >

              {name}
 
          </Button>       
    </div>
  )
}
