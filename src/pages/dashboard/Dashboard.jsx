import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import Welcome from "./components/Welcome"
import Entries from "./components/Entries"
import axios from "axios"


const Dashboard = () => {

    const [name, setName] = useState('')
    const [entries, setEntries] = useState([])
    const navigate = useNavigate()

    const fetchEntries = () => {

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }

        axios.get('http://127.0.0.1:8000/api/journal-entries/', config)
            .then((response) => {
                setEntries(response.data)
            })
            .catch((error) => {
                localStorage.removeItem('jwt')
                localStorage.removeItem('name')
                navigate('/login')
            })
        
    }

    useEffect(() => {

        if (!localStorage.getItem('name') || !localStorage.getItem('jwt')) {
            navigate('/login')  
            return
        }
        
        setName(localStorage.getItem('name')) 
        fetchEntries()
        
    }, [])

    return (
        <>
            <Welcome name={name} />

            <Entries entries={entries} />
        </>
    )
    
}


export default Dashboard