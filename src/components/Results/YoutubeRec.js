import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import UIControlsCard from '../ResultCard/UIControlsCard';
import {videos} from './results'



function renderRow(props) {
  const { index, style } = props;
   const video = videos[index]; 
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
     <UIControlsCard name={video.snippet.title} artist={video.snippet.channelTitle} img={video.snippet.thumbnails.high.url} />
    </ListItem>
  );
}

export default function YoutubeRec() {
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={600}
        itemSize={200}
        itemCount={5}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
