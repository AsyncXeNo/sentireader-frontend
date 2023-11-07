import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import 'chart.js/auto'
import { Chart } from "react-chartjs-2";


const Results = () => {

    let chartRef = null

    const [positive, setPositive] = useState(0)
    const [negative, setNegative] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const { id } = useParams() 
    const navigate = useNavigate()

    const goBack = (e) => {
        navigate(`/${id}`)
    }

    useEffect(() => {

        console.log(id)

        if (!localStorage.getItem('jwt')) {
            navigate('/login')
        }

        axios
            .post(`http://127.0.0.1:8000/api/results/`, {
                entry: id
            })
            .then(response => {
                console.log(response)
                setPositive(response.data.positive_percentage * 100)
                setNegative(response.data.negative_percentage * 100)
                setNeutral(response.data.neutral_percentage * 100)
            })
            .catch(error => {
                console.log(error)
            })
    })

    const chartData = {
        'labels': ['Positive', 'Negative', 'Neutral'],
        datasets: [
            {
                data: [positive, negative, neutral],
                backgroundColor: ['green', 'red', 'gray']
            }
        ]
    }

    return (
        <>
            <div className="p-5 m-5" style={{
                height: '60vh',
                width: '60vh',
                textAlign: 'center'
            }}>
                <Chart className='my-5' type="pie" data={chartData} options={{}} ref={ref => (chartRef = ref)} />    
                <button className="btn btn-outline-secondary" onClick={goBack}>Go Back</button>
            </div>
        </>
    )
    
}


export default Results