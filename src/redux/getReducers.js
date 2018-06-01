import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import images from './images/reducer';

export const reducersMap = {
    routing: routerReducer,
    images
};

export default function() {
    return combineReducers(reducersMap);
}