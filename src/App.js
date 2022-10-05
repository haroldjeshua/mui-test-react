import Combobox from './components/Combobox';
import Buttons from './components/Buttons';
import FloatingActionButtons from './components/FloatingActionButtons';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
	return (
		<div className="container">
			<ResponsiveAppBar />
			<Buttons />
			<Combobox />
			<FloatingActionButtons />
		</div>
	);
}

export default App;
