import './App.css';
import Header from './component/Header/Header';
import TinderCards from './component/TinderCards/TinderCards';
import SwipeButtons from './component/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
