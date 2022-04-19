import * as React from 'react';
import Grid from '@mui/material/Grid';
 
import Typography from '@mui/material/Typography';
import QuizMain from '../../components/QuizMain';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function QuizPage() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
              <Grid key='0' item>
                <Typography variant="h5" component="div" gutterBottom>
                    Start the Quiz
                </Typography>
              <QuizMain />                  
        </Grid>                   
        </Grid>
      </Grid>
      
    </Grid>
  );
}
