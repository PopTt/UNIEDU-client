import React from 'react'
import Carousel from 'react-elastic-carousel'
import './VideoSection.css'

function VideoSection() {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 350, itemsToShow: 2},
        {width: 750, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]
    return (
        <>
            <div className="courseDesc__container">
                <h1><h>UNIEDU</h> cooperates with many of the world's top universities and institute</h1>
                <div className="logo__container">
                    <Carousel breakPoints={breakPoints}>
                        <div id="circle">
                            <img src="/resources/images/utar_logo.jpg"></img>
                        </div>
                        <div id="circle">
                            <img src="/resources/images/Harvard_logo.jpg"></img>
                        </div>
                        <div id="circle">
                            <img src="/resources/images/google_logo.jpg"></img>
                        </div>
                        <div id="circle">
                            <img src="/resources/images/mit_logo.jpg"></img>
                        </div>
                        <div id="circle">
                            <img src="/resources/images/harrypotter_logo.jpg"></img>
                        </div>
                        <div id="circle">
                            <img src="/resources/images/superman_logo.jpg"></img>
                        </div>
                        <div id="circle">
                            <img src="/resources/images/batman_logo.jpg"></img>
                        </div>
                    </Carousel>
                    
                </div>
            </div>
            <div className='video__container'>
                <div className='video__overlay'>
                    <video src="/resources/videos/video1.mp4" width="800" height="500" controls />
                </div>
            </div>
        </>
    )
}

export default VideoSection
