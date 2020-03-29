import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { addPlayer } from '../actions/players';

const AddPlayerPage = (props) => (
    <div className="container">
        <h1>Add a Player</h1>
        <PlayerForm 
            onSubmit={(player) => {
                props.dispatch(addPlayer(player));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddPlayerPage);