import logo from './logo.svg';
import './App.css';

import {version} from '../package.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Supongamos que puedes tocar la ropa y cambiar tu musica.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          version del programa: {version}
        </a>
        <p>
          Para el profe ale, Saludos!
        </p>
        <spam>
          nv
        </spam>
        
      </header>
    </div>
  );
}

export default App;
