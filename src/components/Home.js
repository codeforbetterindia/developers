
import React, { Component } from 'react';

import AppLayout from './AppLayout';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <AppLayout>
        This is home.
      </AppLayout>
    );
  }
}

export default Home;
