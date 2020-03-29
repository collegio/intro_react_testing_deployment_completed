import React from 'react';
import PlayersList from './PlayersList';
import PlayersListFilters from './PlayersListFilters';

const FreeAgentDashboardPage = (props) => (
    <div className="container">
        <PlayersListFilters />
        <PlayersList />
    </div>
);

export default FreeAgentDashboardPage;