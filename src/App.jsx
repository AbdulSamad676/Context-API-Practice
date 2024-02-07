import UserContextProvider from './Context/UserContextProvider';
import Login from './components/Login';
import { Profile } from './components/Profile';

function App() {
	// Importatn Note!
	//useContext is actually the main accessing material
	//esky through ham data bej b sakty hai receive b kar sakty hai

	return (
		// Step 3
		// Wrap the whole data in ContextProvider
		<UserContextProvider>
			<div style={{ textAlign: 'center' }}>
				<h3>Context API with Chai aur Code</h3>
				<Login />
				<Profile />
			</div>
		</UserContextProvider>
	);
}

export default App;
