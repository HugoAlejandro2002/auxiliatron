import React from 'react';
import Button from '@mui/material/Button';

const NumberButton = ({ value, onClick }) => {
  return (
    <Button variant="contained" onClick={() => onClick(value)}>
      {value}
    </Button>
  );
};

export default NumberButton;
