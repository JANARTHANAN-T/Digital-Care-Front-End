import React from "react";
import { Link, useParams } from "react-router-dom";
import BotButton from "../../component/BotButton/BotButton";
import "./logs.css";

function Specialist() {
  const user=1

  const stars =(n)=>{
    let i;
    let star=''
    for(i=0;i<n;i++){
       star=star+'⭐ '
    }
    return star
  }
  return (
    <div className="container my-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient Number</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Doctor Specialisation</th>
      <th scope="col">Token Number</th>
      <th scope="col">Payment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>30.11.2022</td>
      <td>Arun</td>
      <td>7986789098</td>
      <td>Jagan</td>
      <td>ENT</td>
      <td>13</td>
      <td>300</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>30.11.2022</td>
      <td>Arjun</td>
      <td>8887890987</td>
      <td>Nithesh</td>
      <td>Psycholist</td>
      <td>45</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>30.11.2022</td>
      <td>Karthi</td>
      <td>9994712345</td>
      <td>Praveen</td>
      <td>Neurology</td>
      <td>2</td>
      <td>250</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default Specialist;
