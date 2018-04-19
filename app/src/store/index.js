import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

const configStore = reducers => {
	const middleware = applyMiddleware(logger);
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		reducers,
		composeEnhancers(middleware)
	);
	return store;
}

export default configStore;