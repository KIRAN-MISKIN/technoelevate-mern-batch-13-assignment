import React, { Component } from 'react';
import home1 from './images/home1.jpeg';
import home2 from './images/home2.jpg';
import {Link,BrowserRouter} from "react-router-dom";

export default class Home extends Component {
    render() {
        const wid={
                height:"300px",
                maxWidth:"740px",
                marginLeft:"0px",
                marginTop:"30px",
                backgroundColor:"skyblue"
                
        }

        const wid1={
            height:"300px",
            maxWidth:"740px",
            marginLeft:"500px",
            marginTop:"70px",
            backgroundColor:"skyblue"
        }

        const im={
            height:"300px",
            width:"250px"
        }

        const main={
            
        }
        return (
            <BrowserRouter>
            <div style={main}>
                <div className="container">
                <div class="card mb-3" style={wid} >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={home1} style={im} alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Learning to code</h5>
        <h6>OPENING A DOOR TO THE FUTURE</h6>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated Today</small></p>
        <Link to=''>Read More</Link>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style={wid1} >
  <div class="row no-gutters">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mastering the language</h5>
        <h6>JAVA IS NOT THE SAME AS JAVASCRIPT</h6>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated Today</small></p>
        <Link to=''>Read More</Link>
      </div>
    </div>
    <div class="col-md-4">
      <img src={home2} style={im} alt="..."/>
    </div>
  </div>
</div>


</div>
            </div>

            </BrowserRouter>
        )
    }
}