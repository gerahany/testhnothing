import React from "react";
import "./LogoAnimation.css";
import Logo from "./nfc logo.png";
import c from "./c.png";
import a from "./a.png";
import s from "./s.png";
import h from "./h.png";
import l from "./bxs_watch-alt.png";
import e from "./e.png";

const LogoAnimation = () => {
  return (
    <div className="logo-container">
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
  );
};

export default LogoAnimation;
