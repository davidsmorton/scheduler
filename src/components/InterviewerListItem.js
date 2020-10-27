import React from "react";
import "components/InterviewerListItem.scss";
import classNames from 'classnames';

export default function InterviewerListItem (props) {
  const InterviewerListItemClass = classNames ("interviewers__item", {

    "interviewers__item--selected": props.selected,
    
  });
  return (
    
      <li 
      className={InterviewerListItemClass} 
      onClick={() => props.setInterviewer(props.setInterviewer)} 
      >
        <img
          className="interviewers__item-image" 
          src={props.avatar}
          alt={props.name}
        />
        {props.selected && props.name} 
      </li>
   
  );
}

// not sure what I'm doing here at all 
// used DayListItem as a guide

//Values

// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - to determine if an interview is selected or not
// setInterviewer:function - sets the interviewer upon selection