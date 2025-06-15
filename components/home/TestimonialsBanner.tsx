import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function TestimonialsBanner() {
    return <TestimonialsCarousel />;
}

// export function TestimonialsBanner() {
//     const [reviews, setReviews] = useState<Review[]>([]);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [slidesToShow, setSlidesToShow] = useState(3);
//     const totalSlides = Math.ceil((reviews?.length || 0) / slidesToShow);
//     const touchStartX = useRef(0);
//     const touchEndX = useRef(0);

//     // Responsive slides to show
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setSlidesToShow(1);
//             } else if (window.innerWidth < 1024) {
//                 setSlidesToShow(2);
//             } else {
//                 setSlidesToShow(3);
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const nextSlide = useCallback(() => {
//         setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//     }, [totalSlides]);

//     const prevSlide = useCallback(() => {
//         setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//     }, [totalSlides]);

//     // Auto slide
//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, 5000);
//         return () => clearInterval(timer);
//     }, [nextSlide]);

//     // Touch events for mobile swipe
//     const handleTouchStart = (e: React.TouchEvent) => {
//         touchStartX.current = e.touches[0].clientX;
//     };

//     const handleTouchMove = (e: React.TouchEvent) => {
//         touchEndX.current = e.touches[0].clientX;
//     };

//     const handleTouchEnd = () => {
//         if (touchStartX.current - touchEndX.current > 50) {
//             nextSlide();
//         } else if (touchEndX.current - touchStartX.current > 50) {
//             prevSlide();
//         }
//     };

//     async function fetchTestimonials() {
//         try {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_WORKER_URL}/google/reviews`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//             }});
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();
//             setReviews(data.reviews || []);
//         } catch (error) {
//             console.error('Error fetching testimonials:', error);
//             return [];
//         }
//     }

//     useEffect(() => {
//         fetchTestimonials();
//     }, []);

//     return (
//         <div className="relative h-auto py-20 md:h-[750px] w-full flex items-center justify-center overflow-hidden">
//             <Image src="/testimonial-bg.svg" fill alt="" className="object-cover"/>
//             <div className="absolute top-0 left-0 w-full h-full bg-brand/30"/>
//             <div className="z-20 flex px-10 md:px-0 flex-col items-center max-w-[1200px]">
//                 <span className="rounded-full bg-brandSecondary px-4 py-2 text-white">Reseñas</span>
//                 <h3 className="text-3xl md:text-6xl text-white my-10 text-center">Lo que <span className="text-brand">Dicen Nuestros Pacientes</span>
//                 </h3>
//                 <p className="text-md text-white text-center max-w-[800px] mb-12">
//                     Experimente la diferencia de la atención personalizada, la tecnología avanzada y el compromiso con
//                     su bienestar. Nuestros terapeutas capacitados están dedicados a ayudarlo a lograr una salud y una
//                     recuperación óptimas.
//                 </p>

//                 {/* Carousel container */}
//                 <div className="relative w-full">
//                     {/* Carousel */}
//                     <div
//                         className="w-full overflow-hidden"
//                         onTouchStart={handleTouchStart}
//                         onTouchMove={handleTouchMove}
//                         onTouchEnd={handleTouchEnd}
//                     >
//                         <div
//                             className="flex transition-transform duration-500 ease-in-out"
//                             style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
//                         >
//                             {reviews.map((testimonial) => (
//                                 <div
//                                     key={testimonial.id}
//                                     className={`flex-shrink-0 transition-all duration-300 px-4 w-full ${
//                                         slidesToShow === 1
//                                             ? 'w-full'
//                                             : slidesToShow === 2
//                                                 ? 'w-1/2'
//                                                 : 'w-1/3'
//                                     }`}
//                                 >
//                                     <div className="h-full bg-white rounded-2xl p-8 flex flex-col justify-between">
//                                         <div className="flex gap-2">
//                                             {Array.from(Array(5).keys()).map((score) => (
//                                                 <Star
//                                                     size={18}
//                                                     key={score}
//                                                     className={`text-yellow-500 ${score < testimonial.rating && 'fill-yellow-500'}`}
//                                                 />
//                                             ))}
//                                         </div>
//                                         <p className="text-sm leading-6 my-6 line-clamp-4">{testimonial.text}</p>
//                                         <div className="flex gap-4">
//                                             {testimonial.profile_photo_url ? (
//                                                 <Image
//                                                     src={testimonial.profile_photo_url}
//                                                     width={50}
//                                                     height={50}
//                                                     alt={testimonial.text}
//                                                     className="rounded-full h-[50px] w-[50px] object-cover"
//                                                 />
//                                             ) : (
//                                                 <div className="w-[50px] h-[50px] rounded-full bg-gray-200"/>
//                                             )}
//                                             <div>
//                                                 <h6 className="text-lg font-bold">{testimonial.author_name}</h6>
//                                                 <p className="text-sm">{testimonial.relative_time_description}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Navigation buttons */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-6 bg-white rounded-full p-2 shadow-md z-10"
//                         aria-label="Previous testimonial"
//                     >
//                         <ChevronLeft className="h-6 w-6 text-brand" />
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-6 bg-white rounded-full p-2 shadow-md z-10"
//                         aria-label="Next testimonial"
//                     >
//                         <ChevronRight className="h-6 w-6 text-brand" />
//                     </button>

//                     {/* Fallback for when reviews are loading or empty */}
//                     {reviews.length === 0 && (
//                         <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
//                             {[1, 2, 3].map((i) => (
//                                 <div key={i} className="bg-white/80 rounded-2xl p-8 w-full md:w-1/3 h-[300px] animate-pulse">
//                                     <div className="flex gap-2 mb-4">
//                                         {Array.from(Array(5).keys()).map((score) => (
//                                             <div key={score} className="w-4 h-4 rounded-full bg-gray-300" />
//                                         ))}
//                                     </div>
//                                     <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
//                                     <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                                     <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
//                                     <div className="h-4 bg-gray-300 rounded w-4/6 mb-8"></div>
//                                     <div className="flex items-center gap-4 mt-auto">
//                                         <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
//                                         <div>
//                                             <div className="h-5 bg-gray-300 rounded w-24 mb-1"></div>
//                                             <div className="h-3 bg-gray-300 rounded w-16"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
