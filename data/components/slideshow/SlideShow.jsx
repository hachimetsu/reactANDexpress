import * as React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const { $slideshow } = require('./setup.json');

export default function _SlideShow() {
    return <>
        <Carousel style={{maxWidth:880}} className="mx-auto" fade>
            {$slideshow.map((img, i) => {
                return <Carousel.Item interval={2_000}>
                <img className="d-block w-100 h-100" src={img.src}  alt={`Slide Img ${i}`}/>
                <Carousel.Caption><h3>{img.caption["title"]}</h3><p>{img.caption["para"]}</p></Carousel.Caption>
            </Carousel.Item>
            })}
        </Carousel>
    </>
}

