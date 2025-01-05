import React, { useState } from "react";
import "./wallet.css"; // Custom CSS file
import logo from "./nfc logo (1).png";
const Wallet = () => {
  // Use state to track the active tab
  const [activeTab, setActiveTab] = useState("This Week");

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update the active tab
  };

  return (
    <div className="wallet-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
 <div >
          {/* Placeholder for the illustration */}
          <img style={{height: '4vh', width: "auto"}}
            src= {logo}
            alt="Mobile Login"
            className="login-image"
          />
        </div>        <div className="nav-icons">
          <i className="fas fa-home"></i>
          <i className="fas fa-user"></i>
        </div>
      </nav>
      <header className="wallet-header">
        <h1>Andrew Adel</h1>
      </header>

      {/* Wallet Section */}
      <div className="wallet-info">
        <div className="wallet-balance">
          <h2>Your Wallet</h2>
          <p>Balance:</p>
          <p>$36,850.00</p>
          <button className="recharge-btn">Recharge</button>
        </div>

        <div className="spending-limit">
          <h3>Spending Limit:</h3>
          <p>$200.00</p>
          <button className="edit-btn">
            <i className="fas fa-pen"></i> {/* Add the edit pen icon */}
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "This Week" ? "active" : ""}`}
          onClick={() => handleTabClick("This Week")}
        >
          This Week
        </button>
        <button
          className={`tab ${activeTab === "Last Week" ? "active" : ""}`}
          onClick={() => handleTabClick("Last Week")}
        >
          Last Week
        </button>
        <button
          className={`tab ${activeTab === "Last Month" ? "active" : ""}`}
          onClick={() => handleTabClick("Last Month")}
        >
          Last Month
        </button>
      </div>

      {/* Transactions Section */}
      <div className="transactions">
        <div className="transaction income">
          <p>Income</p>
          <p>+$6,500.00</p>
        </div>
        <div className="transaction income">
          <p>Income</p>
          <p>+$4,300.00</p>
        </div>
        <div className="transaction expense">
          <p>Spent</p>
          <p>-$280.00</p>
        </div>
        <div className="transaction expense">
          <p>Spent</p>
          <p>-$300.49</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
