import React from 'react'
import logo from '../assets/dog-claw.png'
import '../styles/HomePage.css'
function HomeFront() {
    return (
        <>
            <div  className='home-front-container '>
                <div className='container-xl bg-color-1 p-5 home-heading shadow' >
                    <p className='lead text-1'>"Empower Change with Every Donation – Join Our Cause Today."</p>
                    <h1 className="display-1 text-2" >25, 366, 699</h1>
                </div>
                <div className="card text-center donate-card " >
                    <img className="card-img-top" style={{ margin: 'auto' }} src={logo} alt="Bootstrap" />
                    <div className="card-body">
                    <span className='fw-light color-grey'>(To strayscue)</span>
                        <input type="Enter Amount" className='my-2 text-center input-donate' placeholder="Enter Amount" />
                        <button className="btn btn-donate btn-light">Donate here <i className="fa-solid fa-paw"></i></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeFront
