import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, setFilterType, sortByName, sortBySkill } from '../actions/filters';

export class PlayersListFilters extends React.Component {

    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onSportTypeChange = this.onSportTypeChange.bind(this);
    }

    onTextChange(e) {
        this.props.setFilterText(e.target.value);
    }

    onSortChange(e) {
        if (e.target.value === "name") {
            this.props.sortByName();
        }
        else if (e.target.value === "skill_level") {
            this.props.sortBySkill();
        }
    }

    onSportTypeChange(e) {
        this.props.setFilterType(e.target.value);
    }

    render() {
        return (
            <div className="players-list-filters">
                <h2>Filter Players</h2>
                <div className="filter-group">
                    <label>Search For:</label><br />
                    <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                </div>
                <div className="filter-group">
                    <label>Sort By:</label><br />
                    <select onChange={this.onSortChange}>
                        <option value="name">Name</option>
                        <option value="skill_level">Skill Level</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Sport Type:</label><br />
                    <select onChange={this.onSportTypeChange}>
                        <option value="all">All</option>
                        <option value="hockey">Hockey</option>
                        <option value="baseball">Baseball</option>
                        <option value="softball">Softball</option>
                        <option value="basketball">Basketball</option>
                    </select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterText: (text) => dispatch(setFilterText(text)),
        setFilterType: (sport_type) => dispatch(setFilterType(sport_type)),
        sortByName: () => dispatch(sortByName()),
        sortBySkill: () => dispatch(sortBySkill()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersListFilters);