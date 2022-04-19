import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'


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

export default function AudioRecorder() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const audioDetailsStruct = {
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0
    }
  }

  const [audioDetails, setAudioDetails]= React.useState('');


function handleAudioStop(data){
    console.log(data)
    setAudioDetails(data)
    //this.setState({ audioDetails: data });
}

function handleAudioUpload(file) {
    console.log(file);
}

function handleCountDown(data) {
    console.log(data);
}

function handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    setAudioDetails(reset);
    //this.setState({ audioDetails: reset });
  }

  return (
    <Recorder
    record={true}
    title={"New recording"}
    audioURL={audioDetails.url}
    showUIAudio
    handleAudioStop={data => handleAudioStop(data)}
    handleAudioUpload={data => handleAudioUpload(data)}
    handleCountDown={data => handleCountDown(data)}
    handleReset={() => handleReset()}
    mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
/>
  );
}
