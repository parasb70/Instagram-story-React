import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import StoryProgressBar from './components/StoryProgressBar.js';
import Grid from '@mui/material/Grid';

export default function App() {
  const [time, setTime] = useState(new Date());
  const [redTimer, setRedTimer] = useState(0);
  const [blueTimer, setBlueTimer] = useState(0);
  const [greenTimer, setGreenTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (redTimer >= 0 && redTimer <= 100) {
      setRedTimer(redTimer + 1);
      document.body.style.backgroundColor = 'red';
    }
    if (blueTimer > 0 && blueTimer < 100) {
      setBlueTimer(blueTimer + 1);
      document.body.style.backgroundColor = 'blue';
    }
    if (greenTimer > 0 && greenTimer < 100) {
      setGreenTimer(greenTimer + 1);
      document.body.style.backgroundColor = 'green';
    }
    if (redTimer == 100) {
      setBlueTimer(blueTimer + 1);
      document.body.style.backgroundColor = 'blue';
    }
    if (blueTimer == 100) {
      setGreenTimer(greenTimer + 1);
      document.body.style.backgroundColor = 'green';
    }
    if (greenTimer == 100) {
      setRedTimer(0);
      setBlueTimer(0);
      setGreenTimer(0);
    }
    const interval = setInterval(() => {
      setTime(new Date());
    }, 100);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          <StoryProgressBar progress={redTimer} />
        </Grid>
        <Grid item xs={4}>
          <StoryProgressBar progress={blueTimer} />
        </Grid>
        <Grid item xs={4}>
          <StoryProgressBar progress={greenTimer} />
        </Grid>
      </Grid>
    </>
  );
}
