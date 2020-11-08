import React from 'react';
import './styles/activitiesUserStyles.css';

const ActivitiesUser = (props) => {
  const { activity } = props;
  return (
      <div className="activityContainer">
          <p>{activity}</p>
      </div>
  )
};

export default ActivitiesUser;
