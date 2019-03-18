import React, {Component} from 'react';

const CowListItem = (props) => {
  return (
    <li onClick={() => props.handleCowClick(props.cow)}>
      <p>
        {props.cow.name}
      </p>
    </li>
  )
}

export default CowListItem;