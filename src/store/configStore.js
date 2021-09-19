import { createStore, combineReducers } from 'redux';
import activitiesReducer from '../reducers/activities';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            activities: activitiesReducer,
            filters: filtersReducer
        })
    );

    return store;
}