import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Icon, List, ListItem } from '@mui/material';
import { useState } from 'react';

const ToDoList = () => {
  const [addTask, setAddTask] = useState(false)
  const [input, setInput] = useState(""); //text field where user enters new task 
  const [task, setTask] = useState("")
  const [list, setList] = useState<string[]>([]);

  const handleClick = () => {
    const newList = [...list, input];
    setList(newList)
  }

  function ListItem(props: {
    value:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) {
    return <li>{props.value}</li>;
  }
  return (
    <div>
      <Box>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Typography>
          To-Do List
        </Typography>

    
          <List>
            {list.map((lists) => (
              <Box sx = {{mb: '10px'}}>
              <Paper elevation = {3} >
                <Stack direction = "row" justifyContent="baseline" alignItems="center" >
                  <Checkbox/>
                  <Box sx ={{mr: '10px'}}>
                    <ListItem key={lists.toString()} value={lists}/>
                  </Box>
                </Stack>
              </Paper>
              </Box>
              ))}
          </List>


        {!addTask &&(
           <Button onClick = {() => setAddTask(true)}>
           <AddIcon/> Add a task
         </Button>
        )}
       

        {addTask && (
          <Stack direction = "row" spacing = {2}>
          <TextField id ="outlined-basic" label = "Enter Task" variant='outlined' value = {input} onChange={(e) => setInput(e.target.value)}></TextField>
          <IconButton onClick = {handleClick}> <AddIcon/> </IconButton>
          </Stack>
        )}
        {/* <Checkbox /> */}
        </Stack>
      </Box>
    </div>
  )
}
export default ToDoList; 