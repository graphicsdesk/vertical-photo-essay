import React from 'react';
import archieml from 'archieml';
import copyString from '../copy';

import Graphic from './Graphic';
// import Header from './Header';

const { slides } = archieml.load(copyString);

const App = ({ classes }) => {
  return (
    <div className={classes.App}>
      <Graphic slides={slides} />
    </div>
  );
};

export default App;
