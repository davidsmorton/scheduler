import React, { useState, useEffect } from "react";
import "components/Application.scss";

import DayList from "components/DayList";
import InterviewviewList from "components/InterviewerListItem";
import Appointment from "components/Appointment/index";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors"


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
];

export default function Application(props) {
  // const [day, setDay] = useState("");
  // const [days, setDays] = useState([]);
  
  const [state, setState] =useState({
    day: "Monday", 
    days: [],
    appointments:  [
        {
          id: 1,
          time: "12pm",
        },
        {
          id: 2,
          time: "1pm",
          interview: {
            student: "Lydia Miller-Jones",
            interviewer: {
              id: 1,
              name: "Sylvia Palmer",
              avatar: "https://i.imgur.com/LpaY82x.png",
            },
          },
        },
        {
          id: 3,
          time: "2pm",
          interview: {
            student: "Paul Chen",
            interviewer: {
              id: 2,
              name: "Tori Malcolm",
              avatar: "https://i.imgur.com/LpaY82x.png",
            },
          },
        },
        {
          id: 4,
          time: "3pm",
          interview: {
            student: "Scott Morton",
            interviewer: {
              id: 3,
              name: "Mildred Nazir",
              avatar: "https://i.imgur.com/LpaY82x.png",
            },
          },
        },

      ],
    interviewers:  [
      { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
      { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
      { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
      { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
      { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
    ], 
    });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  const setDay = day => setState({ ...state, day });
  const schedule = dailyAppointments.map((dailyAppointments) => {
  });
  const bookInterview = function (id, interview) {
    
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then((res) =>  {
        setState({
          ...state,
          appointments
        })
      }      
    )}

  const cancelInterview = function (id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: {...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios.delete(`/api/appointments/${id}`)
      .then ((res) => {
      setState({...state, appointments})
      })
  }

  const appointmentItems = dailyAppointments.map((appointment) => {
    console.log("appointment",appointment)
    return (
      <Appointment 
        key={appointment.id} 
        id={appointment.id}
        time={appointment.time}
        interview={getInterview(state, appointment.interview)}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
    
  });

  useEffect(() => {
    
Promise.all([
  axios.get(`/api/days`),
  axios.get(`/api/appointments`),
  axios.get(`api/interviewers`)
]).then((all) => {
  console.log(all[0]); // first
  console.log(all[1]); // second
  console.log(all[2]);
  setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
});
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentItems}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
