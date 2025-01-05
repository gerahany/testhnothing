import React from 'react';
import './LoginPage.css'; // Add your CSS file path here
import nfcimage from './logback.png';
import Wallet from "./wallet"; // Your Wallet component
import { useNavigate } from "react-router-dom";
import "./LogoAnimation.css";
import c from "./Group 875 (1).png";
import a from "./a.png";
import s from "./s.png";
import h from "./h.png";
import l from "./watch.png";
import e from "./e.png";


const LoginPage = () => {
    const navigate = useNavigate();

  const handleVerifyClick = () => {
    navigate("/wallet"); // Redirect to the wallet page
  };
  
  return (
    <div className="login-container">
      <div className="login-content">
      <div className="image-section">
  {/* LogoAnimation positioned over the image */}
  <div className="logo-container" >
       <div className="logo-partc" style={{ animationDelay: "0s" }}>
         <img src={c} alt="C" className="logo-image" style={{ fontSize: "large"}} />
       </div>
       <div className="logo-parta" style={{ animationDelay: "0.5s" }}>
         <img src={a} alt="a" className="logo-image" />
       </div>
       <div className="logo-parta" style={{ animationDelay: "1s" }}>
         <img src={s} alt="s" className="logo-image" />
       </div>
       <div className="logo-parth" style={{ animationDelay: "1.5s" }}>
         <img src={h} alt="h" className="logo-image" />
       </div>
       <div className="logo-partc" style={{ animationDelay: "2s" }}>
         <img src={l} alt="l" className="logo-image" />
       </div>
       <div className="logo-parta" style={{ animationDelay: "2.5s" }}>
         <img src={e} alt="e" className="logo-image" />
       </div>
       <div className="logo-parta" style={{ animationDelay: "3s" }}>
         <img src={s} alt="s" className="logo-image" />
       </div>
       <div className="logo-parta" style={{ animationDelay: "3.5s" }}>
         <img src={s} alt="s" className="logo-image" />
       </div>
     </div>




  <img
    src={nfcimage}
    alt="Mobile Login"
    className="login-image"
  />
</div>

        
        {/* Form Section */}
        <div className="form-section">
          <form className="login-form">
            <div className="input-group">
              <span className="country-code">+20</span>
              <input style={{backgroundColor: '#f5f5f5'}}
                type="text"
                placeholder="Enter Mobile Number"
                className="mobile-input"
              />
            </div>
            <button
              type="button"
              className="verify-button"
              onClick={handleVerifyClick}
            >
              Verify
            </button>
          </form>
          <p className="privacy-text">
            Your personal details are safe with us <br />
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;