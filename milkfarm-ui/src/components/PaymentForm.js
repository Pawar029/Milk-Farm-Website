import React, { useState } from 'react';
import Axios from "axios";

export default function PaymentForm(props) {

    // const url = "http://localhost:8000/todaysdata/"
    const [data, setData] = useState({
        start_date: "",
        end_date:"",
    })

    const handleSubmit = () => {
        props.onSubmit();
    }

    const url = "http://localhost:8000/payments/"
    function SaveData(e) {
        e.preventDefault();
        props.onSubmit(data.start_date, data.end_date);
        console.log("Start date", data.start_date)
        console.log("End date", data.end_date)
        Axios.post(url, {
            start_date: data.start_date,
            end_date: data.end_date,
        })
            .then(res => {
                console.log(res.data)
            })
    }


    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <div className='row d-flex justify-content-center'>
            <h2>Enter the Start date and End date of Week </h2>
            <div className='p-5 col mx-auto'>

                <div className="row mb-3 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">Start Date of Week:</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control fs-4 " onChange={(e) => handle(e)} id="start_date" value={data.start_date} />
                    </div>
                </div>
                <div className="row mb-3 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">End Date of Week:</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control fs-4 " onChange={(e) => handle(e)} id="end_date" value={data.end_date} />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={(e) => SaveData(e)} onSubmit={handleSubmit}>Save</button>

            </div>


        </div>
    )
}




