import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
    return (

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/users" >
                    <Users/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Routes>
        </Router>

    )
}

function Home() {
    return <h1>Hello Home</h1>;
}
function About() {
    return <h1>About</h1>;
}
function Users() {
    return <h1>Users</h1>;
}