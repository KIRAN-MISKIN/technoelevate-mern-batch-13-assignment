import React from 'react'
import home1 from './images/home1.jpeg'
const im={
    height:"100px",
    width:"120px",
    borderRadius:"50%",
    marginLeft:"50px",
    marginTop:"10px"
}

const d={
            height:"350px",
            width:"300px",
            margin:"10px",
            backgroundColor:"cyan"
}

const main={
    display:"flex",
    margin:"10px"
}
const but={
    color:"white",
    marginLeft:"78px",
    backgroundColor:"green"
}

const d1={
    height:"350px",
            width:"300px",
            margin:"10px",
            marginLeft:"90px",
            backgroundColor:"cyan"
}
export default function Empinfo() {
    return (
        <div  className="container">

            <div style={main}>

    <div style={d1} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>

<div style={d} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>

<div style={d} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>

<div style={d} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>
</div>

<div style={main}>

    <div style={d1} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>

<div style={d} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>

<div style={d} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>

<div style={d} class="card">
  <img src={home1} style={im} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KIRAN KUMAR MISKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={but}>+</button>
  </div>
</div>
</div>


        </div>
    )
}
