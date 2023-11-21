import React from 'react'
import Button from '@mui/material/Button';

export default function AppButton({name='Name',clr,clickEvent,width}) {
  return (
    <div>
          <Button onClick={()=>{clickEvent()}}  sx={{backgroundColor:clr,width:width,padding:1.5}} variant="contained">{name}</Button>       
    </div>
  )
}
