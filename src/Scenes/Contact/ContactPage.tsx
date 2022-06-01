import { Button, CardContent, Grid, TextField } from '@mui/material';
import React from 'react';
import emailjs from '@emailjs/browser';

import { getFormStyles, getSubmitButtonStyles } from './ContactPageStyles';
import { getMainStyles } from '../../styles/styles';

export const ContactPage: React.FC = () => {
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_q1t4xoj',
        'template_zcy7e1d',
        e.target,
        'EL7fkDD80gwfxcO1l'
      )
      .then((res) => {
        if (res.text === 'OK') {
          alert('Your message has been sent');
          window.location.href = '/';
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <main css={[getFormStyles, getMainStyles]}>
      <h2>Send me a message</h2>

      <CardContent>
        <form onSubmit={sendMail}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label='First name'
                name='name'
                placeholder='Enter your first name'
                variant='outlined'
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label='Last name'
                placeholder='Enter your last name'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type='email'
                label='Email'
                name='user-email'
                placeholder='Enter your Email'
                variant='outlined'
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type='number'
                label='Phone'
                name='phoneNumber'
                placeholder='Enter your phone number'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label='Message'
                multiline
                rows={4}
                name='message'
                placeholder='Type your message'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <Button
                css={getSubmitButtonStyles}
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </main>
  );
};
