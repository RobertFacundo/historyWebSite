import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ParagraphBlock from '../components/ParagraphBlock/ParagraphBlock';

import '../styles/ScrollableContentSection.css';

function ScrollableContentSection({ contentKey }) {
    const { t } = useTranslation();
    const { lang } = useParams();
    const [sectionTitles, setSectionTitles] = useState([]);
    const contentRef = useRef(null);

    const translatedContent = t(contentKey);

    useEffect(() => {
        if (translatedContent && contentRef.current) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = translatedContent;
            const headings = tempDiv.querySelectorAll('h2[id]');
            const titles = Array.from(headings).map(h2 => ({
                id: h2.id,
                title: h2.textContent
            }));
            setSectionTitles(titles);
        }
    }, [translatedContent]);

    const handleNavigationClick = useCallback((e, id) => {
        e.preventDefault();
        if (contentRef.current) {
            const targetElement = contentRef.current.querySelector(`#${id}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    return (
        <div className='mythology-section-container'>
            <aside className='mythology-sidebar'>
                <nav className='vertical-navbar'>
                    <ul>
                        {sectionTitles.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} onClick={(e) => handleNavigationClick(e, item.id)}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div className='mythology-content' ref={contentRef}>
                <ParagraphBlock content={translatedContent} />
            </div>
        </div>
    );
}

export default ScrollableContentSection;