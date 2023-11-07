import Entry from "./Entry"
import { Link } from "react-router-dom"


const Entries = ({ entries }) => {

    return (
        <>
            <div className="mx-5 p-5" style={{ fontFamily: 'Tilt Neon, sans-serif', color: 'white' }}>

                {entries.length > 0 ? entries.map((entry, index) => (
                    <Entry key={index} entry={entry} />
                )) : (
                    <p>You have no Journal Entries.</p>
                )}

                <button className="btn btn-outline-secondary mt-3">
                    <Link to='/new' className="text-secondary" style={{ textDecoration: 'none' }}>New Entry</Link>
                </button>
                
            </div>
        </>
    )
    
}


export default Entries