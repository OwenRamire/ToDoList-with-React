import React, { Component } from 'react';
import {activities} from '../utils/activities';
import ActivitiesUser from './ActivitiesUser';
import './styles/addToDoStyles.css';

class AddToDo extends Component {
  constructor() {
    super();
    this.state = {
      activity: '',
    };
    this.userType = this.userType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    this.showActivities();
  }

  userType = (e) => {
    this.setState({ activity: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    activities.push(this.state.activity);
    alert('added');
  };

  showActivities = () => {
    return (
      activities.map((act) => {
        return (
          <ActivitiesUser key={act} activity={act} />
        );
      })
    );
  }

  render() {
    return (
      <div className="AddToDoContainer">
        <h1 className="title">What are we going to do?</h1>
        <form className="formActivities">
          <label>
            Activity
            <input
              placeholder="Your activity"
              value={this.state.activity}
              className="activityInput"
              onChange={this.userType}
            ></input>
          </label>
          <button className="btnSubmit" onClick={this.onSubmit}>Add</button>
        </form>
        {this.showActivities()}
      </div>
    );
  }
}

export default AddToDo;
