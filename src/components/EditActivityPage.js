import React from 'react';
import { connect } from 'react-redux';
import ActivityForm from './ActivityForm';
import { editActivity, removeActivity } from '../actions/activities';

export class EditActivityPage extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onSubmit(activity) {
        this.props.editActivity(this.props.activity.id, activity);
        this.props.history.push('/');
    }

    onRemove() {
        this.props.removeActivity({ id: this.props.activity.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Edit Activity</h1>
                <ActivityForm
                    activity={this.props.activity}
                    onSubmit={this.onSubmit}
                />
                <button className="button button-delete" onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        activity: state.activities.find((activity) => activity.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editActivity: (id, activity) => dispatch(editActivity(id, activity)),
    removeActivity: (data) => dispatch(removeActivity(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActivityPage);