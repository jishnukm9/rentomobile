import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    // <p className=' font-latofont text-white text-2xl'>TripMoto</p>
    <Link to="/" className=" font-latofont text-white text-2xl font-black">
      TripMoto
    </Link>
  );
}
