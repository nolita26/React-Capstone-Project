import RForm from "../context/Form";
import { useReducer } from "react";
import { fetchAPI } from "../context/BookingAPI";
import HeroImage from "../../assets/food4.jpeg";

export default function Booking() {
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
        <h1>Reserve a table</h1>
      </div>
    </header>
      <RForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  );
}
