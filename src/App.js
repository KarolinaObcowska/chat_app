/* eslint-disable no-unused-vars */
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
/* eslint-disable react/react-in-jsx-scope */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
