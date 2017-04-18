import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){ // we are not binding this because we are not using this in this event handler
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term : ''
    });
  }


  onInputChange(event){
    // this line will not work. This is bcz
    // react has one single event object that shares with all events.
    // by the time we log in the vlaue chances are the values might be changed.
    //console.log(this.refs.searchInput.value); // result might be undefined or null
    this.setState({
      term:event.target.value
    });
  }

  render(){
      return(
        <form onSubmit = {this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five day forecast in your favourite cities"
            className = "form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            ref ="searchInput"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
