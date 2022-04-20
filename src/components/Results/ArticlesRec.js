import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import ComplexCard from '../ResultCard/ComplexCard';
import {articles} from './results'




function renderRow(props) {
  const { index, style } = props;
  const article = articles[index]; 
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
     <ComplexCard description={article.description} title={article.title}  imgUrl={article.imgUrl} more={article.more} avatar={article.avatar} subheader={article.subheader} date={article.date}/>
    </ListItem>
  );
}

export default function ArticlesRec() {
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={500}
        itemCount={3}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
