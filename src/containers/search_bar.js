import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // When we use "this" in a callback function, "this" will have
    // the incorrect context. ---> so we bind "this"
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();

        // fetchWeather is available from mapDispatchToProps at bottom of file
        this.props.fetchWeather(this.state.term);
        // clear input after its submitted:
        this.setState({ term: "" });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group"> 
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    // this bindActionCreaters will give this component access to this.props.fetchWeather!!!
    return bindActionCreators({ fetchWeather }, dispatch);
}

// first argument expected to be mapPropsToState, so in this case we put in null
export default connect(null, mapDispatchToProps)(SearchBar);