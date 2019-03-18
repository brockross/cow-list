import React, {Component} from 'react';

const MainDisplay = (props) => {
  return (
    <div className="mainModal">
      <h3>{props.mainCow.name}</h3>
      <h4>{props.mainCow.description}</h4>
    </div>
  );
}

export default MainDisplay;