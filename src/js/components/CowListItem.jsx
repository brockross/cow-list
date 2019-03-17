import React, {Component} from 'react';

const CowListItem = (props) => {
  return (
    <li onClick={() => props.handleCowClick(props.cow)}>{props.cow.name}</li>
  )
}

export default CowListItem;