import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { addPlayer } from '../actions/players';

export class AddPlayerPage extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(player) {
        this.props.addPlayer(player);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Add a Player</h1>
                <PlayerForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPlayer: (player) => dispatch(addPlayer(player))
});

export default connect(undefined, mapDispatchToProps)(AddPlayerPage);