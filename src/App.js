import Combobox from './components/Combobox';
import Buttons from './components/Buttons';
import FloatingActionButtons from './components/FloatingActionButtons';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import BasicCard from './components/BasicCard';

function App() {
	return (
		<div className="container">
			<ResponsiveAppBar />
			<Buttons />
			<Combobox />
			<FloatingActionButtons />

			<BasicCard />
		</div>
	);
}

export default App;
