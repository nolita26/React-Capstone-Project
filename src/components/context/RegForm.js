import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  return (
    <form className="reservation-form">
      <div>
        <label className="form-style" htmlFor="fName">First Name: </label>
        <input type="text" id="fName" placeholder="First Name" required minLength={2} maxLength={50} value={fName} onChange={(e) => setFName(e.target.value)}></input>
      </div>
      <div>
        <label className="form-style" htmlFor="lName">Last Name: </label>
        <input type="text" id="lName" placeholder="Last Name" minLength={2} maxLength={50} value={lName} onChange={(e) => setLName(e.target.value)}></input>
      </div>
      <div>
        <label className="form-style" htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder="Email" value={email} required minLength={4} maxLength={200} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        <label className="form-style" htmlFor="phonenum">Phone Number: </label>
        <input type="tel" id="phonenum" placeholder="Contact" value={tel} required minLength={10} maxLength={25} onChange={(e) => setTel(e.target.value)}></input>
      </div>
      <div>
        <Link className="action-button" to="/confirmation"> Register </Link>
      </div>
    </form>
  );
}
