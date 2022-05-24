import { Card, CardContent, Grid, TextField } from '@mui/material';
import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <main>
      <h1>Contact page</h1>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label='First name'
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
                placeholder='Type your message'
                variant='outlined'
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </main>
  );
};
