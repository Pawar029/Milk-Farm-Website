import React from 'react'
import pic1 from './Images/image.jpg';
import pic2 from './Images/Cow2.jpg';
import pic3 from './Images/Cow_home.jpg';
// import pic3 from './Images/wave-top.png';
import pic4 from './Images/Group.svg';
import lower_pic2 from './Images/coffes.png';
import lower_pic1 from './Images/milkshake.png';
import lower_pic3 from './Images/freshcream.png';
import lower_pic4 from './Images/frozen.png';
import lower_pic5 from './Images/wave-top.png';
import './index.css';
// import pic2 from './Images/Image1.jpg';
export default function SlidingImages() {
  return (
    <div className="">
      <div id="carouselExampleIndicators" className="carousel slide col-sm-12 p-2 border border-dark rounded-3" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner border border-primary-subtle">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              {/* <h5 className='fs-3 fw-semibold'>sunil</h5> */}
              <p className='fs-4'> </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              {/* <h5 className='fs-3 fw-semibold'></h5> */}
              <p className='fs-4'> </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              {/* <h5 className='fs-3 fw-semibold'> </h5> */}
              <p className='fs-4'> </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              {/* <h5 className='fs-3 fw-semibold'> </h5> */}
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

      <div className=''> 
      <div className='card-group align-content-lg-between'>
            <div className='row '>
              <div className='card col-sm mt-4 m-2 p-2 border border-info rounded-3'>
              <div className='card-body'>
                  <p className='text-dark fs-4 fw-semibold text-center'>Milk Shake </p>
                </div>
                <img className='card-img d-block ' src={lower_pic1} alt="img" />
                </div>
              <div className='card col-sm mt-4 m-2 p-2 border border-info rounded-3'>
              <div className='card-body'>
                  <p className='text-dark fs-4 fw-semibold text-center'>Coffee </p>
                </div>
                <div>
                <img className='card-img d-block' src={lower_pic2} alt="img" />
                </div>
              </div>
              <div className='card col-sm mt-4 m-2 p-2 border border-info rounded-3'>
              <div className='card-body'>
                  <p className='text-dark fs-4 fw-semibold text-center'>Fresh Cream </p>
                </div>
                <img className='card-img d-block' src={lower_pic3} alt="img" />
                <div className='card-body'>
                  <p className='text-info fs-4 fw-semibold'> </p>
                </div>
              </div>
              <div className='card col-md mt-md-4 m-2 p-3 border border-info rounded-3'>
              <div className='card-body'>
                  <p className='text-dark fs-4 fw-semibold text-center'>Ice Cream </p>
                </div>
                <img className='card-img-top' src={lower_pic4} alt="img" />
                {/* <div className='card-body'>
                  <p className='text-info fs-4 fw-semibold'>BIRDS</p>
                </div> */}
              </div>

            </div>
          </div>
  
          </div>

    
          <div className='position-relative'> 
          <img src={lower_pic5} className="img-fluid d-block w-100" alt="..." />
            <div className= "row    m-2 position-absolute bottom-0 end-0 " >
              <h5 className='fs-3 fw-semibold col-sm-6'> </h5>
              <p className='fs-4 col-sm-6 text-end badge text-dark text-wrap'>At our dairy, we take great pride in offering you with fresh and pure quality milk sourced directly from our dedicated farmers.</p>
            </div>
          </div>  
    </div>
  )
}
