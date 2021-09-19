import React from 'react';
import { connect } from 'react-redux';
import ActivityForm from './ActivityForm';
import { addActivity } from '../actions/activities';

export class AddActivityPage extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(activity) {
        this.props.addActivity(activity);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Add a Activity</h1>
                <ActivityForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addActivity: (activity) => dispatch(addActivity(activity))
});

export default connect(undefined, mapDispatchToProps)(AddActivityPage);