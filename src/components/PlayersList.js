import React from 'react';
import { connect } from 'react-redux';
import PlayersListItem from './PlayersListItem';
import selectPlayers from '../selectors/players';

const PlayersList = (props) => (
    <div className="players-list">
        <h1>Players List</h1>
        <div className="player-list">
            {props.players.map((player) => {
                return <PlayersListItem key={player.id} {...player} />;
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        players: selectPlayers(state.players, state.filters)
    }
};

export default connect(mapStateToProps)(PlayersList);