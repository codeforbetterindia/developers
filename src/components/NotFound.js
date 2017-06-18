
import React, { Component } from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import AppLayout from './AppLayout';

const styleSheet = createStyleSheet('NotFound', {
  container: {
    margin: '10px',
    minHeight: '80vh',
    backgroundImage: 'url("/public/photos/not-found.png")',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundOrigin: 'content-box',
    backgroundSize: 'cover',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

const NotFound = ({ classes }) => {
  return (
    <AppLayout>
      <Paper className={classes.container}>
        <Typography type="display3" gutterBottom>
          Error: 404
        </Typography>
        <Typography type="body1" gutterBottom>
          Page Not Found!
        </Typography>
      </Paper>
    </AppLayout>
  );
};

export default withStyles(styleSheet)(NotFound);
