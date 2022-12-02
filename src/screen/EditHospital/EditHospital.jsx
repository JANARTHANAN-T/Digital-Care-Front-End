import React, {useState} from 'react'
import login from '../../assert/image/login.png'

function Auth() {
    const [log,setLogin]=useState(true)
  return (
    <div className='container'>
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
                        <input type="text" className='form-control' placeholder='Name' id='name ' />
                        <label htmlFor='email' className='form-label fs-5 mt-3'>Email <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Email' id='email' />
                        <label htmlFor='mobile' className='form-label fs-5 mt-3'>Contact Number <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' />
                        <label htmlFor='role' className='form-label fs-5 mt-3'>Address <span className='text-danger'>*</span></label>
                        <textarea name="" id="" className='form-control'></textarea>
                        <button className='btn btn-login my-4'>Edit</button>
                        </div>
                        </div>
             </div> 
          
            </div>
        </div>
    </div>
  )
}

export default Auth