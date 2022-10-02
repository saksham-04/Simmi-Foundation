import React from 'react'
import pic1 from './header1.jpg'
import pic2 from './header2.jpg'
import pic3 from './header3.jpeg'
import pic4 from './header4.jpg'


export default function HeaderSlide() {
  return (
    <div className='container'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
