import React from 'react';
// Animations
import { motion } from 'framer-motion';
// Components
import { Alert } from '@material-ui/lab';

const CustomAlert = ({ severity, message }) => (
  <motion.div
    key="Custom Alert"
    initial={{ opacity: 0, x: -100 }}
    animate={{ x: 40, opacity: 1 }}
    exit={{ opacity: 0, x: -700 }}
    style={{ position: 'fixed', bottom: '20px' }}
  >
    <Alert severity={severity}>{message}</Alert>
  </motion.div>
);

export default CustomAlert;
