import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArticlesRec from '../../components/Results/ArticlesRec';
import BookRec from '../../components/Results/BookRec';
import YoutubeRec from '../../components/Results/YoutubeRec';
import Typography from '@mui/material/Typography';

export default function ResultsPage() {
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
               Articles For You
              </Typography>
              <ArticlesRec />
                   
                  </Grid>

                  <Grid key='1' item>
                  <Typography variant="h5" component="div" gutterBottom>
        Books For You
      </Typography>
                  <BookRec />
            </Grid>


            <Grid key='2' item>
            <Typography variant="h5" component="div" gutterBottom>
        Videos For you
      </Typography>
              <YoutubeRec/>
            </Grid>           
        </Grid>
      </Grid>
      
    </Grid>
  );
}
