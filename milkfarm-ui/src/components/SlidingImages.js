import React from 'react'
import pic1 from './Images/image.jpg';
import pic2 from './Images/Cow.jpg';
import pic3 from './Images/Cow_home.jpg';
import './index.css';
// import pic2 from './Images/Image1.jpg';
export default function SlidingImages() {
  return (
    <div className="img_div">
      <div id="carouselExampleIndicators" className="carousel slide col-sm-12" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic2} className="d-block w-100 rounded-5" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              {/* <h5 className='fs-3 fw-semibold'>sunil</h5> */}
              <p className='fs-4'> </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5 className='fs-3 fw-semibold'>Second slide label</h5>
              <p className='fs-4'> </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5 className='fs-3 fw-semibold'>Third slide label</h5>
              <p className='fs-4'> </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
