import React from 'react';
import ReactDOM from 'react-dom';

import App from   './App'

//Remember go in public->index.html their is a div with id "root" inside body so basically every line of code we right goes into this single depth of root, So what we are saying to actually include everything inside that root this is standard for every React based APP.
ReactDOM.render(<App />, document.querySelector('#root'));
