import React, { useState } from "react";
import Axios from "axios";
// import { Alert } from 'bootstrap';
// import { useEffect } from 'react';
export default function Add_member_form() {
  const url = "http://localhost:8000/member/";
  const [data, setData] = useState({
    member_id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  // const [response_data, setResponseData] = useState({});
  const [status, setStatus] = useState("");

  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // const [error, setError] = useState('')
  function submit(e) {
    e.preventDefault();

    Axios.post(url, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      types: selectedValue,
    }).then((res) => {
      console.log(res.data);
      // setResponseData(res.data);
      setStatus(res.data.status);
    });
    //   alert('<h2>Form submitted Successfully</h2>')
    // }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  }

  let message;
  if (status === 201) {
    message = "Data Saved Successfully";
  } else if (status === 400) {
    message = "Data is Invalid ";
  } else if (status === 404) {
    message = "This Name is already Registered";
  }
  // else{
  //     message = "Something went Wrong";
  // }

  return (
    <div className="row d-flex justify-content-center">
      <div className="p-5 col mx-auto">
        <div className="row mb-3 align-content-center">
          <label htmlFor="inputName" className="col-sm-2 col-form-label fs-4">
            Name{" "}
          </label>
          <div className="col-sm-6">
            {/* id="inputName" name="name" value={name}  */}
            <input
              type="text"
              name="name"
              className="form-control fs-4 "
              onChange={(e) => handle(e)}
              id="name"
              value={data.name}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="inputPhone"
            className="col-sm-2 col-form-label fs-4 fw-normal"
          >
            Phone No.
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              name="phone"
              className="form-control  fs-4"
              onChange={(e) => handle(e)}
              id="phone"
              value={data.phone}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fs-4">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              name="email"
              className="form-control fs-4"
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="inputAddress"
            className="col-sm-2 col-form-label fs-4"
          >
            Address
          </label>
          <div className="col-sm-6">
            <textarea
              type="text"
              name="address"
              className="form-control fs-4"
              onChange={(e) => handle(e)}
              id="address"
              value={data.address}
            ></textarea>
          </div>
        </div>

        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0 fs-4">
            Milk Type
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              {/* <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={option1} onChange={(e)=>{setoption1(e.target.value)}} checked/> */}
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                value="cow"
                checked={selectedValue === "cow"}
                onChange={handleChange}
              />
              <label className="form-check-label fs-4" htmlFor="gridRadios1">
                Cow Milk
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                value="buffalo"
                checked={selectedValue === "buffalo"}
                onChange={handleChange}
              />
              {/* onChange={(e) => handle(e)} id="buffalo" value={data.buffalo} */}
              <label className="form-check-label fs-4" htmlFor="gridRadios2">
                Buffalo Milk
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label fs-4" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => submit(e)}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
