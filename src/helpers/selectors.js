//The function will return an array of appointments for the given day.

export const getAppointmentsForDay = function (state, name) {
  const filteredDays = state.days.filter((dayItem) => dayItem.name === name);
  if (state.days.length === 0) {
    return [];
  } else if (filteredDays.length === 0) {
    return [];
  } else {
    return filteredDays[0].appointments.map(
      (appointmentItem) => state.appointments[appointmentItem]
    );
  }
};

export const getInterviewersForDay = function (state, name) {
  const filteredDays = state.days.filter((dayItem) => dayItem.name === name);

  if (state.days.length === 0) {
    return [];
  } else if (filteredDays.length === 0) {
    return [];
  } else {
    return filteredDays[0].interviewers.map(
      (interviewerId) => state.interviewers[interviewerId]
    );
  }
};

export const getInterview = function (state, interview) {
  if (!interview) {
    return null;
  }

  const filteredInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return filteredInterview;
};

//Example Data//

// {
//   "student": "Lydia Miller-Jones",
//   "interviewer": {
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }
