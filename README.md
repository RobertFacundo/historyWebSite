# History Web Site

Welcome to History Web Site, a dynamic and engaging platform dedicated to exploring various historical topics. Built with React and Vite, this project offers a seamless and modern user experience. A standout feature is its robust internationalization support, allowing users to effortlessly switch between English, Spanish, and Italian content, making historical narratives accessible to a wider audience.

🔗 **Live Demo:** https://history-web-site.vercel.app/

--- 

### 🚀 Tech Stack

- React 19: A powerful JavaScript library for building user interfaces.

- Vite 7: A fast development build tool that significantly improves the front-end development experience.

- i18next & react-i18next: Comprehensive internationalization frameworks for handling multi-language content.

- react-router-dom: Declarative routing for React applications, enabling navigation between different historical topics.

- react-markdown & rehype-raw: For rendering Markdown content, potentially allowing for flexible historical article formatting.

- react-slick & slick-carousel: Providing carousel functionalities, possibly for image galleries or featured content.

- flag-icon-css & react-flags-select: For displaying country flags and enabling easy language selection.

- ESLint: For maintaining code quality and consistency.

### ✨ Key Features

- Multilingual Support: Seamlessly switch between English, Spanish, and Italian content, providing a global reach for historical information.

- Dynamic Content Loading: Content is intelligently loaded based on the selected navigation link, ensuring a focused and relevant Browse experience.

- Reusable Components: The application leverages a modular architecture with reusable React components, promoting code efficiency and maintainability.

- Interactive UI: Engage with history through a modern and user-friendly interface, designed for intuitive navigation and readability.

### 📁 Project Structure

```bash
src/
├── App.css
├── App.jsx
├── main.jsx
|
├── assets/
│   └── images/
│       └── slider/
│           ├── asia.png
│           ├── edadmedia.jpg
│           ├── egipto.png
│           ├── grecia.png
│           ├── nordico.png
│           ├── Precolombina.png
│           └── roma.png
|
├── components/
│   ├── Footer.jsx
│   ├── LanguageToggle.jsx
│   |
│   ├── Carousel/
│   │   ├── CarouselContainer.jsx
│   │   └── CarouselItem.jsx
│   |
│   ├── CivilizationNavbar/
│   │   └── CivilizationNavBar.jsx
│   |
│   ├── ImageSlider/
│   │   └── ImagesSlider.jsx
│   |
│   └── ParagraphBlock/
│       └── ParagraphBlock.jsx
|
├── data/
│   └── civilizations.js
|
├── hooks/
│   └── useLanguage.js
|
├── i18n/
│   ├── i18n.js
│   |
│   └── translations/
│       ├── en.json
│       ├── es.json
│       └── ita.json
|
├── sections/
│   ├── CivilizationHomeSection.jsx
│   └── ScrollableContentSection.jsx
|
├── styles/
│   ├── CarouselContainer.css
│   ├── CarouselItem.css
│   ├── CarouselView.css
│   ├── CivilizationDetailView.css
│   ├── CivilizationHomeSection.css
│   ├── CivilizationNavBar.css
│   ├── Footer.css
│   ├── ImageSlider.css
│   ├── LanguageToggle.css
│   ├── ParagraphBlock.css
│   └── ScrollableContentSection.css
|
└── Views/
    ├── CarouselView.jsx
    └── CivilizationDetailView.jsx
```

---

### 📬 Contact
Created by Facundo Robert – GitHub

Feel free to reach out for collaboration or feedback!

---
