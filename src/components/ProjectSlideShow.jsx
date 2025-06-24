import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const projects = [
  { title: "Designer Portfolio", description: "Portfolio of Designer & Art Director Lee Chapdaniel, built on WordPress", image: "assets/photos/image-1.png", url: "https://leechapdaniel.com/" },
  { title: "Recycling App", description: "An app that teaches how to recycle garbage in Berlin, made with Vue.JS", image: "assets/photos/image-2.png", url: "https://bsr-app.onrender.com/" },
  { title: "Magazine Landing Page", description: "Landing page of Revue Neuf Magazine", image: "assets/photos/image-3.png", url: "https://luciapannunzio.github.io/Magazine-landing-page/" },
  { title: "Photographer Portfolio", description: "Working in progress, portfolio of photographer Mirella Demarco, built on React.JS", image: "assets/photos/image-4.png" },
  { title: "Security Detections List", description: "Search and filter of security detections", image: "assets/photos/image-5.png", url: "https://security-detections.vercel.app/" },
  { title: "To-do List", description: "A webpage using Vue.JS, allowing users to create their to-do list.", image: "assets/photos/image-6.png", url: "https://to-do-list-vue-alpha.vercel.app/" },
  { title: "Weather App", description: " A webpage using React.JS to search for the forecast anywhere in the world.", image: "assets/photos/image-7.png", url: "https://weather-app-lp.vercel.app/" },
  { title: "Quote Generator", description: "A webpage using HTML, SCSS and JavaScript which generates quotes from LGBTQIA+ writers.", image: "assets/photos/image-8.png", url: "https://luciapannunzio.github.io/Random-Quotations-LGBTQIA/" },
  { title: "Calendar of events in Berlin", description: "A local calendar of DIY events in Berlin, using React.JS and MongoDB", image: "assets/photos/image-9.png", url: "https://cyberherd.onrender.com/" },
  { title: "Coolmat", description: "Korean restaurant landing page made with WordPress and PHP.", image: "assets/photos/image-10.png", url: "https://github.com/luciapannunzio/Coolmat-Wordpress" },
  { title: "CSD-BERLIN", description: "Landing page for CSD Berlin Pride truck for DCI (Digital Career Institute) to drive conversion through QR code. ", image: "assets/photos/image-11.png", url: "https://github.com/luciapannunzio/CSD-BERLIN" },
];
export default function ProjectSlideShow() {
  const swiperRef = useRef(null);

  const handleImageClick = (e) => {
    if (e.target.closest('a')) {
      return;
    }

    const imageContainer = e.currentTarget; // Div with image and description
    const clickX = e.clientX; // X position of the click relative to the window
    const { left, width } = imageContainer.getBoundingClientRect(); // Position and width of the image container
    const clickRelativeX = clickX - left; // X position of the click relative to the image container

    if (clickRelativeX < width / 2) {
      // Click on the left half
      swiperRef.current?.slidePrev();
    } else {
     // Click on the right half
     swiperRef.current?.slideNext();
    }
  };

  return (
    <div className="flex justify-center items-center px-2">
      <Swiper
        loop
        spaceBetween={16}
        slidesPerGroup={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full max-w-xl"
        breakpoints={{
          0: { slidesPerView: 1 },
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide
            key={idx}
            className="swiper-slide"
            onClick={handleImageClick}
          >
            <div className="flex flex-col items-center">
              <div className="w-full h-64 bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center mt-3 px-2">
                <h3 className="font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visit project
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}