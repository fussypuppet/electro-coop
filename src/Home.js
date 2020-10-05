import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                <h1>Electro-Coop</h1>
                <Link to="/login">Log In</Link>
            </header>
        </div>
    )
}

export default Home;