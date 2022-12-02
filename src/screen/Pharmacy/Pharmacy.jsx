import React, { useState, useEffect } from "react";
import "./Pharmacy.css";
import nodata from '../../assert/image/nodata.png'

function Pharmacy() {
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
    <div className="container my-5">
        <div className="text-center fs-2 heading-2">Easy Process to buy medicines</div>
        <div className="row my-5">
            <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#1385ae" className="bi bi-1-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/></svg>
            <span className="m-3">Upload valid Prescription</span>
            </div>
            </div>
            <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#1385ae" className="bi bi-2-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/></svg>
            <span className="m-3">Receive confirmation call</span>
            </div>
            </div>
            <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#1385ae" className="bi bi-3-circle" viewBox="0 0 16 16"><path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/></svg>
            <span className="m-3">Delivered to your location</span>
            </div>
            </div>
        </div>
        <div class="row">
        <div className="col-md-6 d-flex justify-content-center  text-center p-2">
          <label className="label">
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
        </div>
        <div className="col-md-6 text-center p-2">
          <button className="btn btn-success">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/></svg>
            <span className="fs-5 ms-2 fw-bold">Send Priscription</span> 
          </button>
        </div>
      </div>
      {images.length===0?
      <div className="m-5 text-center pt-5">
      <img src={nodata} height="200px" alt="no file selected"/>
        <div className="fs-3">
        No image file uploaded.
        </div>
    </div>:
    <div className="row m-5 d-flex justify-content-center">
      {imageURLs.map((imageSrc) => (
        <div className="col-md-4">
        <div className="card shadow my-3">
          <div className="card-body">
            <img src={imageSrc}  className="img-fluid"  alt="prescription"/>
          </div>
        </div>
        </div>
      ))}
    </div>
      }
    </div>
  );
}

export default Pharmacy;
