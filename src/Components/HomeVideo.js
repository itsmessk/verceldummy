import React from 'react';
import { motion } from 'framer-motion';

const VideoComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }} 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <motion.video
        src="./infoziant-video.mp4" 
        controls
        style={{
          width: '80%',
          borderRadius: '15px',
        }}
      />
    </motion.div>
  );
};

export default VideoComponent;
