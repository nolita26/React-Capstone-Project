import { useState } from "react";
import { Link } from "react-router-dom";

export default function RForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [finalTime, setFinalTime] = useState(props.availableTimes.map((times) => <option>{times}</option>));

  function handleDateChange(e) {
    setDate(e.target.value);
    var stringify = e.target.value;
    const date = new Date(stringify);
    props.updateTimes(date);
    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

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
        <label className="form-style" htmlFor="people">No. of People: </label>
        <input type="number" id="people" placeholder="Number of People" value={people} required min={1} max={100} onChange={(e) => setPeople(e.target.value)}></input>
      </div>
      <div>
        <label className="form-style" htmlFor="date">Select Date: </label>
        <input type="date" id="date" required value={date} onChange={handleDateChange}></input>
      </div>
      <div>
        <label className="form-style" htmlFor="time">Select Time: </label>
        <select id="time" required> {finalTime} </select>
      </div>
      <div>
        <label className="form-style" htmlFor="occasion">Occasion: </label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Party</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="form-style" htmlFor="preferences">Seating preferences: </label>
        <select id="preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)}>
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
        </select>
      </div>
      <div>
        <label className="form-style" htmlFor="comments">Comments: </label>
        <textarea id="comments" rows={8} cols={50} placeholder="Any Additional Comments to keep in mind." value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
      </div>
      <div>
        <br></br>
        <p>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</p><br></br>
        <Link className="action-button" to="/confirmation"> Book Table </Link>
      </div>
    </form>
  );
}
