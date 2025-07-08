import React from "react";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import LanguageToggle from "../components/LanguageToggle";

import '../styles/CarouselView.css';

function CarouselView() {
    return (
        <div className="carousel-view-layout">
            <header className="main-header">
                <LanguageToggle />
            </header>
            <main className="main-content">
                <CarouselContainer />
            </main>
        </div>
    );
}

export default CarouselView;