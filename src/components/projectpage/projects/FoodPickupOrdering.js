import { ExternalLink } from "../ExternalLink";
import foodOrdering from "../preview/FoodOrdering.png";
import "../Projectpage.css";


export default function FoodPickupOrdering() {
  return (
    <section id="cafe" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/Midterm" target="_blank" rel="noreferrer">
            Food Pickup Ordering App (Group Project)
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p id="stacks">EJS, SCSS, Express.js, PostgreSQL</p>
          </div>
          <div className="desc">
            <p id="description">The user can create, edit, delete orders, and submit them to Starlight Cafe which will get a text message to prepare their order. The user will then wait for a response from the restaurant sent via text message and will update the webpage with the exact time of pick-up. I worked on the cart and order router building and the search feature.</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={foodOrdering} alt="food-pickup-ordering" />
        </div>
      </div>
    </section>
  );
};