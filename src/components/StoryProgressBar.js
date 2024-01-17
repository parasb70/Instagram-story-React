import React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const StoryProgressBar = ({ progress }) => {
  useEffect(() => {
    if (progress >= 100) {
      progress = 0;
    }
    progress = progress + 1;
  }, [progress]);
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default StoryProgressBar;
