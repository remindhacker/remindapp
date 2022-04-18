import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

export default function Quiz() {
    
  const [state, setState] = React.useState({
    depression: true,
    anxiety: false,
    ptsd: false,
    schizophrenia: false,
    addiction: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePopup  = (event) =>{
        
  }

  const { depression, anxiety, ptsd,schizophrenia,addiction } = state;
  const error = [depression, anxiety, ptsd,schizophrenia,addiction].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={depression} onChange={handleChange} name="depression" />
            }
            label="Depression"
          />
          <FormControlLabel
            control={
              <Checkbox checked={anxiety} onChange={handleChange} name="anxiety" />
            }
            label="Anxiety"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ptsd} onChange={handleChange} name="ptsd" />
            }
            label="Post Traumatic Stress Disorder (PTSD)"
          />
          <FormControlLabel
            control={
              <Checkbox checked={schizophrenia} onChange={handleChange} name="schizophrenia" />
            }
            label="Schizophrenia"
          />
          <FormControlLabel
            control={
              <Checkbox checked={addiction} onChange={handleChange} name="addiction" />
            }
            label="Addiction"
          />          
        </FormGroup>
        <FormHelperText>Be open</FormHelperText>
        <Button onClick={handlePopup}>ReMind</Button>
      </FormControl>
     
    </Box>
  );
}
