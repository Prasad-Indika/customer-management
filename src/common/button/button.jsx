import React from 'react'
import Button from '@mui/material/Button';

export default function AppButton({name='Name',clr,clickEvent,width,height=40,radius}) {
  return (
    <div>
          <Button
            sx={{margin:1, backgroundColor:clr,width:width,height:height,padding:1.5,borderRadius:radius}} 
            onClick={()=>{clickEvent()}}  
            variant="contained" >
              {name}
           </Button>       
    </div>
  )
}
