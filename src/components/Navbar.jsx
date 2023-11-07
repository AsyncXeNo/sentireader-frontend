import React from 'react';
import { useEffect, useState } from 'react';


const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [refreshCount, setRefreshCount] = useState(-1000000)
 
    const handleLogout = (event) => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('name')
    }

    useEffect(() => {
        if (localStorage.getItem('jwt')) setLoggedIn(true)
        else setLoggedIn(false)

        const intervalID = setInterval(() => {
            setRefreshCount(refreshCount + 1)
        }, 3000)

        return () => {
            clearInterval(intervalID)
        }
    }, [refreshCount])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'transparent' }}>
            
            <div className="container-fluid mx-4">
                
                <a className="navbar-brand" href="/">Sentireader</a>

                <ul className="navbar-nav">

                    {!loggedIn ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    Register
                                </a>
                            </li>
                        </>
                    ): (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleLogout} href="/">
                                    Logout
                                </a>
                            </li>
                        </>
                    )}

                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>

                </ul>
                
            </div>
            
        </nav>
    )
    
}


export default Navbar
