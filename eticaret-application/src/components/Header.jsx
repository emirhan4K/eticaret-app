import React, { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";

function Header() {
  const [ theme, setTheme ] = useState(false); 

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "rgb(29, 29, 29)";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "rgb(29, 29, 29)";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.png" />
        <p className="logo-text">EMİRHAN A.Ş</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Ara..." />
        <div>
         {
          theme ? <FaMoon className="icon" onClick={changeTheme} /> :  <CiLight className="icon" onClick={changeTheme} />
         }
          <CiShoppingBasket className="icon"  />
        </div>
      </div>
    </div>
  );
}

export default Header;
