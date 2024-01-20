import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonMain = ({ text }) => {
  return (
    <Stack>
      <Button variant='contained'>{text}</Button>
    </Stack>
  );
};

export default ButtonMain;
