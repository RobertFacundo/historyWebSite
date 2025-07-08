import romanEmpireImage from '../assets/images/slider/roma.png';
import medievalAgeImage from '../assets/images/slider/edadmedia.jpg';
import asiaImage from '../assets/images/slider/asia.png';
import egyptImage from '../assets/images/slider/egipto.png';
import nordicImage from '../assets/images/slider/nordico.png';
import precolumbianImage from '../assets/images/slider/Precolombina.png';
import greeceImage from '../assets/images/slider/grecia.png'

const civilizationsData = [
  {
    id: 'roma', // ID único para referencia interna
    slug: 'rome', // Usado para la URL (ej. /en/civilization/roma/home)
    image: romanEmpireImage, // La imagen importada localmente
    titleKey: 'civilizations.roma.title', // Clave para la traducción del título
    descriptionKey: 'civilizations.roma.description', // Clave para la traducción de la descripción
    images: [ // CLAVE: Array de imágenes para el ImageSlider de la vista de detalle
      'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?_gl=1*1ry10dl*_ga*Njg3NDQ3MTQ1LjE3NTA3ODk5NjU.*_ga_8JE65Q40S6*czE3NTE0MDAyNTgkbzIkZzEkdDE3NTE0MDAyNjAkajU4JGwwJGgw',
      'https://i.guim.co.uk/img/media/ec1eb2bb3bf2ae2ae9a0c1ec570cf16d6f138959/0_0_4617_2770/master/4617.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2ef1c46e87493ed79411899fcfcfa1f0',
      'https://www.worldhistory.org/uploads/images/1456.jpg',
      'https://miro.medium.com/v2/resize:fit:1124/0*jNISC4-cDvmLnbTP',
      'https://assets-architectureanddesign-au.s3.ap-southeast-2.amazonaws.com/pont-du-gard_2.jpg',
      'https://www.worldhistory.org/img/c/p/1600x900/2153.jpg',
      'https://cdn.enjoytravel.com/img/Big7Enjoy/us/travel-news/famous-for/things-rome-is-famous-for/things-rome-is-famous-for-the-trevi-fountain.webp',
      'https://www.carpediemtours.com/wp-content/uploads/2022/04/Pieta-in-St-Peters-Basilica.jpg',
      'https://artincontext.org/wp-content/uploads/2022/12/Roman-Artifacts.jpg',
      'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FeuIB2YeHV82sM55WumEkyA%2Fnormalized.jpg&width=910'
    ],
    homeSectionKey: 'civilizations.roma.homeSection', // CLAVE: Clave para el texto largo de la sección Home
    mythologyKey: 'civilizations.roma.mythologySection', // CLAVE: Clave para la sección de mitología
    historyKey: 'civilizations.roma.historySection',     // CLAVE: Clave para la sección de historia
    artKey: 'civilizations.roma.artSection',
  },
  {
    id: 'edad-media',
    slug: 'middle-ages',
    image: medievalAgeImage,
    titleKey: 'civilizations.medieval.title',
    descriptionKey: 'civilizations.medieval.description',
    images: [
      'https://cdn.britannica.com/56/115256-050-FD65A50D/Illustration-calendar-section-book-prayers-Les-Tres.jpg?w=400&h=300&c=crop',
      'https://www.historyhit.com/app/uploads/2020/07/painting-of-courtly-love-2.jpg',
      'https://www.medievalchronicles.com/wp-content/uploads/2014/11/Castle-Siege-Trebuchet-Catapult-Attack.webp',
      'https://www.worldhistory.org/uploads/images/8975.jpg',
      'https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/middle-ages-gettyimages-804452498',
      'https://elearn.eb.com/wp-content/uploads/2022/04/middle-ages-cover.png',
      'https://www.rochester.edu/eclipse/wp-content/uploads/2024/04/fea-medieval-planetary-alignment-eclipses-middle-ages-1920x1152-1.jpg',
      'https://publicmedievalist.com/wp-content/uploads/2018/10/Cover-Image.jpg'
    ],
    homeSectionKey: 'civilizations.medieval.homeSection',
    mythologyKey: 'civilizations.medieval.mythologySection',
    historyKey: 'civilizations.medieval.historySection',
    artKey: 'civilizations.medieval.artSection',
  },
  {
    id: 'asia',
    slug: 'asia',
    image: asiaImage,
    titleKey: 'civilizations.asia.title',
    descriptionKey: 'civilizations.asia.description',
    images: [
      'https://www.grasshopperadventures.com/wp-content/uploads/2019/09/Bagan.jpg',
      'https://cdn.sci.news/images/enlarge5/image_6021e-Ancient-Asians.jpg',
      'https://trusteddmc.com/UserFiles/image/Experiences/Content/Ayutthaya-Thailand.jpg',
      'https://uk.figuredart.com/cdn/shop/products/ancient-city-in-asia-advanced-cities-paint-by-numbers-global-figuredart-free-shipping_483.jpg?v=1648664957',
      'https://i0.wp.com/creekmoreworld.com/wp-content/uploads/2011/12/Asia-PhotoBlog-5.jpg?fit=1200%2C900&ssl=1',
      'https://www.shenyunperformingarts.org/data/image/original/2015/05/09/b430bedaf544d495473ae9767afc7111.jpg',
      'https://chinesemartialstudies.com/wp-content/uploads/2020/02/kamakura-period-aa8cb966-3751-4194-aa04-0d7d254e51b-resize-750.jpg?w=640'
    ],
    homeSectionKey: 'civilizations.asia.homeSection',
    mythologyKey: 'civilizations.asia.mythologySection',
    historyKey: 'civilizations.asia.historySection',
    artKey: 'civilizations.asia.artSection',
  },
  {
    id: 'egipto',
    slug: 'egypt',
    image: egyptImage,
    titleKey: 'civilizations.egipto.title',
    descriptionKey: 'civilizations.egipto.description',
    images: [
      'https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123.jpg',
      'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1657572126/EducationHub/photos/RLTUT_Key_image.jpg',
      'https://cdn.britannica.com/25/83825-050-F8826674/Anubis-Egyptian-Book-of-the-Dead-dead-c-1275-bce.jpg',
      'https://media.restless.co.uk/uploads/2024/07/facts-about-ancient-egypt-1.jpg',
      'https://d.newsweek.com/en/full/2628256/ancient-egypt.jpg?w=1200&f=ec403f92b62879768927e3578b72cd05',
      'https://www.touristegypt.com/wp-content/uploads/2023/03/ancient-egypt-tomb-1024x615.jpg',
      'https://www.historytoday.com/sites/default/files/styles/teaser_list/public/2021-03/Egypt.jpg?itok=JsYhj__1'
    ],
    homeSectionKey: 'civilizations.egipto.homeSection',
    mythologyKey: 'civilizations.egipto.mythologySection',
    historyKey: 'civilizations.egipto.historySection',
    artKey: 'civilizations.egipto.artSection',
  },
  {
    id: 'nordica',
    slug: 'nordic',
    image: nordicImage,
    titleKey: 'civilizations.nordica.title',
    descriptionKey: 'civilizations.nordica.description',
    images: [
      'https://i0.wp.com/about-history.com/wp-content/uploads/2017/05/peter-nicolai-arbo-olav-tryggvason-konge.jpg?resize=1232%2C640&ssl=1',
      'https://pm1.aminoapps.com/6514/93baa59d10390185f52374e4f666b35578de6047_hq.jpg',
      'https://www.realmofhistory.com/wp-content/uploads/2023/06/12-norse-gods-goddesses-facts-min-770x437.jpg',
      'https://images.saatchiart.com/saatchi/1710957/art/8189161/7255061-HSC00001-7.jpg',
      'https://cdn.sci.news/images/enlarge7/image_8675e-Vikings.jpg',
      'https://www.seattleweekly.com/wp-content/uploads/2018/10/14132887_web1_vikingsbegin-sea-teaser.jpg',
      'https://www.vikingtidsmuseet.no/bilder/v1_ohpm_final_dn-clear660px.jpg'
    ],
    homeSectionKey: 'civilizations.nordica.homeSection',
    mythologyKey: 'civilizations.nordica.mythologySection',
    historyKey: 'civilizations.nordica.historySection',
    artKey: 'civilizations.nordica.artSection',
  },
  {
    id: 'america', // Usando 'america' para precolombina, puedes ajustarlo si prefieres 'precolombina'
    slug: 'america',
    image: precolumbianImage,
    titleKey: 'civilizations.america.title',
    descriptionKey: 'civilizations.america.description',
    images: [
      'https://humanidades.com/wp-content/uploads/2018/09/culturas-precolombinas-4-e1579052551245.jpg',
      'https://www.thoughtco.com/thmb/bb0RsxnbZEpS7MNUH90VjpOndRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/machu-pichu-in-peru-956326314-5b68effec9e77c0050c50c50.jpg',
      'https://histclo.com/imagef/date/2011/06/riv-tlat01s.jpg',
      'https://images.nationalgeographic.org/image/upload/v1638892496/EducationHub/photos/pyramid-of-the-sun.jpg',
      'https://cdn.mos.cms.futurecdn.net/Ayr9KbRizVZ6Ba7aRV648D.jpg',
      'https://storymaker.cc/wp-content/uploads/2024/04/treasures-of-aztec.jpg',
      'https://digitalmapsoftheancientworld.com/wp-content/uploads/2024/02/aztec-sun-stone-56a025993df78cafdaa04c1d.jpg?w=1024',
      'https://informationaboutaztec.weebly.com/uploads/5/4/0/0/54006799/1858161_orig.jpg'
    ],
    homeSectionKey: 'civilizations.america.homeSection',
    mythologyKey: 'civilizations.america.mythologySection',
    historyKey: 'civilizations.america.historySection',
    artKey: 'civilizations.america.artSection',
  },
  {
    id: 'grecia',
    slug: 'greece',
    image: greeceImage,
    titleKey: 'civilizations.grecia.title',
    descriptionKey: 'civilizations.grecia.description',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Parthenon_%2830276156187%29.jpg',
      'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_1.7777777777777777,w_1920,h_1080,g_auto/dpr_auto/f_auto/q_auto:eco/v1/Greek-mythology-gettyImages-1220052224?_a=BAVAZGDX0',
      'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/ancient-elections-gettyimages-1425783906?_a=BAVAZGDX0 ',
      'https://www.thoughtco.com/thmb/zde1xqOlLRhRGmqd0vwkWwmtJH8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-103765066-112ba9fd97b747838ccf24c45ea067d5.jpg',
      'https://smarthistory.org/wp-content/uploads/2020/08/Laocoo%CC%88n-scaled.jpg',
      'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/8/14/1408015114751/Sculpture-of-a-fallen-war-011.jpg?width=465&dpr=1&s=none&crop=none',
      'https://cdn.kastatic.org/ka-perseus-images/8870eaae4a9d5f4d520ed5fbf677e5a165aa66a7.jpg'
    ],
    homeSectionKey: 'civilizations.grecia.homeSection',
    mythologyKey: 'civilizations.grecia.mythologySection',
    historyKey: 'civilizations.grecia.historySection',
    artKey: 'civilizations.grecia.artSection',
  },
];

export default civilizationsData;