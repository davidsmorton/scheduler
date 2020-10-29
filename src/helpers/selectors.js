//The function will return an array of appointments for the given day.

export const getAppointmentsForDay = function (state, name) {
  const filteredDays = state.days.filter((dayItem) => dayItem.name === name);
  
  if(state.days.length === 0) {
    return [];
  } else if (filteredDays.length === 0) {
    return [];
  } else {
  return filteredDays[0].appointments.map(
    (appointmentItem) => state.appointments[appointmentItem]
  );}
};
//find the correct day inside state.days
//loop through or us a method to match "day" with the key name and value === day pram
// When matched return appointments array
//state - object
//day key array of objects

