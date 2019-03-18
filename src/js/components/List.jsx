import React, {Component} from 'react';
import CowListItem from './CowListItem.jsx';

const List = (props) => {
  return (
    <div className="cowList">
      <h4>The wonderful bovines of CowHub:</h4>
      <ul>
      {props.cowList.map((cow) => {
        return <CowListItem cow={cow} handleCowClick={props.handleCowClick}/>
      })}
      </ul>
    </div>
  );
}

// need a list item component, passed the 'handleCowClick' method.

export default List;