import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Entry = ({ entry }) => {

    const navigate = useNavigate()

    const entry_text = entry.entry_text.substring(0, 50) + '...'
    const datetime = new Date(entry.datetime)
    const id = entry.entry_id

    const date = `${datetime.getDate()}-${datetime.getMonth()}-${datetime.getFullYear()}`
    const time = `${datetime.getUTCHours().toString()}:${datetime.getUTCMinutes()}:${datetime.getUTCSeconds()}`

    const handleClick = (e) => {
        navigate(`/${id}`)
    }

    useEffect(() => {
        console.log(datetime)
    }, [])

    return (
        <>
            <div  className='my-3' style={{ color: '#93B1A6', width: '50vh', borderRadius: '3px', alignItems: 'center'}} >
                <button className="btn btn-outline-secondary" onClick={handleClick} style={{ width: '100%', textAlign: 'left' }}>
                    <p>
                        <div className="row">
                            <div className="col">
                                <span style={{ fontWeight: 'bold' }}>
                                    {date}
                                </span>
                            </div>
                            <div className="col" style={{ textAlign: 'right' }}>
                                {time}
                            </div>
                        </div>
                    </p>
                    <p className="pt-2">{entry_text}</p>
                </button>
            </div>
        </>
    )
    
}


export default Entry