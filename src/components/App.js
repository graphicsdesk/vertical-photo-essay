import React from 'react';
import archieml from 'archieml';
import copyString from '../copy';

import Graphic from './Graphic';

const { header, slides } = archieml.load(copyString);

const App = () => (
  <div>
    <Graphic slides={slides} header={header} />
  </div>
);

export default App;
