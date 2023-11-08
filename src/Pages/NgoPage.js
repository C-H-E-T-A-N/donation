import React, { useState } from 'react'
import '../styles/NgoPage.css'
import NgoProfileContainer from '../page components/NgoProfileContainer'
import { useLocation, useNavigate } from 'react-router-dom'
function NgoPage() {
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
    <>

      <div className='container-xl bg-color-1 py-4 ngo-front-container shadow' >
        <div >
          <h1 style={{ marginBottom: '30px', fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Discover NGO's</h1>
          <form action="submit" style={{ display: 'flex', alignItems: 'center' }}>
            <input className='mx-2 menu-left-input text-center input-donate' onChange={(e)=> setKeyword(e.target.value)} placeholder='Enter NGO Name' type="text" />
            <button className='btn btn-donate btn-light' onClick={submitHandler} style={{ fontSize: '1.8rem' }} ><i className="fa-regular fa-paper-plane" style={{ fontSize:"2rem", padding:'10px'}}></i></button>
          </form>
        </div>
      </div>
    <NgoProfileContainer/>
    </>
  )
}

export default NgoPage
