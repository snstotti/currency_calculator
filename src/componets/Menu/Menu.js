import React from 'react'

export default function Menu() {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Exchange Rates</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Currency calculator</a>
                </li>
            </ul>
        </nav>
    )
}
