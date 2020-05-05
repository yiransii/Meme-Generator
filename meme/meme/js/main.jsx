
import React from 'react';
import ReactDOM from 'react-dom';
import SearchObj from './search';
import GenerateObj from './generate';

if (window.location.pathname == "/search/") { 
    // if it is the search page
    ReactDOM.render(
        <SearchObj url="/search/" />,
        document.getElementById('reactEntry'),
    );
} else { 
    // if it is the generate page
    ReactDOM.render(
        <GenerateObj url="/search/" />,
        document.getElementById('reactEntry'),
    );

}
