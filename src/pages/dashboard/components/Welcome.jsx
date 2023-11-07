
const Welcome = ({ name }) => {

    return (
        <>
            <div className="mx-5 pt-5 px-5" style={{ fontFamily: 'Tilt Neon, sans-serif' }}>

                <h1 className='pb-4' style={{ color: '#008170' }}>
                    Hi, {name}!
                </h1>

                <p style={{ fontSize: 20, color: '#93B1A6', textDecoration: 'underline' }}>
                    Your Journal
                </p>
                
            </div>
        </>
    )

}


export default Welcome