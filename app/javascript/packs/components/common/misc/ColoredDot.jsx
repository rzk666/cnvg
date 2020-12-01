import React from 'react';

const getColor = (text) => {
  switch (text) {
    case 'yellow':
      return '#EBE783';
    case 'red':
      return '#F76A6D';
    case 'blue':
      return '#29668B';
    default:
      return '#29668B';
  }
};

const ColoredDot = ({ color, height = '25px', width = '25px' }) => (
  <div
    style={{
      background: getColor(color),
      height,
      width,
      borderRadius: '256px',
    }}
  />
);

export default ColoredDot;
