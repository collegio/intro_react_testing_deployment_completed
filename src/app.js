import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { addActivity } from './actions/activities';
import MainRouter from './routes/MainRouter';
import configStore from './store/configStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// create the Redux Store (using our imported store)
const store = configStore();

// store.dispatch(addActivity({ name: 'Evening Run', activity_type: 'running', distance: '5 km' }));
// store.dispatch(addActivity({ name: 'Beach Swim', activity_type: 'swimming', distance: '1 km' }));
// store.dispatch(addActivity({ name: 'Walk with Dogs', activity_type: 'walking', distance: '2 km' }));

// axios.get('http://206.189.20.69/')
//     .then((res) => {
//         res.data.activities.forEach((activity) => {
//             store.dispatch(addActivity(activity));
//         });
//     });

const appTemplate = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
);

ReactDOM.render(appTemplate, document.getElementById('app'));