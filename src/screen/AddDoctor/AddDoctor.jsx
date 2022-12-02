import React, {useState, useEffect} from 'react'
import login from '../../assert/image/login.png'

function AddDoctor() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    useEffect(() => {
      if (images.length < 1) return;
      const newImageURLs = [];
      images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
      setImageURLs(newImageURLs);
    }, [images]);
  
    const onImageChange = (e) => {
      setImages([...e.target.files]);
    };

  return (
    <div className='container'>
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
                        <input type="text" className='form-control' placeholder='Name' id='name' />
                        <div className="row">
                            <div className="col md-6">
                                <label htmlFor='email' className='form-label fs-5 my-2'>Email <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Email' id='email' />
                            </div>
                            <div className="col md-6">
                                <label htmlFor='mobile' className='form-label fs-5 my-2'>Mobile <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor='specialisation' className='form-label fs-5 my-2'>Specialisation <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control' placeholder='Specialisation' id='specialisation' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor='pay' className='form-label fs-5 my-2'>Pay Amount<span className='text-danger'>*</span></label>
                                <input type="number" className='form-control' placeholder='Payment' id='pay' />
                            </div>
                        </div>
                        <label className="label my-4">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16"><path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>
                                <span className="fs-5 ms-2 fw-bold">Upload Priscription</span> 
                            </div>
                                <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={onImageChange}
                                />
                            </label>
                        <button className='btn btn-login my-3'>Add</button>
                    </div>
                </div>
             </div>  
            </div>
        </div>
    </div>
  )
}

export default AddDoctor