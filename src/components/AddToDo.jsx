import React, { Component } from 'react';
import {activities} from '../utils/activities';
import ActivitiesUser from './ActivitiesUser';
import ActivityInput from './ActivityInput';
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
    if (this.state.activity === '') {
      alert('Type an activity');
    } else {
      activities.push(this.state.activity);
      alert('added');
      this.setState({ activity: '' });
    }
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
          <ActivityInput onChange={this.userType} value={this.state.activity} emptyInput={this.state.isInputEmpty}/>
          <button className="btnSubmit" onClick={this.onSubmit}>Add</button>
        </form>
        {this.showActivities()}
      </div>
    );
  }
}

export default AddToDo;
