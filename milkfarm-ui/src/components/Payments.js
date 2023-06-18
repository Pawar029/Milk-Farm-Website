import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import PaymentTable from './PaymentTable';


export default function AddTodaysData() {
    const [showForm2, setShowForm2] = useState(false);
    const [start_date, setStartdate] = useState("");
    const [end_date, setEnddate] = useState("");
    const [error, setError] = useState('')

    const handleForm1Submit = (start_date, end_date) => {
        // console.log("here is the date ")
        console.log("Start: ", start_date)
        console.log("End: ", end_date)
        if (start_date.trim() === '' || end_date.trim() === '') {
            setError('Please fill in all fields')
        }
        else {
            setStartdate(start_date)
            setEnddate(end_date)
            setShowForm2(true);
        }
    }

    const handleForm2Submit = (data) => {
        console.log(data);
        setShowForm2(false);
    }

    return (
        <div>
            {error &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert" >
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            {showForm2 ? <PaymentTable onSubmit={handleForm2Submit} start_date={start_date} end_date={end_date} /> : <PaymentForm onSubmit={handleForm1Submit} />}
        </div>
    );


}


// import Axios from 'axios';
// import React from 'react'
// import { useState, useEffect } from 'react'

// export default function Payments() {
//     const [data, setData] = useState({
//         start_date: "",
//         end_date: "",
//     })

//     const start_date = data.start_date;
//     const end_date = data.end_date;
//     const [myData, setMyData] = useState([]);
//     useEffect(() => {
//         Axios.get('http://localhost:8000/payments/', { params: { start_date: start_date, end_date: end_date } })
//             .then((res) =>
//             setMyData(res.data)
//             )
            
//         }, [start_date, end_date, data]);
//         // console.log(myData)

//     const [showtable, setShowtable] = useState(false);
//     const url = 'http://localhost:8000/payments/'
//     function SaveData(e) {
//         e.preventDefault();
//         setShowtable(true);
//         // props.onSubmit(data.start_date,data.end_date);

//         Axios.post(url, {
//             start_date: data.start_date,
//             end_date: data.end_date,
//         })
//             .then(res => {
//                 console.log(res.data);
//             })

//     }
//     // if(showtable){

//     // }

//     function handle(e) {
//         const newdata = { ...data }
//         newdata[e.target.id] = e.target.value
//         setData(newdata)
//     }


//     return (
//         <div>
//             <h2>Enter the Start date and End date of Week </h2>
//             <div className='row d-flex justify-content-center'>
//                 <div className='p-5 col mx-auto'>

//                     <div className="row mb-3 align-content-center"  >
//                         <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">Start Date of Week:</label>
//                         <div className="col-sm-6">
//                             <input type="date" className="form-control fs-4 " onChange={(e) => handle(e)} id="start_date" value={data.start_date} />
//                         </div>
//                     </div>
//                     <div className="row mb-3 align-content-center"  >
//                         <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">End Date of Week:</label>
//                         <div className="col-sm-6">
//                             <input type="date" className="form-control fs-4 " onChange={(e) => handle(e)} id="end_date" value={data.end_date} />
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary" onClick={(e) => SaveData(e)} >Save</button>
//                 </div>


//             </div>
//             {showtable ?
//                 <div>
//                     <h1>List of Members</h1>

//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Liter of Milk in week</th>
//                                 <th scope="col">Total Amount</th>
//                             </tr>
//                         </thead>
//                         {myData.map((myData) => (

//                             <tbody >
//                                 <tr >
//                                     <th scope="row" key={myData.myname}>{myData.myname}</th>
//                                     <td key={myData.lit}>{myData.lit}</td>
//                                     <td key={myData.amt_of_week}>{myData.amt_of_week}</td>
//                                 </tr>

//                             </tbody>

//                         ))}
//                     </table>

//                 </div>
//                  : 
//                 <div></div>
//              } 


//         </div>
//     )
// }
