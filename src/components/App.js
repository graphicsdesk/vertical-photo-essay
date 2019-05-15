import React from 'react';
import archieml from 'archieml';
import copyString from '../copy';

import Graphic from './Graphic';

const { copy } = archieml.load(copyString);

const App = () => (
  <div>
    <Graphic slides={copy} />
  </div>
);

export default App;
