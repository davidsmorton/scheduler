import React from "react";
import classNames from 'classnames';
import DayListItem from "./DayListItem";

export default function DayList(props) {
//.map
  return (
    
    <ul>
    {props.days.map( day => 
     
        <DayListItem
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
        />)}
    </ul>
    
    
  )
}

