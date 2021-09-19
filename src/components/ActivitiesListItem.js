import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeActivity } from '../actions/activities';

export const ActivitiesListItem = ({ dispatch, id, name, activity_type, distance }) => (
    <div className="activity">
        <div className="activity-info">
            <p>
                <Link to={'/edit/'+id}>
                    {name}<br />
                </Link>
                {activity_type} - {distance}
            </p>
            <button className="button button-clear" onClick={() => {
                dispatch(removeActivity({ id }));
            }}>Remove</button>
        </div>
    </div>
);

export default connect()(ActivitiesListItem);