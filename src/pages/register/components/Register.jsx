import axios from "axios"

import { useState } from "react"

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {

        setError('')

        event.preventDefault()

        if (password != confirmPassword) {
            setError('Passwords do not match')
            return
        } 

        axios
            .post(`http://127.0.0.1:8000/api/register/`, {
                username: username,
                password: password,
                email: email,
                first_name: firstName,
                last_name: lastName
            })
            .then((response) => {
                navigate('/login')
            })
            .catch((error) => {
                setError(error.response.data.username[0])
            })
    }

    return (
        <>       
            <div className="container-fluid m-5">
                <div className="form m-5" style={{ fontFamily: 'Tilt Neon, sans-serif', position: 'absolute', top: '45%', transform: 'translateY(-50%)' }}>

                    <div className='mx-5'>
                        
                        <h1 style={{ color: '#008170', fontSize: 45 }}>
                            Register for Journal
                        </h1>
                        
                    </div>

                    <form className="m-5" onSubmit={handleSubmit} >

                        {/* First Name */}
                        
                        <div className="mb-3">

                            <label style={{ color: '#93B1A6', width: '150px' }}>
                                Fist Name
                            </label>
                        
                            <input
                            className=""
                            type='text' 
                            name='first_name' 
                            required
                            value={firstName}
                            onChange={e => {setFirstName(e.target.value)}}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '20vh', color: '#93B1A6', borderRadius: '3px' }}
                            />
                            
                        </div>

                        {/* Last Name */}
                        
                        <div className="mb-3">

                            <label style={{ color: '#93B1A6', width: '150px' }}>
                                Last Name
                            </label>
                        
                            <input
                            className=""
                            type='text' 
                            name='last_name' 
                            required
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '20vh', color: '#93B1A6', borderRadius: '3px' }}
                            />
                            
                        </div>

                        {/* Username */}
                        
                        <div className="mb-3">

                            <label style={{ color: '#93B1A6', width: '150px' }}>
                                Username
                            </label>
                        
                            <input
                            className=""
                            type='text' 
                            name='username' 
                            required
                            value={username}
                            onChange={(e => setUsername(e.target.value))}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '20vh', color: '#93B1A6', borderRadius: '3px' }}
                            />
                            
                        </div>

                        {/* Email */}
                         
                        <div className="mb-3">
                            
                            <label style={{ color: '#93B1A6', width: '150px' }}>
                                Email
                            </label>


                            <input 
                            type='email' 
                            name='email' 
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '30vh', color: '#93B1A6', borderRadius: '3px' }}
                            />   

                        </div>

                        {/* Password */}

                        <div className="mb-3">
                            
                            <label style={{ color: '#93B1A6', width: '150px' }}>
                                Password
                            </label>


                            <input 
                            type='password' 
                            name='password' 
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '20vh', color: '#93B1A6', borderRadius: '3px' }}
                            />   

                        </div>  
                        
                        {/* Confirm Password */}
                         
                        <div className="mb-5">
                            
                            <label style={{ color: '#93B1A6', width: '150px' }}>
                                Confirm Password
                            </label>


                            <input 
                            type='password' 
                            name='confirm_password' 
                            required
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '20vh', color: '#93B1A6', borderRadius: '3px' }}
                            />  

                            {
                                error && (
                                    <>
                                        <br />
                                        <br />
                                        <p style={{ color: 'red' }}>{error}</p>
                                    </>
                                )
                            } 

                        </div>
                        
                        {/* Register */}

                        <div className="my-3">
                            <button type="submit" onClick={handleSubmit} className="btn btn-outline-success" style={{ width: '15vh' }} >
                                Sign Up
                            </button>
                        </div>

                        <Link to='/login' style={{ color: '#93B1A6' }}>Already have an account?</Link>
                        
                    </form>
                    
                </div>
            </div>     
        </>
    )
    
}


export default Register