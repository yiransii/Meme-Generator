
import React from 'react';
import ReactDOM from 'react-dom';
import SearchObj from './search';
import GenerateObj from './generate';

if (window.location.pathname == "/search/") {
    // This method is only called once
    ReactDOM.render(
        <SearchObj url="/search/" />,
        document.getElementById('reactEntry'),
    );
} else {
    ReactDOM.render(
        <GenerateObj url="/search/" />,
        document.getElementById('reactEntry'),
    );

}
