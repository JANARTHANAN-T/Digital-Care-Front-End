import React, {useState, useEffect} from 'react'
import login from '../../assert/image/login.png'
import FileBase64 from 'react-file-base64';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function AddDoctor() {
    const navigate = useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [specialisation,setSpecialisation]=useState('')
    const [pay,setPay]=useState(0)
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [image, setImage] = useState();
    const user=JSON.parse(localStorage.getItem('hospital'))
    useEffect(() => {
      if (images.length < 1) return;
      const newImageURLs = [];
      images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
      setImageURLs(newImageURLs);
    }, [images]);
  
    const onImageChange = (e) => {
      setImages([...e.target.files]);
    };

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const img=imageURLs[0]
        await axios({
            method: 'post',
            url: `http://localhost:8080/hospital/add/doctor/${user._id}`,
            data: {name,email,phone,specialisation,pay,img},
          }).then(
            (res)=>{
              localStorage.setItem("hospital", JSON.stringify(res.data));
              toast("Doctor Profile is added")
              navigate("/doctors")
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
             <div className='heading-1 text-center'>ADD DOCTOR</div>
                <div className="card shadow p-1">
                    <div className="card-body">
                        <label htmlFor='name' className='form-label fs-5 my-2'>Name <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
                        <div className="row">
                            <div className="col md-6">
                                <label htmlFor='email' className='form-label fs-5 my-2'>Email <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="col md-6">
                                <label htmlFor='mobile' className='form-label fs-5 my-2'>Mobile <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor='specialisation' className='form-label fs-5 my-2'>Specialisation <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Specialisation' id='specialisation' value={specialisation} onChange={(e)=>setSpecialisation(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor='pay' className='form-label fs-5 my-2'>Pay Amount<span className='text-danger'>*</span></label>
                                <input type="number" className='form-control' placeholder='Payment' id='pay' value={pay} onChange={(e)=>setPay(e.target.value)} />
                            </div>
                        </div>
                        <label className="label my-4">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16"><path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>
                                <span className="fs-5 ms-2 fw-bold">Upload Profile Image</span> 
                            </div>
                                <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={onImageChange}
                                />
                            </label>
                            {/* <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setImage(image)} /> */}
                        <button className='btn btn-login my-3' onClick={handleSubmit}>Add</button>
                    </div>
                </div>
             </div>  
            </div>
        </div>
    </div>
  )
}

export default AddDoctor