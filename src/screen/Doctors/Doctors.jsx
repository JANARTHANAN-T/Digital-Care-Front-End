import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../../component/DoctorCard/DoctorCard";
import "./Doctors.css";

function Doctors() {
  const user = JSON.parse(localStorage.getItem("hospital"));
  console.log(user);
  return (
    <div className="container">
      <div>
        <div className="input-group my-5 ">
          <input
            type="text"
            className="form-control"
            placeholder="Specialisation"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <Link to="/doctors/add">
            <button className="btn schedule-btn-1 mx-3 px-5">Add Doctor</button>
          </Link>
        </div>
        <div className="container">
          {user.doctors.map((e, i) => {
            return (
              <DoctorCard e={e} i={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
