import Portfolio from "./projects/Portfolio";
import MLTDCalculator from "./projects/MLTDCalculator";
import StudentRegistrationApp from "./projects/StudentRegistration";
import MyTinyJournal from "./projects/MyTinyJournal";
import InterviewScheduler from "./projects/InterviewScheduler";
import FoodPickupOrdering from "./projects/FoodPickupOrdering";
import Jungle from "./projects/Jungle";
import Tweeter from "./projects/Tweeter";
import TinyApp from "./projects/TinyApp";
import "./Projectpage.css";


export default function ProjectPage() {
  return (
    <div id="projects" className="projects">
      {/* <ProjectHead /> */}
      <h1>My Projects</h1>
      <div className="projects-container">
        <Portfolio />
        <MLTDCalculator />
        <StudentRegistrationApp />
        <MyTinyJournal />
        <InterviewScheduler />
        <FoodPickupOrdering />
        <Jungle />
        <Tweeter />
        <TinyApp />
      </div>
    </div>
  );
};