import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './screen/Home/Home'
import Logs from './screen/Logs/Logs'
import ChatBot from './screen/ChatBot/ChatBot'
import DoctorProfile from './screen/DoctorProfile/DoctorProfile'
import PatientList from './screen/PatientList/PatientList'
import Pharmacy from './screen/Pharmacy/Pharmacy'
import Auth from './screen/Auth/Auth'
import Doctors from './screen/Doctors/Doctors'
import AddDoctor from './screen/AddDoctor/AddDoctor'
import EditDoctor from './screen/EditDoctor/EditDoctor'
import EditHospital from './screen/EditHospital/EditHospital'

const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/bot' element={<ChatBot />}/>
          <Route path='/hospital/edit' element={<EditHospital />}/>
          <Route path='/doctors' element={<Doctors />}/>
          <Route path='/doctors/add' element={<AddDoctor />}/>
          <Route path='/doctors/edit/:id' element={<EditDoctor/>}/>
          {/* <Route path='/doctors/:doc' element={<DoctorProfile />}/> */}
          {/* <Route path='/patient' element={<PatientList />}/> */}
          <Route path='/logs' element={<Logs />}/>
          <Route path='/auth' element={<Auth />}/>
      </Routes>
    )
  }
  
  export default AllRoutes