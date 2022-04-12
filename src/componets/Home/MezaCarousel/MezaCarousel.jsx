import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import img1 from './../../../assets/img/img1.jpg'
// import img2 from './../../../assets/img/img2.jpg'
// import img3 from './../../../assets/img/img3.jpg'
// import img4 from './../../../assets/img/img4.jpg'
// import img5 from './../../../assets/img/img5.jpg'
// import img6 from './../../../assets/img/img6.jpg'

import './MezaCarousel.css'

const MezaCarousel = () => {
    return(
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showArrows={true}
            showStatus={false}
            showIndicators={false} 
            showThumbs={false}
            transitionTime={1000} 
            swipeable={true}
            animationHandler='fade'
            className='home-carousel'>
                <div className='card1'>
                    {/* <img src={img1} alt="" />     */}
                </div> 
                <div className='card2' >
                    {/* <img src={img2} alt="" />     */}
                </div> 
                <div className='card3'>
                    {/* <img src={img3} alt="" />     */}
                </div> 
                <div className='card4'>
                    {/* <img src={img4} alt="" />     */}
                </div> 
                <div className='card5'>
                    {/* <img src={img5} alt="" />     */}
                </div> 
                <div className='card6'>
                    {/* <img src={img6} alt="" />     */}
                </div> 
        </Carousel>
    )
}

export default MezaCarousel