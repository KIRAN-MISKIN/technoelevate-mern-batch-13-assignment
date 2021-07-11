import React, { Component } from 'react'

const tab={
    margin:"30px"
}

export default class Empdit extends Component {
    render() {
        return (
            <div className="container">

<table style={tab} class="table" >
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1421010</td>
      <td>KIRAN</td>
      <td>DEV</td>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>1421011</td>
      <td>KUMAR</td>
      <td>TESRTER</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>1421012</td>
      <td>MISKIN</td>
      <td>IT</td>
      <td>200</td>
    </tr>
  </tbody>
</table>
                
            </div>
        )
    }
}
