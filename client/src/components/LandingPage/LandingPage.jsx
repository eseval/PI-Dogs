import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="background">
            <div className="landing_page">
                <h1>Dogs' shelter</h1>
                <Link to = '/home'>
                    <button className="button">Enter</button>
                </Link>
            </div>
        </div>
    )
}
