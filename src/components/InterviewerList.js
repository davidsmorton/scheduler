import React from "react";
import PropTypes from "prop-types";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map((interviewer) => (
          <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            selected={interviewer.id === props.interviewer}
            setInterviewer={(event) => props.setInterviewer(interviewer.id)}
          />
        ))}
      </ul>
    </section>
  );
}

InterviewerList.PropsTypes = {
  interviewers: PropTypes.array.isRequired,
};

//Props

// interviewers:array - an array of objects containing the information of each interviewer
// interviewer:number - the id of an interviewer
// setInterviewer:function - a function that accepts an interviewer id
