import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import QuizMain from '../../components/QuizMain';
import Wizard from '../../components/Wizard';
import Results from '../../components/Results';
import Recom from '../../components/Results/Recom';
import BookRec from '../../components/Results/BookRec';
import YoutubeRec from '../../components/Results/YoutubeRec';
import ArticlesRec from '../../components/Results/ArticlesRec';
import AudioRecorder from '../../components/AudioRecorder';

import TreeMap from '../../components/Analytics/TreeMap';
import Legends from '../../components/Analytics/Legends';

import { RadarChart } from '../../components/Analytics/RadarChart';
import { BubbleChart } from '../../components/Analytics/BubbleChart';
import ResultsPage from '../ResultsPage';
import QuizPage from '../QuizPage';
import AnalyticsPage from '../AnalyticsPage';


export default function HomePage(){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

    const recomHandler = () => {
        
    }

    const analyticsHandler = () => {
        console.log("reached analyticsHandler");
    }

    const profileHandler = () => {
        console.log("reached profileHandler");
    }

    return(
        <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>            
          <Item><QuizPage /> </Item>
          <Item><AudioRecorder /> </Item>  
          <Item><ResultsPage /> </Item>
          <Item><AnalyticsPage /> </Item>       
        </Stack>
      </Box>
    );


}