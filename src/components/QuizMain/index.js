import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Quiz from 'react-quiz-component';
import { quiz, depressionQuiz , anxietyQuiz , schizophreniaQuiz, ptsdQuiz , impairmentQuiz , addictionQuiz } from './quiz';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Wizard from '../Wizard';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function QuizMain() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

   

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const [value, setValue] = React.useState('anxiety');
  const [selectedProblems, setSelectedProblems] = React.useState(anxietyQuiz);
  const theme = useTheme();


  const handleQuizMaker = () => {
     if(value==="anxiety")
      setSelectedProblems(anxietyQuiz)
    else if(value==="depression")
     setSelectedProblems(depressionQuiz)
    else if(value==="ptsd")
     setSelectedProblems(ptsdQuiz)
    else if(value==="addiction")
     setSelectedProblems(addictionQuiz)
     else if(value==="impairment")
     setSelectedProblems(impairmentQuiz)
    else
     setSelectedProblems(schizophreniaQuiz)
     
   };
   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleChangeRadio = (event) => {
     setValue(event.target.value);
     handleQuizMaker()
    
   };

   

   return (

    <div>
       <Button onClick={handleClickOpen('body')}>Launch Quiz</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth='800'
        maxWidth='800'      
        fullScreen="true"
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Start</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
           
            <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Quiz | Mental Health Check
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          </Typography>

          <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Pick a Category</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="anxiety"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="anxiety"  control={<Radio onChange={handleChangeRadio}/>} label="Anxiety" />
                  <FormControlLabel value="depression" control={<Radio  defaultChecked onChange={handleChangeRadio}/>} label="Depression" />
                  <FormControlLabel value="ptsd" control={<Radio onChange={handleChangeRadio}/>} label="PTSD" />
                  <FormControlLabel value="impairment" control={<Radio onChange={handleChangeRadio}/>} label="Impairment" />
                  <FormControlLabel value="addiction" control={<Radio onChange={handleChangeRadio}/>} label="Addiction" />
                  <FormControlLabel value="schizophrenia" control={<Radio onChange={handleChangeRadio}/>} label="Schizophrenia" />
                </RadioGroup>
                <Quiz quiz={selectedProblems}/>   
              </FormControl>                    
          </Box>
 
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Evaluate</Button>
        </DialogActions>
      </Dialog>
    </div>


     
  );
}
