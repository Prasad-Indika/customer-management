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

import img from '../../assets/cusmng.jpg';

export default function AppLogin() {
    

    const [username,setUname] = useState('')
    const [pword,setPword] = useState('')
  
    function loginHandle(){
      
    }
      
    return (
  
      <div>
            <Box sx={{height:'100vh',backgroundColor:'white' , display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                
               
            <Card sx={{marginLeft:12,boxShadow:0}}>
                <CardMedia
                    component="img"
                    alt="Sample Image"
                    height="450"
                    image={img}
                />

              
            </Card>
  
                <Card sx = {{ borderRadius:5, maxWidth: 400 , maxHeight:450 , marginRight:15,backgroundColor:'rgb(189, 208, 251)',padding:4}}>
  
                    <CardContent>
                        <Box textAlign = {'center'}>
  
                            <Typography gutterBottom variant = "h5" component = "div">
                                CUSTOMER MANAGEMENT
                            </Typography>
  
                            <TextField
                                  sx={{backgroundColor:'white'}}
                                  margin = 'normal'
                                  fullWidth
                                  id      = "filled-basic"
                                  label   = "Username"
                                  variant = "filled"
                                  onChange={(val)=>{setUname(val.target.value)}}
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
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'end'}}>
                        <Typography marginTop={1} variant="body2" color="text.secondary">
                            Fogot Password.
                        </Typography>
                        </Box>
                        
                    </CardContent>
                    <CardActions sx={{display:'flex',justifyContent:'center'}}>
                        <AppButton clr={'rgb(65,67,229)'} name='Login' width={365}/>
                    </CardActions>
                    <hr/>
                    <Box sx={{display:'flex', justifyContent:'end',marginTop:3}}>
                    <Typography variant="subtitle1" gutterBottom>
                         Create New Account ? SignUp  
                    </Typography>
                    </Box>
                   
                </Card>
            </Box>
      </div>
         
    );
  
}