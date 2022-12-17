import React, {useState} from 'react'
import './Auth.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import login from '../../assert/image/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth() {
    const navigate = useNavigate();
    const [log,setLogin]=useState(true)
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const [name,setName]=useState('')
    const [address,setAddress]=useState()
    const [cpassword,setCpassword]=useState()
    const [phone,setPhone]=useState()

    const handleSignUp = async(e) =>{
        e.preventDefault()
        if(password===cpassword){
            await axios({
              method: 'post',
              url: 'http://localhost:8080/hospital/signup',
              data: {name,email,phone,address,password}
            }).then(
              (res)=>{
                localStorage.setItem("hospital", JSON.stringify(res.data.result));
                toast("You have successfully registered!!!")
                navigate("/")
            }
            ).catch((err)=>{
              console.log(err)
              toast(err.message)
            })
          }else{
            toast('Invalid Creditials: Check Password')
          }
    }

    const handleLogin = async(e) =>{
        e.preventDefault()
        
            await axios({
              method: 'post',
              url: 'http://localhost:8080/hospital/login',
              data: {email,password}
            }).then(
              (res)=>{
                localStorage.setItem("hospital", JSON.stringify(res.data.result));
                toast("You have successfully logged In !!!")
                navigate("/")
            }
            ).catch((err)=>{
              console.log(err)
              toast("Check Your Creditials: Your Not Found")
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
            {log?
             <div>
             <div className='heading-1 text-center'>LOG IN</div>
                <div className="card shadow p-1">
                    <div className="card-body">
                        <label htmlFor='email' className='form-label fs-5'>Email <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor='password' className='form-label fs-5 mt-3'>Password <span className='text-danger'>*</span></label>
                        <input type="password" className='form-control' placeholder='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <div className='d-flex justify-content-end'>
                            <button className='btn'>forget password</button>
                        </div>
                        <button className='btn btn-login' onClick={handleLogin}>LogIn</button>
                    </div>
                </div>
                <div className='my-4 text-center'>
                    <p>Don't have an account? <span style={{color:'#1385ae',cursor:'pointer'}} onClick={()=>{setLogin(!log)}}>Sign Up</span></p>
                </div>
             </div>  :
             <div>
             
                
             <div className='heading-1 text-center'>SIGN UP</div>
                <div className="card shadow p-1">
                    <div className="card-body">
                        <label htmlFor='name' className='form-label fs-5'>Hospital Name <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Name' id='name ' value={name} onChange={(e)=>setName(e.target.value)} />
                        <label htmlFor='email' className='form-label fs-5 mt-3'>Email <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor='mobile' className='form-label fs-5 mt-3'>Contact Number <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        <label htmlFor='role' className='form-label fs-5 mt-3'>Address <span className='text-danger'>*</span></label>
                        <textarea name="" id="" className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                        <div className="row">
                            <div className="col-md-6">
                            <label htmlFor='password' className='form-label fs-5 mt-3'>Password <span className='text-danger'>*</span></label>
                            <input type="password" className='form-control' placeholder='6-10 character' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor='confirm-password' className='form-label fs-5 mt-3'>Confirm Password <span className='text-danger'>*</span></label>
                            <input type="password" className='form-control' placeholder='6-10 character' id='confirm-password' value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
                        </div>
                        </div>
                        <button className='btn btn-login' onClick={handleSignUp}>Sign Up</button>
                        </div>
                        </div>
                       
                <div className='my-4 text-center'>
                    <p>Already have an account? <span style={{color:'#1385ae',cursor:'pointer'}} onClick={()=>{setLogin(!log)}}>Log In</span></p>
                </div>
             </div> 
            }
            </div>
                {/* <div className="col-md-6 pt-3">
                <div className="card shadow ">
                            <div className="card-body">  
                            <div className="row">
                                <div className="col-md-6">    
                                    <label htmlFor='dob' className='form-label fs-5 mt-3'>Date of Birth <span className='text-danger'>*</span></label>
                                    <input type="date" className='form-control' id='dob' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor='blood' className='form-label fs-5 mt-3'>Blood Group <span className='text-danger'>*</span></label>
                                    <input type="text" className='form-control' id='blood' placeholder='eg,. O+' />
                                </div>
                            </div>                     
                    
                        <label htmlFor='gender' className='form-label fs-5 mt-3'>Gender <span className='text-danger'>*</span></label>
                        <div className='form-check'>
                        <input type="radio" name="gender" id="male" className='form-check-input' />
                        <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div className='form-check'>
                        <input type="radio" name="gender" id="female" className='form-check-input' />
                        <label class="form-check-label" for="female">Female</label>
                        </div>
                        <label htmlFor='password' className='form-label fs-5 mt-3'>Password <span className='text-danger'>*</span></label>
                        <input type="password" className='form-control' placeholder='6-10 character' id='password' />
                        <label htmlFor='confirm-password' className='form-label fs-5 mt-3'>Confirm Password <span className='text-danger'>*</span></label>
                        <input type="password" className='form-control' placeholder='6-10 character' id='confirm-password' />
                    </div>
                </div>

                </div> */}
            
     
            {/* <div className="col-md-6 pt-3">
                <div className="card shadow ">
                            <div className="card-body">       
                        <label htmlFor='current-role' className='form-label fs-5 mt-3'>Current Role <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='current-role' placeholder='Current Role' />
                        <label htmlFor='working' className='form-label fs-5 mt-3'>Working Hospital <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Work Place' id='working' />
                        <label htmlFor='experience' className='form-label fs-5 mt-3'>Year of Experience <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='In numbers' id='experience' />
                        <label htmlFor='doctor-id' className='form-label fs-5 mt-3'>Doctor ID <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='doctor-id' placeholder='Doctor ID' />
                        <label htmlFor='degree' className='form-label fs-5 mt-3'>Degree <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='degree' placeholder='Degree ex,. M.B.B.S, B.D.S,..' />
                    </div>
                </div>
                </div> */}
        
                {/* <div className="col-md-6 pt-3">
                <div className="card shadow ">
                            <div className="card-body">       
                        <label htmlFor='specialisation' className='form-label fs-5 mt-3'>Specialisation <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='specialisation' placeholder='Specialisation' />
                        <label htmlFor='university' className='form-label fs-5 mt-3'>University of study <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='University' id='university' />
                        <label className='form-label fs-5 mt-3'>Preferred Time <span className='text-danger'>*</span></label>
                        <div className="row">
                            <div className="col-md-6">
                        <label htmlFor='start' className='form-label fs-5 mt-1'>Starts <span className='text-danger'>*</span></label>
                        <input type="time" className='form-control' id='start' />
                            </div>
                            <div className="col-md-6">
                        <label htmlFor='end' className='form-label fs-5 mt-1'>Ends <span className='text-danger'>*</span></label>
                        <input type="time" className='form-control' id='end' />
                            </div>
                        </div>
                        <label htmlFor='clinic-address' className='form-label fs-5 mt-3'>Clinic Address <span className='text-danger'>*</span></label>
                        <textarea rows='3' className='form-control' id='clinic-address' placeholder='' ></textarea>

                    </div>
                </div>
                </div> */}
          
            {/* <div className='container text-center'>
            <button className='btn btn-login my-5'>Sign up</button>
            </div> */}
            
        </div>
    </div>
  )
}

export default Auth