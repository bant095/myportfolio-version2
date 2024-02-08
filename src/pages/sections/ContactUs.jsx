import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactUs = () => {
  return (
    <section
      id='contact'
      className='flex flex-col lg:gap-6 gap-3 text-center text-white'
    >
      <h2 className='text-center text-3xl font-bold '>CONTACT</h2>
      <Box
        component='form'
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '30%',
            border: 'white',
            color: 'white',
          },
        }}
        noValidate
        autoComplete='off'
        className='flex flex-col items-center justify-center'
      >
        <TextField
          id='name'
          label='Enter Your Name'
          multiline
          maxRows={4}
          variant='filled'
          required
          className='bg-white'
        />

        <TextField
          id='email'
          label='Enter Your Email Address'
          variant='filled'
          required
          className='bg-white'
        />
        <TextField
          id='subject'
          label='Subject'
          variant='filled'
          required
          className='bg-white'
        />

        <TextField
          id='text'
          label='Message'
          multiline
          rows={4}
          variant='filled'
          required
          className='bg-white'
        />

        <button className='bg-hoverColor p-2 w-[30px]' onClick={() => {}}>
          Submit
        </button>
      </Box>
    </section>
  );
};

export default ContactUs;
