import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"


const Login = () => {

    const navigate = useNavigate()
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {

        setError('')
        
        event.preventDefault()

        axios
            .post(`http://127.0.0.1:8000/api/login/`, {
                username: username,
                password: password
            })
            .then((response) => {
                localStorage.setItem('jwt', response.data.access)

                const config = {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    }
                }

                axios.get('http://127.0.0.1:8000/api/me/', config)
                    .then((response) => {
                        localStorage.setItem('name', response.data.first_name)
                        navigate('/dashboard')
                    })
                    .catch((error) => {
                        setError('Something went wrong, please try again')
                    })
                
            })
            .catch((error) => {
                setError(error.response.data.detail)
            })
        
    }

    return (
        <>       
            <div className="container-fluid m-5">
                <div className="form m-5" style={{ fontFamily: 'Tilt Neon, sans-serif', position: 'absolute', top: '45%', transform: 'translateY(-50%)' }}>

                    <div className='mx-5'>
                        
                        <h1 style={{ color: '#008170', fontSize: 45 }}>
                            Login to Journal
                        </h1>
                        
                    </div>

                    <form className="m-5" onSubmit={handleSubmit} >

                        <div className="mb-3">

                            <label style={{ color: '#93B1A6', width: '100px' }}>
                                Username
                            </label>
                        
                            <input
                            className=""
                            type='text' 
                            name='username' 
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder=''
                            style={{ background: 'transparent', border: '1px solid', width: '20vh', color: '#93B1A6', borderRadius: '3px' }}
                            />
                            
                        </div>

                        <div className="mb-5">
                            
                            <label style={{ color: '#93B1A6', width: '100px' }}>
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
                            />  \

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

                        <div className="mb-3">
                            <button type="submit" className="btn btn-outline-success" style={{ width: '15vh' }} >
                                Log in
                            </button>
                        </div>

                        <Link to='/register' style={{ color: '#93B1A6' }}>Don't have an account?</Link>
                        
                    </form>
                    
                </div>
            </div>     
        </>
    )
    
}


export default Login