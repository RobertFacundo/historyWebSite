import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../styles/ImageSlider.css';

function ImageSlider({ images, civilizationTitleKey }) {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000)

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) {
        return (
            <div className="image-slider-placeholder">
                {t('imageSlider.noImages')}
            </div>
        );
    }

    const civTitle = t(civilizationTitleKey);

    return (
        <div className="image-slider-container">
            {images.map((imageSrc, index) => (
                <img
                    key={index}
                    src={imageSrc}
                    alt={`${civTitle} - ${t('imageSlider.image')} ${index + 1}`}
                    className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
}

export default ImageSlider;