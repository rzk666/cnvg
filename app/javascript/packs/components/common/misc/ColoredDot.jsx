import React from 'react';

const ColoredDot = ({ color, height = '25px', width = '25px' }) => (
  <div
    style={{
      background: color,
      height,
      width,
      borderRadius: '256px',
    }}
  />
);

export default ColoredDot;
