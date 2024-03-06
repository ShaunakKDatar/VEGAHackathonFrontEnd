import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => (
  <div style={{ height: 500 }}>
    <Calendar
      localizer={localizer}
      events={[
        {
          title: 'Meeting',
          start: new Date(2024, 2, 7, 10, 0), // Month is zero-based
          end: new Date(2024, 2, 7, 12, 0),
        },
        // Add more events as needed
      ]}
      startAccessor="start"
      endAccessor="end"
      style={{ margin: '50px' }}
    />
  </div>
);

export default MyCalendar;
