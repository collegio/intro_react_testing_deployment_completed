import React from 'react';

export class ActivityForm extends React.Component {

    constructor(props) {
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onActivityChange = this.onActivityChange.bind(this);
        this.onDistanceChange = this.onDistanceChange.bind(this);
        this.onSubmitActivity = this.onSubmitActivity.bind(this);

        this.state = {
            name: props.activity ? props.activity.name : '',
            activity_type: props.activity ? props.activity.activity_type : 'walking',
            distance: props.activity ? props.activity.distance : '0 km',
            error: ''
        }
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onActivityChange(e) {
        const activity_type = e.target.value;
        this.setState(() => ({ activity_type }));
    };

    onDistanceChange(e) {
        const distance = e.target.value;
        this.setState(() => ({ distance }));
    };

    onSubmitActivity(e) {
        e.preventDefault();

        if (!this.state.name) {

            // Error!
            this.setState(() => ({ error: 'Please enter a name first.' }));
        }
        else {

            // Remove the error and Submit!
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                activity_type: this.state.activity_type,
                distance: this.state.distance
            });
        }
    }

    render() {
        return (
            <div className="activity-form">
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmitActivity}>
                    <label>Name</label><br/>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} autoFocus />

                    <label>Sport</label><br/>
                    <select value={this.state.sport_type} onChange={this.onActivityChange}>
                        <option value="running">Running</option>
                        <option value="walking">Walking</option>
                        <option value="cycling">Cycling</option>
                        <option value="swimming">Swimming</option>
                    </select>

                    <label>Distance</label><br/>
                    <input type="text" placeholder="Name" value={this.state.distance} onChange={this.onDistanceChange} autoFocus />

                    <button className="button pull-right">Submit</button>
                </form>
            </div>
        );
    }
}

export default ActivityForm;