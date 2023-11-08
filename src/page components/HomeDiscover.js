import React, {useState} from 'react'
import '../styles/HomePage.css'
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/brown puppy.png';
function HomeDiscover() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const submitHandler =(e)=>{
    e.preventDefault()
    if(keyword){
        navigate(`/ngopage/?keyword=${keyword}`)
    }else{
        navigate(location.pathname)
    }
  }
  return (
    <div className='container' style={{ color: 'white' }}>
      <div className='bg-color-1 my-3 p-5 home-discover-menu' >
        <div id='menu-left'>
          <h1 style={{ marginBottom: '57px', fontSize: '4rem', fontWeight: 'bold' }}>Discover NGO's</h1>
          <form action="submit" style={{ display: 'flex', alignItems: 'center' }}>
            <input className='mx-2 menu-left-input text-center input-donate' onChange={(e)=> setKeyword(e.target.value)} placeholder='Enter NGO Name' type="text" />
            <button className='btn btn-donate btn-light' onClick={submitHandler} style={{ fontSize: '1.8rem' }} ><i className="fa-regular fa-paper-plane" style={{fontSize:"2rem", padding:'10px'}}></i></button>
          </form>
        </div>
        <div id='menu-right' style={{ textAlign: 'center' }}>
          <img style={{ margin: 'auto', borderRadius: '40px', width: '65%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} src={logo} alt="Bootstrap" />
        </div>
      </div>
      <div className='bg-color-1 p-5 my-5' style={{ borderRadius: '40px', boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px', }}>
        <h1 className='text-center' style={{ fontWeight: 'bold' }}>Our Impact</h1>
        <div >
          <div className='impact-section' >
            <p>
              <span style={{fontWeight:'bold'}}>23k+</span>
              <span className='impact-subHeaders'>Affliated</span>
              <span className='impact-subHeaders'>NGO's</span>
            </p>
            <p>
              <span style={{fontWeight:'bold'}}>1.3M+</span>
              <span className='impact-subHeaders'>Cases</span>
              <span className='impact-subHeaders'>Treated</span>
            </p>
            <p>
              <span style={{fontWeight:'bold'}}>57k+</span>
              <span className='impact-subHeaders'>Workers</span>
            </p>
          </div>
          <div className='impact-section'>
          <p>
              <span style={{fontWeight:'bold'}}>29k+</span>
              <span className='impact-subHeaders'>Reporters</span>
            </p>
            <p>
              <span style={{fontWeight:'bold'}}>16</span>
              <span className='impact-subHeaders'>States</span>
            </p>
            <p>
              <span style={{fontWeight:'bold'}}>1.8M+</span>
              <span className='impact-subHeaders'>Donors</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDiscover
