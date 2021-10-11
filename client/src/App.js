import './App.css';
import Container from './components/Container';
import {VoteProvider} from './context/VoteContext';

function App() {
  return (
    <div className="App">
      <VoteProvider>
      <Container/>
      </VoteProvider>
    </div>
  );
}

export default App;
