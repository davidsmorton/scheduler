
import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames';

export default function DayListItem(props) {
 const DayListItemClass = classNames ("day-list__item", {

    
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  
  const formatSpots = function (spots) {
     switch (spots) {
       case 0:
        return "no spots remaining";
      
      case 1:
        return "1 spot remaining";
      
      default:
        return `${spots} spots remaining`;
    
     }


    
      //format 


     
  }
  // props.selected
  // props.setDay

  // name:String the name of the day
  // spots:Number the number of spots remaining
  // selected:Boolean true or false declaring that this day is selected
  // setDay:Function accepts the name of the day eg. "Monday", "Tuesday"



  return (
    
    <li 
     
      className={DayListItemClass} 
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>

  );
}