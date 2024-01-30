import { Link } from "react-router-dom";
import HeroImage from "../../assets/food5.jpeg";

export default function ReserveC() {
  return (
    <header className="confirmation-header">
      <img className="confirmation-image" src={HeroImage} alt="Little Lemon Ingredients"></img>
      <section className="reserve-header-text">
        <h1>Your reservation is confirmed.</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining at Little Lemon!</h4>
      </section>
      <section className="redirect-buttons">
        <Link className="redirect-button" to="/order"> Order Online </Link>
        <Link className="redirect-button" to="/"> Home </Link>
      </section>
    </header>
  );
}
