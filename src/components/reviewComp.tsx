
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import {API, graphqlOperation} from 'aws-amplify'
import React, {Component} from 'react';

function ReviewComp(){
  // const handleSubmit =async (e) => {
  //   e.preventDefault()
  //   const {target} = e
  //   try{
  //     await API.graphql({
  //       query: createReview
  //     })
  //   }
    
  // }

 
   return(
    <Box>
      <form >
        <input placeholder='Name' name = "name"/>
        <input placeholder='Company' name ="company"/>
        <input placeholder='Comment' name ="comment"/>
        <Button variant = "contained">Submit</Button>
      </form>
      
      
    </Box>


  )
}
export default ReviewComp;