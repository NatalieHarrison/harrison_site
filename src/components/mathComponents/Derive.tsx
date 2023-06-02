import { ButtonGroup, TextField, Button, Stack, Box, List, ListItem, FormControl, InputLabel,  MenuItem } from "@mui/material";
import React, { useState } from "react";
import { create, all } from "mathjs";
import Select,  { SelectChangeEvent } from '@mui/material/Select';


export const Derivative = () => {
    const math = create(all);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const [list, setList] = useState<string[]>([]);
  const [selectValue, setSelectValue] = React.useState(""); //used for button group: select component
  const [openInverse, setOpenInverse] = React.useState(false);

    //Used for button group: select component 
  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  const unHideInverse = () => {
    setOpenInverse((current) => !current);
  }
  const handleClick = () => {
    try {
      if (input === "" || input === undefined || input === null) {
        throw new Error("missing");
      }
      const ans = input + "=" + math.derivative(input,'x').toString();
      const newList = [...list, ans];
      setAnswer(ans);
      setList(newList);
      setInput("");
  }
  catch (err: any) {
    console.log(err);
    switch (err.message) {
      case "missing":
        alert("Input is empty. Please enter an expression.");
        break;
      // case `Undefined symbol ${input}`:
      //   alert("Variables cannot be defined here.");
      //   break;
      // default:
      //   break;
    }
  }
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
        <Box>
        <Box maxWidth="xs" sx={{ ml: 7, fontSize: 25 }}>
          <List>
            {list.map((lists) => (
              <ListItem key={lists.toString()} value={lists} />
            ))}
          </List>
        </Box>
        <Stack spacing={2} direction="row">
          <TextField
            id="equation"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained"  sx = {{backgroundColor: '#4699C2'}}>
            Derive
          </Button>
        </Stack>

        <Stack>
      <ButtonGroup sx = {{mt:2}}disableElevation variant="contained">
            <Button 
            onClick = {() => setInput(input + "π")}
            sx = {{
              width: 62.5,
              fontSize: 30, 
              backgroundColor: '#4699C2'
            }}>𝝅</Button>
            <Button 
            onClick = {() => setInput(input + "√()")}
            sx = {{
              width: 62.5,
              fontSize: 20,
              backgroundColor: '#4699C2'
            }}>√</Button>
            
            <Button 
            onClick = {() => setInput(input + "^")}
            sx = {{
              width: 62.5,
              fontSize: 20,
              backgroundColor: '#4699C2'
            }}>^</Button>
            <FormControl sx={{ width: 50 }}> 
            <InputLabel>&lt;</InputLabel>
            
            <Select
              value={selectValue}
              label= "&lt;"
              onChange={handleChange}
              sx = {{height: 65, width: 62.5}}
            >
              
              <MenuItem value={'<'} onClick = {() => setInput(input + "<")}   > &lt; </MenuItem>

              <MenuItem value = {"≤"} onClick = {() => setInput(input + "≤")}  
              sx = {{
                fontSize: 20
              }}> ≤ </MenuItem>

              <MenuItem value = {">"} onClick = {() => setInput(input + ">")}
               sx = {{
              }}> &gt;</MenuItem>

              <MenuItem value = {"≥"} onClick = {() => setInput(input + "≥")}
              sx = {{
                fontSize: 20
              }}> ≥ </MenuItem>  
              <MenuItem value = {"="} onClick = {() => setInput(input + "=")}
               sx = {{
                fontSize: 20
              }}> = </MenuItem>
            </Select>
            </FormControl>
      </ButtonGroup>

      
      <ButtonGroup sx = {{mt:.2, width: 250}}disableElevation variant="contained">
        <Button onClick = {() => setInput(input + "cos()")} sx = {{backgroundColor: '#4699C2'}}
          >cos</Button>

        <Button onClick = {() => setInput(input + "sin()")} sx = {{backgroundColor: '#4699C2'}}
          >sin</Button>

        <Button onClick = {() => setInput(input + "tan()")} sx = {{backgroundColor: '#4699C2'}}
          >tan</Button>

        <Button onClick = {unHideInverse} sx = {{backgroundColor: '#4699C2'}}> Inverse </Button>
        </ButtonGroup>
        {openInverse && (
            <div>
              <ButtonGroup sx = {{mt:.2, width: 250}}disableElevation variant="contained">
              <Button onClick = {() => setInput(input + "arccos()")} sx = {{backgroundColor: '#4699C2'}}
                >arccos</Button>

              <Button onClick = {() => setInput(input + "arcsin()")} sx = {{backgroundColor: '#4699C2'}}
                >arcsin</Button>

              <Button onClick = {() => setInput(input + "arctan()")} sx = {{backgroundColor: '#4699C2'}}
                >arctan</Button>
            </ButtonGroup>

            </div>
          )}

          {openInverse &&<Box/>}
      
      </Stack>
      </Box>

    );
}