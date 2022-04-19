import * as React from 'react';
import Grid from '@mui/material/Grid';
 
import Typography from '@mui/material/Typography';
import QuizMain from '../../components/QuizMain';

import Legends from '../../components/Analytics/Legends';

import { RadarChart } from '../../components/Analytics/RadarChart';
import { BubbleChart } from '../../components/Analytics/BubbleChart';
import {PolarChart} from '../../components/Analytics/PolarChart';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';
  import faker from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Activites +/-',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Positive',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negative',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
 
export default function AnalyticsPage() {


    
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
                    Mood Frequency
                </Typography>
              <PolarChart />                  
        </Grid>
             <Grid key='1' item>
                  <Typography variant="h5" component="div" gutterBottom>
                    Common Issues
                  </Typography>
                  <RadarChart />
             </Grid>
            <Grid key='2' item>
                 <Typography variant="h5" component="div" gutterBottom>
                    High Impact Tasks
                 </Typography>
                 <BubbleChart />
             </Grid>    
             <Grid key='3' item>
                 <Typography variant="h5" component="div" gutterBottom>
                    Total Activities
                 </Typography>
                 <Bar options={options} data={data} />
             </Grid>         
        </Grid>
      </Grid>
      
    </Grid>
  );
}
