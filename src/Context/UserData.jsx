import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const UserDataContext = createContext();

// Create a provider component
export const UserDataProvider = (props) => {
    // Define the state variables
    const [userData, setUserData] = useState({});

    // Define the useEffect hook to make the API request
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make the API request
                const response = await axios.get('http://localhost:3000/api/student/me', {
                    headers: {
                        'X-auth-token': localStorage.getItem('X-auth-token')
                    }
                });

                // Save the response in userData
                // console.log(response.data);
                setUserData(response.data);
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
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {props.children}
        </UserDataContext.Provider>
    );
};