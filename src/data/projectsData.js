import portfolioImg from "../assets/images/preview/Porfolio.png";
import mltdCalculator from "../assets/images/preview/MLTDCalculator.png";
import studentRegistration from "../assets/images/preview/StudentRegistration.png";
import journal from "../assets/images/preview/Journal.png";
import scheduler from "../assets/images/preview/Scheduler.png";
import foodOrdering from "../assets/images/preview/FoodOrdering.png";
import jungle from "../assets/images/preview/Jungle.png";
import tweeter from "../assets/images/preview/Tweeter.png";
import tinyApp from "../assets/images/preview/TinyApp.png";


const projects = [
  {id: "0", title: "Portfolio Website", github: "https://github.com/BosiC0015/personal-website", isLive: true, live: "https://bosic0015.github.io/portfolio/", stacks: "HTML, JavaScript, React.js, CSS, SCSS, Bootstrap", description: "My portfolio website, built with React.js CSS and SCSS. There is a homepage for introduction and connection and a project page outlining all my projects.", projectImg: portfolioImg},
  {id: "1", title: "MLTD Calculator", github: "https://github.com/BosiC0015/mltd-calculator", isLive: true, live: "https://bosic0015.github.io/mltd-calculator/", stacks: "HTML, JavaScript, React.js, SCSS, Bootstrap", description: "A SPA for MLTD players to calculate how many times they need to play the regular or event songs to meet their event point goals.", projectImg: mltdCalculator},
  {id: "2", title: "Student Registration App", github: "https://github.com/BosiC0015/StudentRegistrationApp", isLive: false, live: "", stacks: "C#, ASP.NET, Bootstrap", description: "A webform application created using C# and ASP.NET Webform Framework. This application can allow users to add students to the list and register courses for each student.", projectImg: studentRegistration},
  {id: "3", title: "My Tiny Journal", github: "https://github.com/BosiC0015/journal", isLive: false, live: "", stacks: "HTML, JavaScript, React.js, SCSS, Express.js, PostgreSQL", description: "A journaling web app. A user can create, modify, and delete all-day plans, plans at an exact time or long plans lasting for days. Users can also write diaries and track monthly habits as well. I worked on the tracker page and most of the final scss styling.", projectImg: journal},
  {id: "4", title: "Interview Scheduler", github: "https://github.com/BosiC0015/scheduler", isLive: false, live: "", stacks: "HTML, JavaScript, React.js, SCSS, PostgreSQL", description: "A single-page application for appointment booking. Users can create new appointments, edit or delete(cancel) existing appointments. The app data is fetched from an API server using the PostgreSQL database. Also includes various testing tools such as storybook, jest, and cypress.", projectImg: scheduler},
  {id: "5", title: "Food Pickup Ordering", github: "https://github.com/BosiC0015/Midterm", isLive: false, live: "", stacks: "EJS, SCSS, Express.js, PostgreSQL", description: "The user can create, edit, delete orders, and submit them to Starlight Cafe which will get a text message to prepare their order. The user will then wait for a response from the restaurant sent via text message and will update the webpage with the exact time of pick-up. I worked on the cart and order router building and the search feature.", projectImg: foodOrdering},
  {id: "6", title: "Jungle", github: "https://github.com/BosiC0015/jungle", isLive: false, live: "", stacks: "Ruby, Ruby on Rails, HTML, SCSS, PostgreSQL", description: "Given a mini e-commerce website prototype built with Ruby on Rails, follow the tasks to debug and add features to complete the user stories. A user or admin can see most of the normal e-commerce website features here.", projectImg: jungle},
  {id: "7", title: "Tweeter", github: "https://github.com/BosiC0015/tweeter", isLive: false, live: "", stacks: "HTML, CSS, jQuery", description: "The tweeter is a simple, single-page Twitter clone, having the function of sending a tweet and fetching and displaying tweets from the server data.", projectImg: tweeter},
  {id: "8", title: "TinyApp", github: "https://github.com/BosiC0015/tinyapp", isLive: false, live: "", stacks: "Express.js, EJS", description: "TinyApp can store URLs as shortened links, create new shortened URLs, updating URLs for an existing shortened URL. And everyone can simply register with an email.", projectImg: tinyApp},
  // {id: "9", title: "", github: "", isLive: false, live: "", stacks: "", description: "", projectImg: ""},
  // {id: "10", title: "", github: "", isLive: false, live: "", stacks: "", description: "", projectImg: ""},
  // {id: "11", title: "", github: "", isLive: false, live: "", stacks: "", description: "", projectImg: ""},
];

export default projects;