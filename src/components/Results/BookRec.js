import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import SuppActionsCard from '../ResultCard/SuppActionsCard';
import { Axios } from 'axios';
import {books} from './results'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function renderRow(props) {
  const { index, style } = props;
  const book = books[index]; 
  const desc = book.volumeInfo.description.substring(0,250)
  return (
      
    <ListItem style={style} key={index} component="div" disablePadding>
       <SuppActionsCard eTag={book.volumeInfo.maturityRating} imgUrl={book.volumeInfo.imageLinks.thumbnail} desc = {desc} publisher={book.volumeInfo.publisher} />       
    </ListItem>
  );
}

let booksToDisplay = [];
let fetchedBooks = [];

// function for google books api fetch
function fetchBooks(searchTerm) {   
  // currently grabs a lot of academic books, want to get rid of those eventually I think
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
   fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
   
};


export default function BookRec() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + "depression";   
  
console.log(books)
  const [comments,setComments]=useState([])
  useEffect(() => {
    fetchComments();
  }, [])
  useEffect(() => {
    console.log("tatti ::::   " + comments)
  }, [comments])

  const fetchComments=async()=>{
    const response = await Axios("https://www.googleapis.com/books/v1/volumes?q=" + "depression");
    console.log("response ::::   " +response.data)
    setComments(response.data)    
  }

  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >

{renderRow}
      <FixedSizeList
        height={400}
        width={400}
        itemSize={800}
        itemCount={3}
        overscanCount={3}
      >
       {renderRow}
      </FixedSizeList>
    </Box>
  );
}
