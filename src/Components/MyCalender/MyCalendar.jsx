import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


// import React, {useState} from 'react';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
const MyCalendar = () => {
  return (
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
  // const [value, setValue] = useState(new Date());
  // return(
  // <div>
  //  <LocalizationProvider dateAdapter={AdapterDateFns}>
  //     <StaticDatePicker 
  //     orientation="landscape"
  //     openTo='day'
  //     value={value}
  //     onChange={(newValue)=>{
  //       setValue(newValue);
  //     }}
  //     renderInput={(params)=><TextField {...params} />}
  //     />
  //   </LocalizationProvider>
  // </div>
)};

export default MyCalendar;
