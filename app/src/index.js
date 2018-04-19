import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store';
import reducers from './reducers';

import App from './components/App';
import './index.css';

const store = configStore(reducers);

ReactDOM.render (
	<Provider store = {store}>
		<App />
	</Provider>,
    document.getElementById("root")
);
