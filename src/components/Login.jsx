import React from 'react';
import UserContext from '../Context/UserContext';
import { useState, useContext } from 'react';
function Login() {
	// step 4 make some files and try to access the data of the context
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// the setUser obj is actually from UserContextProvider that will set the data to the user
	// and the UseContext Hook give the access of the userObject
	let { setUser } = useContext(UserContext);

	// this function is all about how to send data to the store

	function handleSubmit(e) {
		// Here I am going to set the userData using setUserObject that is defined
		//inside the UserContextProvider

		e.preventDefault();
		setUser({ username, password });
	}

	return (
		<div style={{ marginBottom: '20px' }}>
			<h2>Login Here</h2>
			<input
				type='text'
				placeholder='UserName'
				value={username}
				onChange={e => {
					setUsername(e.target.value);
				}}
			/>
			<br />
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={e => {
					setPassword(e.target.value);
				}}
			/>
			<br />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
