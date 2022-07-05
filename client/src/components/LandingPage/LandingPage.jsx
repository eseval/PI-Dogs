import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="background">
            <h1>La perrera</h1>
            <Link to = '/home'>
                <button className="button">Enter</button>
            </Link>
        </div>
    )
}
