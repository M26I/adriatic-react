import logo from './logo.svg';
import './App.css';
import { Header } from './header/header';
import { Main } from './main/main';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <Main />
    </div>
  );
}

export default App;
