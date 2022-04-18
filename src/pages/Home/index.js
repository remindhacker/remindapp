import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
 import QuizMain from '../../components/QuizMain';

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
          <Item><button onClick={recomHandler}>Get Recommendations</button></Item>
          <Item><button onClick={analyticsHandler}>Analytics</button></Item>
          <Item><button onClick={profileHandler}>Profile</button></Item>
          <Item><QuizMain /> </Item>
        </Stack>
      </Box>
    );


}