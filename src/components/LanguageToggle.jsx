// src/components/LanguageToggle/LanguageToggle.jsx
import React from "react";
import useLanguage from '../hooks/useLanguage'

// Importa el archivo CSS para este componente
import '../styles/LanguageToggle.css'; 

function LanguageToggle() {
  // Usa el hook personalizado para obtener la función de cambio de idioma y el idioma actual
  const { changeLanguage, currentLanguage } = useLanguage(); 

  return (
    <div className="language-toggle-container">
      <button 
        onClick={() => changeLanguage('es')} 
        className={currentLanguage === 'es' ? 'active' : ''}
      >
       <img src='/flags/argentina.png' alt="Argentina" className="flag-icon-img" />
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={currentLanguage === 'en' ? 'active' : ''}
      >
        <img src='/flags/united-states.png' alt="United States" className="flag-icon-img" />
      </button>
      <button 
        onClick={() => changeLanguage('ita')}
        className={currentLanguage === 'ita' ? 'active' : ''}
      >
        <img src='/flags/italy.png' alt="Italy" className="flag-icon-img" />
      </button>
    </div>
  );
}

export default LanguageToggle;
