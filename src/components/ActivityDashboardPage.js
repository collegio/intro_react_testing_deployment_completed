import React from 'react';
import ActivitiesList from './ActivitiesList';
import ActivitiesListFilters from './ActivitiesListFilters';

export const ActivityDashboardPage = (props) => (
    <div className="container">
        <ActivitiesListFilters />
        <ActivitiesList />
    </div>
);

export default ActivityDashboardPage;