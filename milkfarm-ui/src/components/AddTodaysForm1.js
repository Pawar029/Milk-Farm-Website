import React, { useState } from 'react';
// import Axios from "axios";
import pic1 from './Images/banner-01.jpg'
export default function AddTodaysForm1(props) {

    // const url = "http://localhost:8000/todaysdata/"
    const [data, setData] = useState({
        date: "",
    })

    const handleSubmit = () => {
        props.onSubmit();
    }

    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }


    function SaveData(e) {
        e.preventDefault();
        props.onSubmit(data.date, selectedValue);
        // props.onSubmit(selectedValue);
        console.log("Todays date", data.date)
        console.log("Todays shift", selectedValue)
        // Axios.post(url, {
        //     date: data.date,
        //     shift: selectedValue,
        // })
        //     .then(res => {
        //         console.log(res.data)

        //     })
    }

    // props.onSubmit(data.date)

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)

        // console.log(newdata);
    }

    return (
        <div className='row d-flex justify-content-center'>
            <div className=' p-1 border border-dark rounded-1'>
                <img src={pic1} className="d-block w-100" alt="..." />
            </div>
            <div className='p-4 col mx-auto'>

                <div className="row mb-3 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">Date :</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control fs-4 " onChange={(e) => handle(e)} id="date" value={data.date} />
                    </div>
                </div>

                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0 fs-4">Shift :</legend>
                    <div className="col-sm-10" >
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" value="morning" checked={selectedValue === "morning"} onChange={handleChange} />
                            <label className="form-check-label fs-4" htmlFor="gridRadios1">
                                Morning
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" value="evening" checked={selectedValue === "evening"} onChange={handleChange} />
                            <label className="form-check-label fs-4" htmlFor="gridRadios2">
                                Evening
                            </label>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary" onClick={(e) => SaveData(e)} onSubmit={handleSubmit}>Save</button>

            </div>


        </div>
    )
}




// import React, { useState } from 'react';
// import Axios from "axios";

// function AddTodaysForm1(props) {
//     const url = "http://localhost:8000/payment/"
//     const [formData, setFormData] = useState({
//         date: "",
//     });

//     // const handleInputChange = (event) => {
//     //     const target = event.target;
//     //     const value = target.value;
//     //     const date = target.date;

//     //     setFormData({
//     //         ...formData,
//     //         [date]: value
//     //     });
//     // }

//     const [selectedValue, setSelectedValue] = useState("");
//     const handleChange = (event) => {
//         setSelectedValue(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.onSubmit();
//     }
//     //     Axios.post(url, {
//     //         formDate: formData.date,
//     //         shift: selectedValue,
//     //     })
//     //         .then(res => {
//     //             console.log(res.data)
//     //         })
//     // }


//     function SaveData(e) {
//         e.preventDefault();
//         Axios.post(url, {
//             formDate: formData.date,
//             shift: selectedValue,
//         })
//             .then(res => {
//                 console.log(res.data)
//             })
//     }

//     function handle(e) {
//         const newdata = { ...formData }
//         newdata[e.target.id] = e.target.value
//         setFormData(newdata)
//         // console.log(newdata);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* <div>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//             </div>
//             <div>
//                 <label>Message:</label>
//                 <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
//             </div> */}
//             {/* <button type="submit">Submit</button> */}

//             <div className='row d-flex justify-content-center'>
//                 <div className='p-5 col mx-auto'>

//                     <div className="row mb-3 align-content-center"  >
//                         <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">Date :</label>
//                         <div className="col-sm-6">
//                             <input type="date" className="form-control fs-4 " name='date' onChange={(e) => handle(e)} id="date" value={formData.date} />
//                             {/* <input type="date" className="form-control fs-4 " name="date" value={formData.date} onChange={handleInputChange} id="date" /> */}
//                         </div>
//                     </div>

//                     <fieldset className="row mb-3">
//                         <legend className="col-form-label col-sm-2 pt-0 fs-4">Shift :</legend>
//                         <div className="col-sm-10" >
//                             <div className="form-check">
//                                 <input className="form-check-input" type="radio" name="gridRadios" value="morning" checked={selectedValue === "morning"} onChange={handleChange} />
//                                 <label className="form-check-label fs-4" htmlFor="gridRadios1">
//                                     Morning
//                                 </label>
//                             </div>
//                             <div className="form-check">
//                                 <input className="form-check-input" type="radio" name="gridRadios" value="evening" checked={selectedValue === "evening"} onChange={handleChange} />
//                                 <label className="form-check-label fs-4" htmlFor="gridRadios2">
//                                     Evening
//                                 </label>
//                             </div>
//                         </div>
//                     </fieldset>
//                     <button type="submit" className="btn btn-primary" onClick={(e) => SaveData(e)}>Save</button>
//                 </div>


//             </div>

//         </form>
//     );
// }

// export default AddTodaysForm1;
