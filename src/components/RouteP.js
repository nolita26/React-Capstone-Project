import { Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Booking from "./layouts/Booking";
import Order from "./layouts/Order";

import ReserveC from "./layouts/ReserveC";
import Register from "./layouts/Register";

export default function RouteP() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Booking />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Register />} />
      <Route path="/confirmation" element={<ReserveC />} />
    </Routes>
  );
}
