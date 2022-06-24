import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Vibur:400' rel='stylesheet' type='text/css'/>
            <h1 className="text">Henry's kennel</h1>
            <Link className="link" to = './home'>
                <button className="button">Enter</button>
            </Link>
        </div>
    )
}
