import './App.css';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="app">
      <div className='components'>
        <Intro />
        <About />
        <Projects />
      </div>
    </div>
  )
};

export default App;