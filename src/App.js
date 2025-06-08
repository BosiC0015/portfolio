import Nav from './components/Nav';
import Footer from './components/Footer';
import ShortIntro from './components/ShortIntro';
import Skills from './components/SkillsPage';
import ProjectPage from './components/ProjectPage';
import MoreStories from './components/MoreStories';
import './App.css';


function App() {
  return (
    <main className="App">
      <Nav />
      <ShortIntro />
      <Skills />
      <ProjectPage />
      <MoreStories />
      <Footer />
    </main>
  );
}

export default App;
