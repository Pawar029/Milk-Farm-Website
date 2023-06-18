import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';


export default function ListOfMembers() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/member/")
      .then((res) =>
        // console.log(res.data["Member List"])
        setMyData(res.data["Member List"])

        // console.log(res.data)
      )
    // console.log(myData);

  }, []);

  return (
    <>
      <h1>List of Members</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Member ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        {myData.map((myData) => (
          // const { member_id, phone, name, email, address, types } = myData;
          // return
            
            <tbody>
              <tr >
                <th scope="row">{myData.member_id}</th>
                <td>{myData.name}</td>
                <td>{myData.phone}</td>
                <td>{myData.email}</td>
                <td>{myData.address}</td>
                <td>{myData.types}</td>
              </tr>

            </tbody>
            
        ))}
      </table>
    </>
  )
}
