import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import AppButton from '../../common/button/button';
import { Link } from 'react-router-dom';
import Toast from '../../common/alert/alert';

export default function Register() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pword,setPword] = useState('')
    const [confirmPword,setConfirmPword] = useState('')

    function registerHandling(){
        
        if (name.length===0){
                Toast.fire({
                icon: 'error',
                title: 'Please Enter the Name'
              });
            return
          }
        

        if (email.length===0){
            Toast.fire({
            icon: 'error',
            title: 'Please Enter the Email'
          });
         return
        }

        if (pword.length===0){
            Toast.fire({
            icon: 'error',
            title: 'Please Enter the Password'
          });
         return
        }

        if (confirmPword.length===0){
            Toast.fire({
            icon: 'error',
            title: 'Please Re-Enter the Password'
          });
         return
        }

        
    }


  return (
    <div>
        <Box sx={{height:'100vh',backgroundColor:'white' , display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card sx = {{ borderRadius:5, maxWidth: 400 , maxHeight:550 ,backgroundColor:'rgb(189, 208, 251)',padding:4}}>
  
                <CardContent>
                    <Box textAlign = {'center'}>

                        <Typography gutterBottom variant = "h5" component = "div">
                            Registration
                        </Typography>

                        <TextField
                            sx={{backgroundColor:'white'}}
                            margin = 'normal'
                            fullWidth
                            id      = "filled-basic"
                            label   = "Name"
                            variant = "filled"
                            onChange={(val)=>{setName(val.target.value)}}
                        />

                        <TextField
                            sx={{backgroundColor:'white'}}
                            margin = 'normal'
                            fullWidth
                            id      = "filled-basic"
                            label   = "Email"
                            variant = "filled"
                            onChange={(val)=>{setEmail(val.target.value)}}
                        />

            
                        <TextField
                            sx={{backgroundColor:'white'}}
                            margin='normal'
                            fullWidth
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={(val)=>{setPword(val.target.value)}}

                        />

                        <TextField
                            sx={{backgroundColor:'white'}}
                            margin='normal'
                            fullWidth
                            id="filled-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={(val)=>{setConfirmPword(val.target.value)}}

                        />
                    </Box>

                   
                </CardContent>

                <CardActions sx={{display:'flex',justifyContent:'center'}}>
                    <AppButton clickEvent={()=>{registerHandling()}} clr={'rgb(65,67,229)'} name='Register' width={370}/>
                </CardActions>
                <hr/>
                
                <Box sx={{display:'flex', justifyContent:'end',marginTop:3}}>
                    <Typography variant="subtitle1" gutterBottom>
                        Already have an account ? <Link to={"/login"}>Login</Link>   
                    </Typography>
                </Box>
 
            </Card>
        </Box >
              
    </div>
  )
}
