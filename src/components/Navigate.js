import { Link } from "react-router-dom";

export default function Navigate(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? ("") : (<Link to="/"><img src={require("../assets/logo/Asset 16@4x.png")}  alt="Little Lemon logo" className="nav-image"></img></Link>)}
      <Link className="hover-effect" to="/"><h1>Home</h1></Link>
      <Link className="hover-effect" to="/about"><h1>About</h1></Link>
      <Link className="hover-effect" to="/reservations"><h1>Reservations</h1></Link>
      <Link className="hover-effect" to="/order"><h1>Order</h1></Link>
      <Link className="hover-effect" to="/login"><h1>Login</h1></Link>
    </menu>
  );
}
