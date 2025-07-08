import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

function useLanguage() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const { lang: currentLangParam } = useParams();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

        const currentPath = window.location.pathname;

        const pathParts = currentPath.split('/').filter(Boolean);

        if (i18n.options.supportedLngs.includes(pathParts[0])) {
            pathParts[0] = lng;
            navigate(`/${pathParts.join('/')}`);
        } else {
            navigate(`/${lng}${currentPath}`);
        }
    };

    return { changeLanguage, currentLanguage: i18n.language };
};

export default useLanguage;