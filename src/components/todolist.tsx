import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { Icon } from '@mui/material';
import { useState } from 'react';

const ToDoList = () => {
  const [addTask, setAddTask] = useState(false)
  return (
    <div>
      <Box>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Typography>
          To-Do List
        </Typography>

        {!addTask &&(
           <Button onClick = {() => setAddTask(true)}>
           <AddIcon/> Add a task
         </Button>
        )}
       

        {addTask && (
          <Stack direction = "row" spacing = {2}>
          <TextField id ="outlined-basic" label = "Enter Task" variant='outlined'></TextField>
          <IconButton> <AddIcon/> </IconButton>
          </Stack>
        )}
        {/* <Checkbox /> */}
        </Stack>
      </Box>
    </div>
  )
}
export default ToDoList; 