
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';


class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  };

  openDrawer() {
    this.setState((prevState, props) => ({
      ...prevState,
      drawer: true,
    }));
  }
  closeDrawer() {
    this.setState((prevState, props) => ({
      ...prevState,
      drawer: false,
    }));
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <AppHeader
          openDrawer={this.openDrawer}
        />
        <AppDrawer
          open={this.state.drawer}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
        />
        {children}
      </div>
    );
  }
}

export default AppLayout;
