import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popper from "./Popper";

const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "#f50057", borderRadius: '50%'}}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "#f50057", borderRadius: '50%'}}
            onClick={onClick}
        >
            prev</div>
    )
}
export default (props) => {

    const {data, onClickItem, onMouseEnter, onMouseLeave, activeIndex} = props;

    const settings = {
        className: "slider variable-width",
        swipeToSlide: true,
        variableWidth: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (
        <>
            <Slider {...settings}>
                {
                    data.map((item, index) => {
                        const style={
                            display:'flex',
                            justifyContent:'center',
                            padding:'3px 0',
                            border:activeIndex === index ? '1px solid #000000':0
                        };

                        return (
                            <div key={index}
                                 onClick={(event)=>onClickItem(event, index)}
                                 onMouseEnter={(event)=>onMouseEnter(event, index)}
                                 onMouseLeave={onMouseLeave}
                                 style={style}
                            >
                                <img alt='' src={item.img} style={{width: 50, height: 50}}/>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
}