import React from 'react';
import './styles/activityInputStyles.css';

const ActivityInput = (props) => {
  const { onChange, value } = props;
  return (
    <label>
      Activity
      <input
        placeholder="Your activity"
        className="activityInput"
        onChange={onChange}
        value={value}
      ></input>
    </label>
  );
};

export default ActivityInput;
