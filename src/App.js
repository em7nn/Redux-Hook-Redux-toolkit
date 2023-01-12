
import './App.css';
import { Counter } from './Components/CounterController';
import CounterShow from './Components/counterShow';

function App() {
  return (
    <div className="App">
      <CounterShow/>
      <Counter/>
    </div>
  );
}

export default App;
