import React, {Component} from 'react';

const MainDisplay = (props) => {
  return (
    <div className="mainModal">
      <h3>{props.mainCow.name}</h3>
      <p><em>{props.mainCow.description}</em></p>
      <p>----------------------------------</p>
    </div>
  );
}

export default MainDisplay;