import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/activitiesUserStyles.css';

const ActivitiesUser = (props) => {
  const { activity } = props;
  return (
    <div className="activityContainer">
      <div className="userActivityContainer">
        <p className="userActivity">{activity}</p>
      </div>
      <div className="iconsContainer">
        <FontAwesomeIcon icon={faTimes} className="fontAwesomeIcons deleteIcon" />
        <FontAwesomeIcon icon={faCheck} className="fontAwesomeIcons checkIcon" />
      </div>
    </div>
  )
};

export default ActivitiesUser;
