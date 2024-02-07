import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

// Step 5 Access the data from store
export const Profile = () => {
	//Here i am going to access the user Data from the context (from the store)
	let { user } = useContext(UserContext);

	{
		return (
			<div style={{ fontSize: '20px', fontWeight: '700' }}>
				{' '}
				{!user ? 'Please Login' : `WelCome ${user.username}`}
			</div>
		);
	}
};
