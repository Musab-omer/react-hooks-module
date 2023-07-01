import React from 'react'
import grocery1 from '../../../assets/imgs/grocery.jpg';
import grocery2 from '../../../assets/imgs/grocery2.jpg';
import grocery3 from '../../../assets/imgs/grocery3.jpg';

let Home = () => {
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" class="carousel carousel-dark slide" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={grocery1} class="d-block w-100" style={{height:"70vh"}} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={grocery2} class="d-block w-100" style={{height:"70vh"}} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={grocery3} class="d-block w-100" style={{height:"70vh"}} alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>F
        </React.Fragment>
    )
}
export default Home