import Nav from './components/Nav';
import Footer from './components/Footer';
import ShortIntro from './components/ShortIntro';
import ProjectPage from './components/projectpage/Projectpage';
import useVisualMode from './hooks/useVisualHook';
import './App.css';
import Skills from './components/Skills';

function App() {
  const INTRO = 'INTRO';
  const SKILLS = 'SKILLS';
  const PROJECTS = 'PROJECTS';
  const MORE = 'MORE';
  const { mode, transition } = useVisualMode(INTRO);

  const select = (event) => {
    transition(event);
  }

  
  return (
    <div className="App">
      <Nav select={select} />
      {mode === INTRO && <ShortIntro />}
      {mode === SKILLS && <Skills />}
      {mode === PROJECTS && <ProjectPage />}
      {mode === MORE}
      <Footer />
    </div>
  );
}

export default App;
