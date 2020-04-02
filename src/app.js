import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { setFilterText } from './actions/filters';
import { addPlayer } from './actions/players';
import { getPlayers } from './selectors/players';
import MainRouter from './routes/MainRouter';
import configStore from './store/configStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// create the Redux Store (using our imported store)
const store = configStore();

// store.dispatch(addPlayer({ name: 'Rob Myers', skill_level: 'basic', 'message': 'I like to have fun' }));
// store.dispatch(addPlayer({ name: 'Jane Doe', gender: 'Female', skill_level: 'expert', 'message': 'I am here to win.' }));
// store.dispatch(addPlayer({ name: 'Bill Williamson', sport_type: 'softball', skill_level: 'intermediate', 'message': 'I like to win and have fun!.' }));

axios.get('http://134.122.113.170/')
    .then((res) => {
        res.data.forEach((player) => {
            store.dispatch(addPlayer(player));
        });
    });

const appTemplate = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
);

ReactDOM.render(appTemplate, document.getElementById('app'));