import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, setFilterType, sortByName, sortByDistance } from '../actions/filters';

export class ActivitiesListFilters extends React.Component {

    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onActivityTypeChange = this.onActivityTypeChange.bind(this);
    }

    onTextChange(e) {
        this.props.setFilterText(e.target.value);
    }

    onSortChange(e) {
        if (e.target.value === "name") {
            this.props.sortByName();
        }
        else if (e.target.value === "distance") {
            this.props.sortByDistance();
        }
    }

    onActivityTypeChange(e) {
        this.props.setFilterType(e.target.value);
    }

    render() {
        return (
            <div className="activities-list-filters">
                <h2>Filter Activities</h2>
                <div className="filter-group">
                    <label>Search For:</label><br />
                    <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                </div>
                <div className="filter-group">
                    <label>Sort By:</label><br />
                    <select onChange={this.onSortChange}>
                        <option value="name">Name</option>
                        <option value="distance">Distance</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Sport Type:</label><br />
                    <select onChange={this.onActivityTypeChange}>
                        <option value="all">All</option>
                        <option value="running">Running</option>
                        <option value="walking">Walking</option>
                        <option value="cycling">Cycling</option>
                        <option value="swimming">Swimming</option>
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
        setFilterType: (activity_type) => dispatch(setFilterType(activity_type)),
        sortByName: () => dispatch(sortByName()),
        sortByDistance: () => dispatch(sortByDistance()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesListFilters);