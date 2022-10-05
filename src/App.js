import Combobox from './components/Combobox';
import Buttons from './components/Buttons';
import FloatingActionButtons from './components/FloatingActionButtons';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import BasicCard from './components/BasicCard';
import BottomNavBar from './components/BottomNavBar';

function App() {
	return (
		<div className="container" style={{ marginTop: '70px' }}>
			<ResponsiveAppBar />
			<Buttons />
			<Combobox />
			<FloatingActionButtons />

			<BasicCard />
			<BottomNavBar />
		</div>
	);
}

export default App;
