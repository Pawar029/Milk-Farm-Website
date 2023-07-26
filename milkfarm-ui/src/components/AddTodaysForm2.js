import React, { useState, useEffect } from 'react';
import Axios from "axios";
import pic1 from './Images/cowandcalf.png'

export default function AddTodaysForm2(props) {


    const [dropdown, setDropdown] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/member/")
            .then((res) =>
                setDropdown(res.data["Member List"])
            )
    }, []);


    const url = "http://localhost:8000/todaysdata/"
    const [data, setData] = useState({
        name: "",
        fat: "",
        snf: "",
        rate: "",
        lit: "",
        date: "",
        shift: "",
        // type: "",
    })
    // const { id } = useParams();
    // console.log(id); 
    const date = props.date;
    const shift = props.shift;
    // const date_id = props.match.param.id;
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8000/todaysdata/', { params: { date: date, shift: shift } })
            .then((res) =>
                // console.log(res.data["Member List"])
                setMyData(res.data)
                // console.log(res.data)
            )
        // console.log(myData);

    }, [date, shift, data]);
    // console.log("sample:",date)
  const [status, setStatus] = useState("");
    function SaveData(e) {
        e.preventDefault();

        Axios.post(url, {
            name: data.name,
            fat: data.fat,
            snf: data.snf,
            rate: data.rate,
            lit: data.lit,
            date: props.date,
            shift: props.shift,
            // types: data.types,
        })
            .then(res => {
                console.log(res.data)
                setStatus(res.data.status)
            })

        setData({
            name: "",
            fat: "",
            snf: "",
            rate: "",
            lit: "",
        })
        // }
    }
    // console.log(props.date)
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata);
    }

    let message;
        if (status === 201) {
            message = "Data Saved";
        } else if (status === 400) {
            message = "Data is Invalid ";
        } else if (status === 404) {
            message = "Data with this Name is already Added";
        }

    return (
        <div className='row d-flex justify-content-center '>
            {/* <form  > */}
            <div className='p-5 col-sm-8 mx-auto'>
                <h3 value={props.date} onChange={(e) => handle(e)} id="date">Date :-  {props.date}</h3>
                <h3 value={props.shift} onChange={(e) => handle(e)} id="shift">Shift :-  {props.shift}</h3>
                <br />
                <div className="row mb-2 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-4 col-form-label fs-4">Name :</label>
                    <div className="col-sm-8">
                        {/* <input type="text" className="form-control fs-4 " onChange={(e) => handle(e)} id="name" value={data.name} /> */}
                        <select className='form-control' value={data.name} onChange={(e) => handle(e)} id="name">
                            <option value="">Choose Name</option>
                            {dropdown.map((Dropdown) => (
                                <option key={Dropdown.name} onChange={(e) => handle(e)} id="name" value={Dropdown.name_id}>{Dropdown.name}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="row mb-2 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-4 col-form-label fs-4">FAT :</label>
                    <div className="col-sm-8">
                        <input type="number" className="form-control fs-4 " onChange={(e) => handle(e)} id="fat" value={data.fat} />
                    </div>
                </div>
                <div className="row mb-2 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-4 col-form-label fs-4">SNF :</label>
                    <div className="col-sm-8">
                        <input type="number" className="form-control fs-4 " onChange={(e) => handle(e)} id="snf" value={data.snf} />
                    </div>
                </div>
                <div className="row mb-2 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-4 col-form-label fs-4">Rate :</label>
                    <div className="col-sm-8">
                        <input type="number" className="form-control fs-4 " onChange={(e) => handle(e)} id="rate" value={data.rate} />
                    </div>
                </div>
                <div className="row mb-2 align-content-center"  >
                    <label htmlFor="inputName" className="col-sm-4 col-form-label fs-4">Liter of Milk :</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control fs-4 " onChange={(e) => handle(e)} id="lit" value={data.lit} />
                    </div>
                </div>
                
                {status === 400 || status === 404 ? (
          <div
            className={`alert alert-danger alert-dismissible fade show`}
            role="alert"
          >
            <strong>{message}</strong>
          </div>
        ) : (
          <p></p>
        )}
        {status === 201 ? (
          <div
            className={`alert alert-success alert-dismissible fade show`}
            role="alert"
          >
            <strong>{message}</strong>
          </div>
        ) : (
          <p></p>
        )}
                <button type="submit" className="btn btn-primary" onClick={(e) => SaveData(e)} >Save</button>

            </div>
            <div className='col-sm-4 mt-5'>
                <img src={pic1} className="w-100" alt="..." />
            </div>
            {/* </form> */}
            <div>
                <h1>List of Members</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Member ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">FAT</th>
                            <th scope="col">SNF</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Liter of Milk</th>
                        </tr>
                    </thead>
                    {myData.map((myData) => (
                        // const { member_id, phone, name, email, address, types } = myData;
                        // return

                        <tbody >
                            <tr >
                                <th scope="row" key={myData.id}>{myData.id}</th>
                                <td key={myData.myname}>{myData.myname}</td>
                                <td key={myData.fat}>{myData.fat}</td>
                                <td key={myData.snf}>{myData.snf}</td>
                                <td key={myData.rate}>{myData.rate}</td>
                                <td key={myData.lit}>{myData.lit}</td>
                                {/* <td>{myData.types}</td> */}
                            </tr>

                        </tbody>

                    ))}
                </table>

            </div>
        </div>
    )
}




