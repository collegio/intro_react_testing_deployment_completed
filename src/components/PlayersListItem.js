import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePlayer } from '../actions/players';

const PlayersListItem = ({ dispatch, id, name, sport_type, skill_level, gender, message }) => (
    <div className="player">
        <div className="player-info">
            <p>
                <Link to={'/edit/'+id}>
                    {name} ({gender})<br />
                </Link>
                {sport_type} - {skill_level}<br /><br />
                {message}
            </p>
            <button className="button button-clear" onClick={() => {
                dispatch(removePlayer({ id }));
            }}>Remove</button>
        </div>
    </div>
);

export default connect()(PlayersListItem);