import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import login from '../../assert/image/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth() {
    const user=JSON.parse(localStorage.getItem('hospital'))
    const navigate = useNavigate();
    const [log,setLogin]=useState(true)
    const [email,setEmail]=useState(user.email)
    const [name,setName]=useState(user.name)
    const [address,setAddress]=useState(user.address)
    const [phone,setPhone]=useState(user.phone)
    const [district,setDistrict]=useState(user.district)

    const handleEdit =  async(e)=>{
        e.preventDefault()
        console.log(name,email,district,address,phone)
        await axios({
            method: 'post',
            url: `http://localhost:8080/hospital/update/${user._id}`,
            data: {name,email,district,address,phone},
          }).then(
            (res)=>{
              localStorage.setItem("hospital", JSON.stringify(res.data));
              toast("Hospital Detail is updated")
              navigate("/")
          }
          ).catch((err)=>{
            console.log(err)
            toast(err.message)
          })
    }
  return (
    <div className='container'>
        <ToastContainer />
        <div className="row my-3 d-flex align-items-center">
            <div className="col-md-6">
                <img src={login} className="img-fluid hidden-img" alt='login' />
            </div>
        
            <div className="col-md-6 pt-3">
             <div>
             
                
             <div className='heading-1 text-center'>EDIT DETAILS</div>
                <div className="card shadow p-1">
                    <div className="card-body">
                    <label htmlFor='name' className='form-label fs-5'>Hospital Name <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Name' id='name ' value={name} onChange={(e)=>setName(e.target.value)} />
                        <label htmlFor='email' className='form-label fs-5 mt-3'>Email <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor='mobile' className='form-label fs-5 mt-3'>Contact Number <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                            <label htmlFor='mobile' className='form-label fs-5 mt-3'>District <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' value={district} onChange={(e)=>setDistrict(e.target.value)} />
                            </div>
                        </div>
                        <label htmlFor='role' className='form-label fs-5 mt-3'>Address <span className='text-danger'>*</span></label>
                        <textarea name="" id="" className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                        <button className='btn btn-login my-4' onClick={handleEdit}>Edit</button>
                        </div>
                        </div>
             </div> 
          
            </div>
        </div>
    </div>
  )
}

export default Auth