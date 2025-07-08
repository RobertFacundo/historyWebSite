import React from "react";
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import CivilizationNavBar from "../components/CivilizationNavbar/CivilizationNavBar";
import ImageSlider from "../components/ImageSlider/ImagesSlider";

import CivilizationHomeSection from "../sections/CivilizationHomeSection";
import ScrollableContentSection from "../sections/ScrollableContentSection";
import {Footer} from '../components/Footer'

import civilizationsData from "../data/civilizations";

import '../styles/CivilizationDetailView.css';

function CivilizationDetailView() {
    const { lang, civilizationName } = useParams();
    const { t } = useTranslation();

    const civilization = civilizationsData.find(
        (civ) => civ.slug === civilizationName
    );

    console.log(civilization, 'log!!!')

    if (!civilization) {
        return (
            <div className="civilization-detail-view-layout">
                <header className="detail-header">
                    <Link to={`/${lang}`} className="back-button">
                        {t('general.backToCarousel')}
                    </Link>
                    <h1>{t('civilizationDetail.notFound')}</h1> {/* Nueva clave de traducción */}
                </header>
                <main className="detail-content">
                    <p>{t('civilizationDetail.notFoundMessage')}</p>
                </main>
            </div>
        );
    }

    return (
        <>
            <div className="civilization-detail-view-layout">
                <CivilizationNavBar civilization={t(civilization.titleKey)} />
                <main className="detail-main-layout">
                    <aside className="detail-sidebar">
                        <ImageSlider
                            images={civilization.images}
                            civilizationTitleKey={civilization.titleKey}
                        />
                    </aside>
                    <section className="detail-content-area">
                        <Routes>
                            <Route
                                path="/"
                                element={<CivilizationHomeSection contentKey={civilization.homeSectionKey} />}
                            />
                            <Route
                                path="/myths"
                                element={<ScrollableContentSection contentKey={civilization.mythologyKey} />}
                            />
                            <Route
                                path="/history"
                                element={<ScrollableContentSection contentKey={civilization.historyKey} />}
                            />
                            <Route
                                path="/art"
                                element={<ScrollableContentSection contentKey={civilization.artKey} />}
                            />
            
                            <Route
                                path="/*"
                                element={<div className="section-not-found"><p>{t('general.sectionNotFound')}</p><p>{t('general.sectionNotFoundMessage')}</p></div>}
                            />
                        </Routes>
                    </section>
                </main>
            </div>
            <Footer/>
        </>
    );
}

export default CivilizationDetailView;