import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import HomeIcon from 'material-ui-icons/Home';
import PhoneIcon from 'material-ui-icons/Phone';
import GolfCourseIcon from 'material-ui-icons/GolfCourse';
import PeopleIcon from 'material-ui-icons/People';
import WbSunnyIcon from 'material-ui-icons/WbSunny';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

const styleSheet = createStyleSheet('AppDrawer', {
  list: {
    width: 250,
    flex: 'initial',
  },
});

const AppDrawer = ({ open, closeDrawer, classes }) => {
  return (
    <Drawer
      open={open}
      onRequestClose={closeDrawer}
      onClick={closeDrawer}
    >
      <List className={classes.list}>
        <ListItem button>
          <ListItemText
            primary="Code for Better India"
            secondary="Developers Community"
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            primary="About Us"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GolfCourseIcon />
          </ListItemIcon>
          <ListItemText
            primary="Vision & Mission"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText
            primary="Contact Us"
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(AppDrawer);
