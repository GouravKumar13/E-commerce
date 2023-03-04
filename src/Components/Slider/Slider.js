import { React, useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "./Slider.scss"

const Slider = () => {
    const [CurrentSlide, SetCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]

    const PreviousSlide = () => { SetCurrentSlide(CurrentSlide === 0 ? 2 : (prev) => prev - 1) }

    const NextSlide = () => { SetCurrentSlide(CurrentSlide === 2 ? 0 : (prev) => prev + 1) }



    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${CurrentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={PreviousSlide}>
                    <ArrowBackOutlinedIcon />
                </div>
                <div className="icon" onClick={NextSlide}>
                    <ArrowForwardOutlinedIcon />
                </div>
            </div>
        </div >
    )
}

export default Slider
