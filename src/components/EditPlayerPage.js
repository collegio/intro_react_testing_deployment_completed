import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { editPlayer, removePlayer } from '../actions/players';

const EditPlayerPage = (props) => {
    return (
        <div className="container">
            <h1>Edit Player</h1>
            <PlayerForm
                player={props.player}
                onSubmit={(player => {
                    props.dispatch(editPlayer(props.player.id, player));
                    props.history.push('/');
                })}
            />
            <button className="button button-delete" onClick={() => {
                props.dispatch(removePlayer({ id: props.player.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditPlayerPage);