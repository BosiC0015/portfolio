import Nav from './components/Nav';
import Footer from './components/Footer';
import ShortIntro from './components/ShortIntro';
import ProjectPage from './components/projectpage/Projectpage';
import Skills from './components/Skills';
import More from './components/More';
// import useVisualMode from './hooks/useVisualHook';
import './App.css';

function App() {
  // const INTRO = 'INTRO';
  // const SKILLS = 'SKILLS';
  // const PROJECTS = 'PROJECTS';
  // const MORE = 'MORE';
  // const { mode, transition } = useVisualMode(INTRO);

  // const select = (event) => {
  //   transition(event);
  // }

  
  return (
    <main className="App">
      <Nav />
      {/* <Nav select={select} /> */}
      {/* {mode === INTRO && <ShortIntro />} */}
      {/* {mode === SKILLS && <Skills />} */}
      {/* {mode === PROJECTS && <ProjectPage />} */}
      {/* {mode === MORE && <More />} */}
      <ShortIntro />
      <Skills />
      <ProjectPage />
      <More />
      <Footer />
    </main>
  );
}

export default App;
