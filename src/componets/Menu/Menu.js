import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export default function Menu() {
    return (
      
            <nav className="navbar navbar-light bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/list_currency">Exchange Rates</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator">Currency calculator</Link>
                    </li>
                </ul>
            </nav>
        

    )
}
