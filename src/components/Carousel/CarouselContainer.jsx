import React, { useState } from 'react'
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import civilizationsData from "../../data/civilizations";
import { useTranslation } from "react-i18next";

import '../../styles/CarouselContainer.css';

function CarouselContainer() {
    const { t } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        keyboard: true,
    }

    return (
        <div className="carousel-container-wrapper">
            <Slider {...settings}>
                {civilizationsData.map((civilization) => (
                    <CarouselItem
                        key={civilization.id}
                        civilization={civilization}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default CarouselContainer;