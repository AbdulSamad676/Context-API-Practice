import React from 'react';
import { useState } from 'react';
import UserContext from './UserContext';

// Step 2 Making a store like provide data
// Here you are going to place data in the provider
// after completing this file you will give access to the main file

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
