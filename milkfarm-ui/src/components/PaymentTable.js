import React, { useState, useEffect } from 'react';
import Axios from "axios";

export default function PaymentTable(props) {

    // const [data, setData] = useState({
    //      start_date:"",
    //      end_end:"",
    // })
    const start_date = props.start_date;
    const end_date = props.end_date;
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8000/payments/', { params: { start_date: start_date, end_date: end_date } })
            .then((res) =>
                setMyData(res.data)
                )
                // console.log(myData)
    }, [ start_date, end_date]);

    // const [error, setError] = useState('')
     
    // function handle(e) {
    //     const newdata = { ...data }
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    //     // console.log(newdata);
    // }


    return (
        <div className='row d-flex justify-content-center '>
            <div className='p-5 col mx-auto'>
                <h3 value={props.start_date}   id="date">Start Date :-  {props.start_date}</h3>
                <h3 value={props.end_date}   id="shift">End Date :-  {props.end_date}</h3>
                <br />
            </div>
            <div>
                <h1>List of Members</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Liter of Milk in week</th>
                            <th scope="col">Total Amount</th>
                        </tr>
                    </thead>
                    {myData.map((myData) => (
                        // const { member_id, phone, name, email, address, types } = myData;
                        // return

                        <tbody >
                            <tr >
                                <th scope="row" key={myData.myname}>{myData.myname}</th>
                                <td key={myData.lit}>{myData.lit}</td>
                                <td key={myData.amt_of_week}>{myData.amt_of_week}</td>
                            </tr>
                        </tbody>

                    ))}
                </table>

            </div>
        </div>
    )
}



 
