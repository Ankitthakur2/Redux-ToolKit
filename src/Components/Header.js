import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const Items = useSelector((state) => state.add);
  const [Button, setButton] = useState(true);
  const handleButtonClick = () => {
    setButton(!Button);
  };
  return (
    <div className="header">
      <div className="website">TheOnlineStore.com</div>

      <div cl="div-align">
        <button onClick={handleButtonClick} className="card">
          {Button ? (
            <Link to="/productlist">Card</Link>
          ) : (
            <Link to="/">Home</Link>
          )}
        </button>

        <div className="items">items:{Items.length}</div>
      </div>
    </div>
  );
}
