/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
