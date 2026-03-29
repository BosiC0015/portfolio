import icons from "../data/icons";
import "../assets/styles/footer.scss";


export default function Footer() {
  const contactInfo = {
    email: {
      ref: "mailto:chenbosi.bosi@gmail.com",
      ariaLabel: "Contact me by email"
    },
    linkedIn: {
      ref: "https://www.linkedin.com/in/bosi-chen-79657421b/",
      ariaLabel: "Connect me on LinkedIn in a new tab"
    },
    github: {
      ref: "https://github.com/BosiC0015",
      ariaLabel: "View my GitHub page in a new tab"
    }
  }


  return (
    <footer id="footer" className="footer">
      <h2>Find & Contact Me:</h2>
      <div className="contact-icons">
        <a href={contactInfo.email.ref} aria-label={contactInfo.email.ariaLabel}>{icons.email}</a>
        <a href={contactInfo.linkedIn.ref} aria-label={contactInfo.linkedIn.ariaLabel} target="_blank" rel="noreferrer">{icons.linkedIn}</a>
        <a href={contactInfo.github.ref} aria-label={contactInfo.github.ariaLabel} target="_blank" rel="noreferrer">{icons.github}</a>
      </div>
    </footer>
  )
}