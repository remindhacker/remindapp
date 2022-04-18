import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TopBar from './components/TopBar'
import HomePage from './pages/Home';
import Quiz from './pages/Quiz';


function App() {
  return (
    <div className="App">
       <TopBar />
       <HomePage />
       
    </div>
  );
}

export default App;
