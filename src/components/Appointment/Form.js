import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");
  const [error, setError] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const reset = function () {
    setName("");
    setInterviewer(null);
  };

  const cancel = function () {
    reset();
    props.onCancel();
  };

  const validate = function () {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={handleChangeName}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>
            Cancel
          </Button>
          <Button onClick={validate} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
