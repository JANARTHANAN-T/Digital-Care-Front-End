import React ,{useState}from "react";
import "./DoctorProfile.css";

function DoctorProfile() {
    const [schedule,setSchedule]=useState(false)
    const [detailToggle,setDetailToggle]=useState(true)
    const [certificateToggle,setCertificateToggle]=useState(true)
  const stars = (n) => {
    let i;
    let star = "";
    for (i = 0; i < n; i++) {
      star = star + "⭐ ";
    }
    return star;
  };
  return (
    <div className="container mt-2 ">
      <div className="row d-flex align-items-center ">
        <div className="col-md-4 text-center py-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJouBqNcYhcUb5DA9Hxdhvit-rdY9fz0prA&usqp=CAU"
            alt=""
          />
        </div>
        <div className="col-md-4 px-5">
          <p className="fs-4 fw-bold my-0">Gowmathi</p>
          <p className="fs-5 my-1">Surgeon </p>
          <p className="fs-5 my-1">gomathi@gmail.com</p>
          <p className="fs-5 my-1">+91-98987-67655</p>
          <button onClick={()=>setSchedule(!schedule)} className="btn schedule-btn mt-3 px-5">
            Make Available
          </button>
        </div>
      </div>
      <div className="my-5">
      <div className="row">
        <div className="col-md-6 p-4">
        <div className="d-flex justify-content-between align-items-center batch">
          <div className="mx-3 my-2 fw-bold">Personal Detail</div>
          <div onClick={()=>setDetailToggle(!detailToggle)} className="pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down mx-3" viewBox="0 0 16 16" >
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        { detailToggle &&
        <div className="p-4" style={{backgroundColor:'#fafafa'}}>
            <p className="text-dark fw-bold">Doctor ID: <span className="text-muted fs-6">1023843839301234</span> </p>
            <p className="text-dark fw-bold">Degree: <span className="text-muted fs-6">M.B.B.S</span> </p>
            <p className="text-dark fw-bold">Specialisation: <span className="text-muted fs-6">Neurology</span> </p>
            <p className="text-dark fw-bold">University: <span className="text-muted fs-6">Madras Medical College</span> </p>
            <p className="text-dark fw-bold">Preferred time: <span className="text-muted fs-6">6.00 PM - 8.00 PM</span> </p>
            <p className="text-dark fw-bold">Clinic Address: <span className="text-muted fs-6">xxx xxx, yyy yyy, zzzz - 638xxx</span> </p>
            <p className="text-dark fw-bold">Home Address: <span className="text-muted fs-6">xxx xxx, yyy yyy, zzzz - 638xxx</span> </p>
        </div>
        }
        </div>
        <div className="col-md-6 p-4">
        <div className="d-flex justify-content-between align-items-center batch">
          <div className="mx-3 my-2 fw-bold">Certificates</div>
          <div onClick={()=>setCertificateToggle(!certificateToggle)} className="pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down mx-3" viewBox="0 0 16 16" >
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        {certificateToggle &&
        <div className="p-4 text-center" style={{backgroundColor:'#fafafa'}}>
            <img src="https://static.toiimg.com/thumb/msid-65879382,width-400,resizemode-4/65879382.jpg" className="certificate" alt="" />
        </div>
        }
        </div>
      </div>
        </div>
        {/* slot */}
        <div className="text-center fw-bold my-5">
          <div className="heading-1 mb-5">Available Slot</div>
          <div className="row ms-5">
            <div className="col-md-2 d-flex justify-content-center align-items-center day fs-4 fw-bold">
              Today
            </div>
          <div className="col-md-10">
          <div className="row">
          <div className="col-1"> </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
              10:00AM - 10:30AM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            10:30AM - 11:00AM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            11:00AM - 11:30AM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            11:30AM - 12:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            12:00PM - 12:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            12:30PM - 01:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            01:00PM - 01:30PM
            </div>
            <div className="col-1 px-1 mx-1  slot-not-booked shadow">
            01:30PM - 02:00PM
            </div>
            <div className="col-1"> </div>
          </div>
          <div className="row mt-3 ">
          <div className="col-1"> </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
              06:00PM - 06:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            06:30PM - 07:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            07:00PM - 07:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            07:30PM - 08:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            08:00PM - 08:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            08:30PM - 09:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            09:00PM - 09:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            09:30PM - 10:00PM
            </div>
            <div className="col-1"> </div>
          </div>

          </div>
          </div>
          <div className="row mt-5 ms-5">
            <div className="col-md-2 d-flex justify-content-center align-items-center day fs-4 fw-bold">
              Tomorrow
            </div>
          <div className="col-md-10">
          <div className="row">
            <div className="col-1"> </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
              10:00AM - 10:30AM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            10:30AM - 11:00AM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            11:00AM - 11:30AM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            11:30AM - 12:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            12:00PM - 12:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            12:30PM - 01:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            01:00PM - 01:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            01:30PM - 02:00PM
            </div>
            <div className="col-1"> </div>
          </div>
          <div className="row mt-3">
          <div className="col-1"> </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
              06:00PM - 06:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            06:30PM - 07:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            07:00PM - 07:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            07:30PM - 08:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            08:00PM - 08:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            08:30PM - 09:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            09:00PM - 09:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            09:30PM - 10:00PM
            </div>
            <div className="col-1"> </div>
          </div>

          </div>
          </div>
          <div className="row mt-5 ms-5">
            <div className="col-md-2 d-flex justify-content-center align-items-center day fs-4 fw-bold">
              Next Day
            </div>
          <div className="col-md-10">
          <div className="row">
          <div className="col-1"> </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
              10:00AM - 10:30AM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            10:30AM - 11:00AM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            11:00AM - 11:30AM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            11:30AM - 12:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            12:00PM - 12:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            12:30PM - 01:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            01:00PM - 01:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            01:30PM - 02:00PM
            </div>
            <div className="col-1"> </div>
          </div>
          <div className="row mt-3 ">
          <div className="col-1"> </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
              06:00PM - 06:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            06:30PM - 07:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            07:00PM - 07:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-booked shadow">
            07:30PM - 08:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            08:00PM - 08:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            08:30PM - 09:00PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            09:00PM - 09:30PM
            </div>
            <div className="col-1 px-1 mx-1 slot-not-booked shadow">
            09:30PM - 10:00PM
            </div>
            <div className="col-1"> </div>
          </div>

          </div>
          </div>
        </div>
        

        {schedule &&
        <div className="schedule-form-wrapper bg-dark p-5 mx-auto text-light" >
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="">Schedule your meeting</h1>
                <div onClick={()=>setSchedule(!schedule)} className="pointer">
                <svg xmlns="http://www.w3.org/2000/svg"  width="26" height="26" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                </div>
            </div>
                <h3 className="my-4">Date:</h3>
                <input type="date"  className="form-control"/>
                <h3 className="my-4">Preferred Session</h3>
                <select className="form-select">
                    <option value="fn">Forenoon</option>
                    <option value="an">Afternoon</option>
                </select>
                <h3 className="my-4">Describe in one line</h3>
                <input type="text" className="form-control"/>
                <button className="btn btn-outline-light my-4">Schedule</button>     
        </div>
        }
    </div>
  );
}

export default DoctorProfile;
