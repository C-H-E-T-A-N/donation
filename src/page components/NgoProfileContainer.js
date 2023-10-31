import React, { useState, useCallback, useEffect } from "react";
import logo from "../assets/dog-claw.png";
import { Link } from "react-router-dom";

function NgoProfileContainer() {
  const [allNgos, setAllNgos] = useState([]);

  const getAllNgos = useCallback(async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/ngos/allngos/`);
      const data = await response.json();
      console.log(data);
      setAllNgos(data);
    } catch (error) {
      // Handle error, e.g., set an error state or display an error message
      console.error("Error fetching NGOs:", error);
    }
  }, []);

  useEffect(() => {
    getAllNgos();
  }, [getAllNgos]);


  return (
    <div className="container" style={{ color: "white" }}>
      <div className="bg-color-1 my-5 p-5 shadow" style={{ borderRadius: "40px" }}>
        <h1 style={{ fontWeight: "bold" }}>Most Searched:</h1>
        <div className="row" style={{ textAlign: "center" }}>
          {allNgos.map((ngo, index) => (
            <div key={index} className="col-sm my-3">
              <div className="card profile-card" key={index}>
                <img
                  // src={`http://127.0.0.1:8000${ngo.ngo_logo}`}
                  src={logo}
                  className="card-img-profile"
                  alt="story-img"
                  width='50%'
                  style={{ borderRadius: "10px", margin: "auto" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    {ngo.ngo_name}
                  </p>
                  <div
                    style={{
                      padding: "0.5 rem",
                      borderRadius: "7px",
                      width: "fit-content",
                      margin: "auto",
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
                <Link to={`/ngoprofile/${ngo.id}`} className=" profile-btn btn btn-donate">VIEW</Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default NgoProfileContainer;
