import React from "react";
import {useState, useEffect} from "react";
import AddArrangement from "../Pages/AddEvent/AddArrangementDisplay";
import { BrowserRouter, Route, Link } from "react-router-dom";


const HeaderBar = () => {
    
    
    
    return (
        <nav>
          <ul>
            <li>
              <Link to="arrangementerioslo\src\Pages\App.js">Hjem</Link>
            </li>
            <li>
              <Link to="arrangementerioslo\src\Pages\ViewEvents\EventView.js">Arrangementer</Link>
            </li>
            <li>
              <Link to="arrangementerioslo\src\Pages\AddEvent\AddArrangementDisplay.js">Legg til arrangement</Link>
            </li>
          </ul>
        </nav>
      );
    
    
}

export default HeaderBar;