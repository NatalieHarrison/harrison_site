import { DataStore } from '@aws-amplify/datastore';

import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'; 
import {
  ReviewsCreateForm 
 } from '../ui-components';


function ReviewComp(){
  return(
    <Box>
      <ReviewsCreateForm
    onSubmit={(fields) => {
        // Example function to trim all string inputs
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }}
/>
      
    </Box>


  )
}
export default ReviewComp;