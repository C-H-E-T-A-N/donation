import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from "react-router-dom";
// import profileLogo from '../assets/dog-claw.png'
import { Link } from 'react-router-dom'
import NgoCases from '../page components/NgoCases'
import '../styles/NgoProfilePage.css'
function NgoProfilePage() {

    const {id} = useParams()

    const getNgoById = useCallback(async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/ngos/getngo/${id}/`);
          const data = await response.json();
          setNgo(data)
          console.log(data);
        } catch (error) {
          // Handle error, e.g., set an error state or display an error message
          console.error("Error fetching NGOs:", error);
        }
      }, [id]);
    
      const [ngo, setNgo] = useState([]);

    useEffect(()=>{
        getNgoById()
    },[getNgoById])
    return (
        <div className="container text-center my-3">
            <div className='container shadow' style={{ backgroundColor: '#EC9D45', borderRadius: '0.7rem', padding: '2rem' }}>
                <div className="row profile-row">
                    <div className="col-5 profile-col">
                        <img  src={`http://127.0.0.1:8000${ngo.ngo_logo}`} className="img-fluid rounded float-start shadow-2" alt="..." />
                    </div>
                    <div className="col-7  profile-col table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name:</th>
                                    <th scope="col" className='text-start'>{ngo.ngo_name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Our Mission:</th>
                                    <td className='text-start'>{ngo.mission_statement}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cases Treated:</th>
                                    <td className='text-start'>{ngo.offline_cases}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Staff:</th>
                                    <td className='text-start'>138</td>
                                </tr>
                                <tr>
                                    <th scope="row">Helpline No:</th>
                                    <td className='text-start'>{ngo.helpline_number}, {ngo.alternate_helpline_number}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                            <button className="btn btn-donate mx-auto btn-light">Donate <i className="fa-solid fa-paw"></i></button>
                            <div className=' my-2 mx-auto p-2'
                                style={{
                                    borderRadius: "7px",
                                    display:'flex',
                                    fontSize:'1.5rem',
                                    backgroundColor:'#ffffff',
                                    justifyContent:'center',
                                    boxShadow:
                                        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                                }}
                            >
                                <Link
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    to={ngo.facebook_page}
                                >
                                    <i className="fa-brands mx-2 fa-facebook"></i>
                                </Link>
                                <Link
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    to={ngo.twitter_page}
                                >
                                    <i className="fa-brands mx-2 fa-twitter"></i>
                                </Link>
                                <Link
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    to={ngo.instagram_page}
                                >
                                    <i className="fa-brands mx-2 fa-instagram"></i>
                                </Link>
                                <Link
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    to="#"
                                >
                                    <i className="fa-brands mx-2 fa-threads"></i>
                                </Link>
                            </div>
                        </div>

            <NgoCases cases = {ngo?.cases?.cases}/>
            </div>
        </div>
    )
}

export default NgoProfilePage
