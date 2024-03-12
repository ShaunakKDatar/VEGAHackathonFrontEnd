import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const UserDataContext = createContext();

// Create a provider component
export const UserDataProvider = (props) => {
    // Define the state variables
    const [userData, setUserData] = useState({});
    let [announcements, setAnnouncements] = useState([]);
    let [events, setEvents] = useState([]);
    let [opportunities, setOpportunities] = useState([]);

    // Define the useEffect hook to make the API request
    useEffect(() => {
        const fetchData = async () => {
            const articlesRes = await axios.get('http://localhost:3000/api/opportunity');
            setOpportunities(articlesRes.data.data);

            const eventsRes = await axios.get('http://localhost:3000/api/events');
            setEvents(eventsRes.data.data);


            const announcementsres = await axios.get('http://localhost:3000/api/announcements');
                setAnnouncements(announcementsres.data.data);

            if (!localStorage.getItem('X-auth-token')) return;
                // console.log(localStorage.getItem('X-auth-token'));
            try {

                
                // Make the API request
                const response = await axios.get('http://localhost:3000/api/student/me', {
                    headers: {
                        'X-auth-token': localStorage.getItem('X-auth-token')
                    }
                });

                // Save the response in userData
                // console.log(response.data); 
                setUserData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    // Define any functions or methods you need

    // Return the provider component with the context value
    return (
        <UserDataContext.Provider value={{ userData, announcements, events, opportunities }}>
            {props.children}
        </UserDataContext.Provider>
    );
};