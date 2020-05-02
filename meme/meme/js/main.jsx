
import React from 'react';
import ReactDOM from 'react-dom';
import SearchObj from './search';


// This method is only called once
ReactDOM.render(
  <SearchObj url="/search/" />,
  document.getElementById('reactEntry'),
);