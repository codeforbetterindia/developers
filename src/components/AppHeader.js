import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet('AppHeader', {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

const AppHeader = (props) => {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="contrast"
            aria-label="Menu"
            onClick={props.openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Developers
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppHeader);
