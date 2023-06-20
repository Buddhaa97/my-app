import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './book-slice';

const rootReducer = combineReducers({
  book: bookReducer
});

export default rootReducer;
