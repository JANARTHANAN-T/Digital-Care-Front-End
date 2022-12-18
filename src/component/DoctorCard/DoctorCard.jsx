import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function DoctorCard({e,i}) {
    const user=JSON.parse(localStorage.getItem('hospital'))
    const navigate = useNavigate();
    const [count,setCount]=useState()
    const [start,setStart]=useState()
    const [end, setEnd]=useState()
    let link = `/doctors/edit/${e._id}`
    console.log(e._id)
    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(e._id)
        await axios({
            method: 'post',
            url: `http://localhost:8080/hospital/avail/${e._id}/${user._id}`,
            data: {count,start,end},
          }).then(
            (res)=>{
              localStorage.setItem("hospital", JSON.stringify(res.data));
              toast("Doctor Profile is made to available")
              navigate("/doctors")
          }
          ).catch((err)=>{
            console.log(err)
            toast(err.message)
          }) 
      }

      const handleDelete = async(event) => {
        event.preventDefault()
        console.log(e._id)
        await axios({
            method: 'get',
            url: `http://localhost:8080/hospital/delete/${e._id}/${user._id}`,
          }).then(
            (res)=>{
              localStorage.setItem("hospital", JSON.stringify(res.data));
              toast("Doctor Profile is deleted")
              navigate("/doctors")
          }
          ).catch((err)=>{
            console.log(err)
            toast(err.message)
          }) 
      }

      const handleCancel = async(event) => {
        event.preventDefault()
        console.log(e._id)
        await axios({
            method: 'get',
            url: `http://localhost:8080/hospital/cancel/${e._id}/${user._id}`,
          }).then(
            (res)=>{
              localStorage.setItem("hospital", JSON.stringify(res.data));
              toast("Doctor Profile is made to not available")
              navigate("/doctors")
          }
          ).catch((err)=>{
            console.log(err)
            toast(err.message)
          }) 
      }

  return (
            <div className="card--doctor row" key={i}>
             <ToastContainer />
                <div className="card--doctor--image col-md-4">
                  <img className="card--image" src={e.image} alt="" />
                </div>
                <div className="card--doctor--details col-md-4">
                  <div className="card--doctor--name">
                    Dr. {e.name}
                    <span className="d-flex ">
                      <div className="mx-2">
                        <Link to={link} className="text-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                          onClick={handleDelete}
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </div>
                    </span>
                  </div>

                  <div className="card--doctor--role">{e.specialisation}</div>
                  <p className="fs-5 my-1">Mail: {e.email}</p>
                  <p className="fs-5 my-1">Phone: {e.phone}</p>
                  <p className="card--doctor--fee ">Fee: Rs.{e.pay}</p>
                </div>
                <div className="card-doctor-token col-md-4">
                  <div className="card--token--label">Number of Tokens</div>
                  <input
                    type="number"
                    className="card--input form-control"
                    placeholder="No. of tokens"
                    value={count} onChange={(e)=>setCount(e.target.value)}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="" className="card--token--label pt-1">
                        Start Time
                      </label>
                      <input type="time" className="form-control time" value={start} onChange={(e)=>setStart(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="" className="card--token--label pt-1">
                        End Time
                      </label>
                      <input type="time" className="form-control time" value={end} onChange={(e)=>setEnd(e.target.value)} />
                    </div>
                  </div>
                  {!e.isOpen ? 
                  <button
                    className="btn schedule-btn mt-3 px-5"
                    onClick={handleSubmit}
                  >
                    Make Available
                  </button> :
                  <button
                    className="btn schedule-btn btn-cancel mt-3 px-5"
                    onClick={handleCancel}
                  >
                    Cancel Available
                  </button>
                  }
                </div>
              </div>

  )
}

export default DoctorCard