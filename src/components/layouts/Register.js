import HeroImage from "../../assets/food4.jpeg";
import RegForm from "../context/RegForm";
import { useReducer } from "react";
import { fetchAPI } from "../context/BookingAPI";

export default function Register() {
  const output = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  function updateTimes(date) {
    return fetchAPI(date);
  }
  return (
    <>
      <header className="reserve-table">
      <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients"></img>
      <div className="reserve-header-text">
        <h1>Register</h1>
      </div>
    </header>
    <RegForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  );
}
