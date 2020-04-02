import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { editPlayer, removePlayer } from '../actions/players';

export class EditPlayerPage extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onSubmit(player) {
        this.props.editPlayer(this.props.player.id, player);
        this.props.history.push('/');
    }

    onRemove() {
        this.props.removePlayer({ id: this.props.player.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Edit Player</h1>
                <PlayerForm
                    player={this.props.player}
                    onSubmit={this.onSubmit}
                />
                <button className="button button-delete" onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editPlayer: (id, player) => dispatch(editPlayer(id, player)),
    removePlayer: (data) => dispatch(removePlayer(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerPage);