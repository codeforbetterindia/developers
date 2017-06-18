
import React, { Component } from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import AppLayout from './AppLayout';

const styleSheet = createStyleSheet('Home', {
  hero: {
    margin: '10px',
    minHeight: '80vh',
    backgroundImage: 'url("/public/photos/banner-2.png")',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
  }
});


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { classes } = this.props;

    return (
      <AppLayout>
        <Paper elevation={16} className={classes.hero}>
          <Typography type="display3" gutterBottom>
            Code for a Better India!
          </Typography>
          <Typography type="body1" gutterBottom>
            Let's Make World a Better Place Together.
          </Typography>
        </Paper>
      </AppLayout>
    );
  }
}

const temp = () => (
  <Card>
    <CardMedia>
      <img
        src="/public/photos/banner-1.png"
        alt="Code for a better India"
      />
    </CardMedia>
    <CardContent>
      <Typography type="headline" component="h2">
        Lizard
      </Typography>
      <Typography component="p">
        Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button compact color="primary">Share</Button>
      <Button compact color="primary">Learn More</Button>
    </CardActions>
  </Card>
)

export default withStyles(styleSheet)(Home);
