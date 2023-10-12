import React from 'react'
import Logo from '../assets/combined.png'
import {Stack, Button, ButtonGroup} from '@mui/material'
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <Stack direction="row" spacing={8}  className='enterbuttons' >
        <Button variant ='contained'>Sign Up</Button>
        <Button variant ='contained'>Login</Button>
      </Stack>
      
      <img src={Logo} className="applogo1" alt="logo" />

      
      <h1 className='blog'>Blogs for Students</h1>

      
      <Button variant ='contained' className='getstarted'>Get started now</Button>
    
    </div>
  )
}

export default Home