import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducer/auth.js';
import articleReducer from './reducer/article.js';
import logger from '../middleware/logger.js';
import validator from '../middleware/validator.js';

const appReducer = combineReducers({
  authState: authReducer,
  articleState: articleReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk, logger, validator))
);
