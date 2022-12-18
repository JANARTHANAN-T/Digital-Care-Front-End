import React, {useEffect} from 'react'
import './Home.css'
import bannerdoctors from '../../assert/image/banner-doctors.png'
import icon1 from '../../assert/image/icon-1.png'
import icon2 from '../../assert/image/icon-2.png'
import icon3 from '../../assert/image/icon-3.png'
import icon4 from '../../assert/image/icon-4.png'
import icon5 from '../../assert/image/icon-5.png'
import icon6 from '../../assert/image/icon-6.png'
import specility from '../../assert/image/specility.png'
import choosedoc from '../../assert/image/choosedoc-1.png'
import doconline from '../../assert/image/doc-online1.png'
import buymedicine from '../../assert/image/buy-medicine.png'
import { NavLink, Link } from 'react-router-dom'
import ChatBot from "../ChatBot/ChatBot";
import BotButton from "../../component/BotButton/BotButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Home() {
  useEffect(() => {
    toast("Welcome To Digital Care !!!")
  });
  return (
    <div>
    {/* Landing Page */}
    <Link to='/bot'>
              <BotButton />
        </Link>
        <ToastContainer />
      <div className="landing-page row px-5 pt-5 d-flex align-items-center mx-0">
        <div className="col-md-6 ">
          <div >
            <div className='heading-1'>The right care, is wherever you are.</div>
            <div className='heading-2'>Reach India’s Top hospitals, Safely From Home.</div>
            <div className='heading-1'>Download our App in <span className='batch'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
              <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
            </svg>
            </span></div>
            <a href="https://drive.google.com/drive/folders/1me45FCgAdMSH1yCA8wiuYlVJtVBZThjq?usp=share_link" target="_blank" className='btn btn-1 '>Download Now</a>
          </div>
        </div>
        <div className="col-md-6">
          <img className='img-fluid hidden-img mx-auto' src={bannerdoctors}  alt="" />
        </div>
      </div>
      {/* Why page */}
      <div className='container'>
        <div className='heading-3 ms-2 mt-5 p-5 '>Why Reach on Digital Care</div>
        <div className="row">
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon1} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Convenience</div>
                  <p>Most patients prefer online booking due to the easy and convenient process involved.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon2} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Accessibility</div>
                  <p>With 30+ home , 4000+ Doctors and partnerships with more than 600 renowned hospitals across the nation.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon3} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Security and privacy</div>
                  <p>Since online booking in India are still picking up, it comes with popular belief that your medical information</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon4} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Complete confidentiality</div>
                  <p>Our intuitive platform facilitates a quick online doctor in hospitals about any concern, with complete confidentiality.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon5} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Certified Doctors</div>
                  <p>We have a broad network of top specialized doctors, with over 10 years of experience to provide you with quality care.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon6} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Affordability</div>
                  <p>Online booking help you save time since it costs a fraction of the time compared to physically visiting a hospitals.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* how to use page */}
      <div className='container'>
      <div className='heading-3 ms-2 mt-5 p-5 '>How does an online doctor consultation work</div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={specility} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Choose hospitals</div>
            <p>Choose a hospitals based on the medical condition you have. If you are unsure, you can consult with a general physician to guide you through your health condition.</p>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={choosedoc} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Choose your doctor</div>
            <p>Choose your doctor based on your preferences. Few parameters you can consider are the specialization,  hospitals they work in, and the location they are based out of.</p>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={doconline} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Book online </div>
            <p>Consult a doctor online either through chat, audio call, or video call and address your health problems. Apart from medical advice, the doctor will also give lifestyle tips for your condition.</p>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={buymedicine} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Reduce paper works</div>
            <p>Minute access to doctors and care giver's  and give the best of medical facilities to the patient. Patient's medical history allows him/her to take steps to reduce his or her risk. keeping a track of a patient’s medical health history saves valuable time</p>
        </div>
      </div>
      </div>
      {/* contact */}

    </div>
  )
}

export default Home