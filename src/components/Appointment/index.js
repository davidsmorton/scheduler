import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode"
import Status from "components/Appointment/Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING"
const DELETING = "DELETING"


export default function Appointment(props) {
  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    console.log("PROPS", props)
    props.bookInterview(props.id, interview)
    transition(SHOW)
  }
  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === DELETING && <Status message="Deleting"/>}
      {mode === SAVING && <Status message="Saving" />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
      {mode === SHOW && (
        <Show
        
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && 
      <Form 
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
      /> }
      

     
    </article>
  );
}
