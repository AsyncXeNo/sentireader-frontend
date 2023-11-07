import axios from "axios"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const JournalEntry = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [change, setChange] = useState(false)
    const [entryId, setEntryId] = useState(null)
    const [entry, setEntry] = useState('')

    const handleDelete = (e) => {

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }

        axios.
            delete(`http://127.0.0.1:8000/api/journal-entries/${entryId}/`, config)
            .then(response => {
                navigate('/dashboard')
            })
            .catch(error => {
                console.log(error)
            }) 
        
    }

    const handleChart = (e) => {
        navigate(`/results/${entryId}`)
    }

    const onSave = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }

        const data = {
            entry_text: entry
        }
        
        if (entryId) {

            axios
                .put(`http://127.0.0.1:8000/api/journal-entries/${entryId}/`, data, config)
                .then(response => {
                    setEntryId(response.data.entry.entry_id)
                    navigate(`/${response.data.entry.entry_id}`)
                })
                .catch(error => {
                    console.log(error)
                })
            
        }
        else {
            axios
                .post('http://127.0.0.1:8000/api/journal-entries/create/', data, config)
                .then((response) => {
                    setEntryId(response.data.entry.entry_id)
                    navigate(`/${response.data.entry.entry_id}`)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        setChange(!change)
    }

    useEffect(() => {

        if (!localStorage.getItem('jwt')) {
            navigate('/')
            return
        }

        if (id) {

            setEntryId(id)
            
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            }
    
            axios.get(`http://127.0.0.1:8000/api/journal-entries/${id}/`)
                .then((response) => {
                    setEntry(response.data.entry_text)
                })
                .catch((error) => {
                    navigate('/dashboard')
                    return
                })
        }
    }, [change, entryId])

    return (
        <>
            <div className="m-5 p-5" style={{ fontFamily: 'Tilt Neon, sans-serif' }}>

                <p style={{ color: '#008170' }}>
                    {entryId ? (
                        'Existing entry with id ' + entryId
                    ): (
                        'New entry'
                    )}
                </p>

                <form>
                    
                    <textarea 
                    className="p-2 mb-3"
                    type='text'
                    required
                    value={entry}
                    onChange={e => setEntry(e.target.value)}
                    placeholder=''
                    style={{ background: 'transparent', border: '1px solid', width: '50vh', height: '60vh', color: '#93B1A6', borderRadius: '3px' }}
                    />

                </form>
                
                <div className="row" style={{ width: '53vh' }}>

                    <div className="col">
                        <button className="btn btn-outline-secondary" onClick={onSave}>Save</button>

                        {
                            entryId && (
                                <button className="mx-3 btn btn-outline-danger" onClick={handleDelete}>Delete</button>
                            )
                        }
                        
                    </div>

                    {
                        entryId && (
                            <div className="col" style={{ textAlign: 'right' }}>
                                <button className="btn btn-outline-primary ml-auto" onClick={handleChart}> View Sentiment Chart</button>
                            </div>
                        )
                    }
                    
                </div>
                
            </div>
        </>
    )
    
}


export default JournalEntry