// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // import './swiper-custom.css';

// const projects = Array.from({ length: 11 }, (_, i) => ({
//   title: `Project ${i + 1}`,
//   description: `This is a more detailed description of project ${i + 1}. You can include tech stack, goals, or links here.`,
//   image: `/assets/photos/image-${i + 1}.png`,
// }));

// export default function ProjectCarousel() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white px-4">
//       <h2 className="text-2xl font-bold mb-8">Projects</h2>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full max-w-3xl"
//       >
//         {projects.map((project, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full max-h-[400px] object-contain rounded-xl shadow-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-sm text-gray-700 mt-2 px-2">{project.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
