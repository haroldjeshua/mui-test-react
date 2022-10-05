import { Button } from '@mui/material';
import Combobox from './components/Combobox';

function App() {
  return (
    <div className="container">
        <Button variant="contained">Hello World</Button>
        <Button variant="outlined" color="secondary">Hello World</Button>

        <Combobox />
    </div>
  );
}

export default App;
