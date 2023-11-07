import { useState } from "react";
import axios from "axios";


const Main = () => {

    const [inputText, setInputText] = useState('What a beautiful day outside.')
    const [emotionResult, setEmotionResult] = useState('N/A')

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }

    const getEmotion = () => {
        setEmotionResult('Fetching...')
        axios
            .post(`http://127.0.0.1:8000/api/sentireader/`, {
                input: inputText
            })
            .then((response) => {
                setEmotionResult(response.data.output_bert)
            })
            .catch((error) => {
                console.error('Error fetching emotion:', error)
                setEmotionResult('Server error')
            })
    }

    return (
        <>
            <div className="m-5 p-5" style={{ fontFamily: 'Tilt Neon, sans-serif' }}>
                
                {/* Introduction Section */}

                <div className='mb-5'>
                    
                    <h1 className='pb-4' style={{ color: '#008170', fontSize: 45 }}>
                        Sentireader: Decoding Emotions
                    </h1>
                    
                    <p style={{ fontSize: 20, color: '#93B1A6' }}>
                        Sentireader is an advanced sentiment analysis project,<br></br>utilizing deep learning and traditional methods <br></br> to decode emotions within text.
                    </p>
                    
                </div>

                {/* Demo Section */}

                <h1 className="pt-4 mb-4" style={{ color: '#008170' }}>
                    Demo
                </h1>

                <p className='pb-3' style={{ color: '#93B1A6' }}>
                    Here we have a simple demo to see the sentireader model in action.
                </p>

                <div className="form-group mb-3" style={{ color: '#93B1A6' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={inputText}
                        onChange={handleInputChange}
                        style={{ background: 'transparent', border: '1px solid', width: '50vh', color: '#93B1A6' }}
                    />
                </div>

                <button className="btn btn-sm btn-outline-success mb-3" onClick={getEmotion}>
                    Fetch Emotion
                </button>
                
                <div className="mt-3" style={{ color: '#93B1A6' }}>
                    <strong>Emotion:</strong> {emotionResult}
                </div>

            </div>
        </>
    )

}


export default Main