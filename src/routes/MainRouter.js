import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FreeAgentDashboardPage from '../components/FreeAgentDashboardPage';
import AddPlayerPage from '../components/AddPlayerPage';
import EditPlayerPage from '../components/EditPlayerPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const MainRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header>Free Agent Tracker</Header>
                <Switch>
                    <Route path="/" component={FreeAgentDashboardPage} exact={true} />
                    <Route path="/create" component={AddPlayerPage} exact={true} />
                    <Route path="/edit/:id/" component={EditPlayerPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default MainRouter;

// removed:

/*

                    <Route path="/players" component={PlayersListPage} exact={true} />
                    <Route path="/hockey/:playerid/" component={ViewHockeyPlayerPage} />
                    <Route path="/baseball" component={BaseballTracker} exact={true} />
                    <Route path="/baseball/:playerid/" component={ViewBaseballPlayerPage} />
                    <Route path="/about" component={AboutPage} exact={true} />

*/