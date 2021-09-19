import React from 'react';
import { connect } from 'react-redux';
import ActivitiesListItem from './ActivitiesListItem';
import selectActivities from '../selectors/activities';

export const ActivitiesList = (props) => (
    <div className="activities-list">
        <h1>Activities List</h1>
        <div className="activity-list">
            {props.activities.map((activity) => {
                return <ActivitiesListItem key={activity.id} {...activity} />;
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        activities: selectActivities(state.activities, state.filters)
    }
};

export default connect(mapStateToProps)(ActivitiesList);