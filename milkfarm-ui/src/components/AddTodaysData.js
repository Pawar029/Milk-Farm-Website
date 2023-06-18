import React, { useState } from 'react';
import AddTodaysForm1 from './AddTodaysForm1';
import AddTodaysForm2 from './AddTodaysForm2';


export default function AddTodaysData() {
    const [showForm2, setShowForm2] = useState(false);
    const [date, setdate] = useState("");
    const [shift, setshift] = useState("");
    // const [error, setError] = useState('')

    const handleForm1Submit = (date, shift) => {
        // console.log("here is the date ")
        console.log("Date: ", date)
        console.log("shift: ", shift)
        // if (date.trim() === '' || shift.trim() === '') {
        //     setError('Please fill in all fields')
        // }
        // else {
            setdate(date)
            setshift(shift)
            setShowForm2(true);
        // }
    }

    const handleForm2Submit = (data) => {
        console.log(data);
        setShowForm2(false);
    }

    return (
        <div>
            {/* {error &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert" >
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            } */}
            {showForm2 ? <AddTodaysForm2 onSubmit={handleForm2Submit} date={date} shift={shift} /> : <AddTodaysForm1 onSubmit={handleForm1Submit} />}
        </div>
    );


}
