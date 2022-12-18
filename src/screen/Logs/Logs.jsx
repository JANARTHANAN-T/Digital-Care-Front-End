import axios from "axios";
import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import BotButton from "../../component/BotButton/BotButton";
import "./logs.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Specialist() {
  const user=JSON.parse(localStorage.getItem('hospital'))
  const [log,setLog]=useState()
   axios({
    method: 'get',
    url: `http://localhost:8080/hospital/logs/${user._id}`,
  }).then(
    (res)=>{
      setLog(res.data)
      console.log(log)
  }
  ).catch((err)=>{
    console.log(err)
    toast(err.message)
  })

  return (
    <div className="container my-5">
      <ToastContainer />
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient Number</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Doctor Specialisation</th>
      <th scope="col">Payment</th>
    </tr>
  </thead>
  <tbody>
  {log?.map((e,i)=>{
    return(
    <tr>
      <th scope="row">{i+1}</th>
      <td>{e.date.slice(0,10)}</td>
      <td>{e.patientId.name}</td>
      <td>{e.patientId.phone}</td>
      <td>{e.doctorId.name}</td>
      <td>{e.doctorId.specialisation}</td>
      <td>{e.doctorId.pay}</td>
    </tr>
    )
  })}
  </tbody>
</table>
    </div>
  );
}

export default Specialist;
