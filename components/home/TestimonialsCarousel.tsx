'use client';
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "../ui/button";

type Review = {
    id: number;
    text: string;
    relative_time_description: string;
    time: number;
    rating: number;
    profile_photo_url: string;
    author_name: string;
    author_url: string;
}

export function TestimonialsCarousel() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(5);
    const totalSlides = Math.ceil((reviews?.length || 0) / slidesToShow);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Responsive slides to show
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(3);
            } else if (window.innerWidth < 1280) {
                setSlidesToShow(4);
            } else {
                setSlidesToShow(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    }, [totalSlides]);

    // Auto slide
    useEffect(() => {
        if (reviews.length > 0) {
            const timer = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [nextSlide, reviews.length]);

    // Touch events for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextSlide();
        } else if (touchEndX.current - touchStartX.current > 50) {
            prevSlide();
        }
    };

    async function fetchTestimonials() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WORKER_URL}/google/reviews`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
            }});
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
           
            const data = await response.json();
            setReviews(data.reviews || []);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            setReviews([]);
        }
    }

    useEffect(() => {
        fetchTestimonials();
    }, []);

    function handleRedirectReview() {
        const url = `https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`;
        window.open(url, '_blank');
    }

    return (
        <div className="bg-brand/30">
        <div className="relative h-auto py-20 md:h-[750px] w-full flex items-center justify-center overflow-hidden">
            <Image src="/testimonial-bg.svg" fill alt="" className="object-cover"/>
            <div className="absolute top-0 left-0 w-full h-full"/>
            <div className="z-20 flex px-4 md:px-6 lg:px-10 flex-col items-center max-w-[1400px] w-full">
                <span className="rounded-full bg-brandSecondary px-4 py-2 text-white">Reseñas</span>
                <h3 className="text-3xl md:text-6xl text-white my-10 text-center">Lo que <span className="text-brand">Dicen Nuestros Pacientes</span>
                </h3>
                <p className="text-md text-white text-center max-w-[800px] mb-12">
                    Experimente la diferencia de la atención personalizada, la tecnología avanzada y el compromiso con
                    su bienestar. Nuestros terapeutas capacitados están dedicados a ayudarlo a lograr una salud y una
                    recuperación óptimas.
                </p>

                {/* Carousel container */}
                <div className="relative w-full">
                    {reviews.length > 0 ? (
                        <>
                            {/* Carousel */}
                            <div 
                                className="w-full overflow-hidden"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div 
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                                >
                                    {reviews.map((testimonial) => (
                                        <div 
                                            key={testimonial.id}
                                            className={`flex-shrink-0 transition-all duration-300 px-2 ${
                                                slidesToShow === 1 
                                                    ? 'w-full' 
                                                    : slidesToShow === 2 
                                                        ? 'w-1/2' 
                                                        : slidesToShow === 3
                                                            ? 'w-1/3'
                                                            : slidesToShow === 4
                                                                ? 'w-1/4'
                                                                : 'w-1/5'
                                            }`}
                                        >
                                            <div className="h-full bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-md">
                                                <div className="flex gap-2">
                                                    {Array.from(Array(5).keys()).map((score) => (
                                                        <Star 
                                                            size={18} 
                                                            key={score}
                                                            className={`text-yellow-500 ${score < testimonial.rating && 'fill-yellow-500'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-sm leading-6 my-6 line-clamp-4">{testimonial.text}</p>
                                                <div className="flex gap-4">
                                                    {testimonial.profile_photo_url ? (
                                                        <Image 
                                                            src={testimonial.profile_photo_url} 
                                                            width={40} 
                                                            height={40} 
                                                            alt={testimonial.text} 
                                                            className="rounded-full h-[40px] w-[40px] object-cover" 
                                                        />
                                                    ) : (
                                                        <div className="w-[40px] h-[40px] rounded-full bg-gray-200"/>
                                                    )}
                                                    <div>
                                                        <h6 className="text-sm font-bold">{testimonial.author_name}</h6>
                                                        <p className="text-xs">{testimonial.relative_time_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation buttons */}
                            {reviews.length > slidesToShow && (
                                <>
                                    <button 
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-6 bg-white rounded-full p-2 shadow-md z-10"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="h-6 w-6 text-brand" />
                                    </button>
                                    <button 
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-6 bg-white rounded-full p-2 shadow-md z-10"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="h-6 w-6 text-brand" />
                                    </button>
                                </>
                            )}

                            {/* Dots indicators */}
                            {totalSlides > 1 && (
                                <div className="flex justify-center gap-2 mt-8">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                currentSlide === index ? 'bg-brand' : 'bg-white/50'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        /* Fallback for when reviews are loading or empty */
                        <div className="w-full flex flex-wrap gap-4 justify-center">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="bg-white/80 rounded-2xl p-4 sm:p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[250px] animate-pulse shadow-md">
                                    <div className="flex gap-2 mb-4">
                                        {Array.from(Array(5).keys()).map((score) => (
                                            <div key={score} className="w-4 h-4 rounded-full bg-gray-300" />
                                        ))}
                                    </div>
                                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-4/6 mb-8"></div>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
                                        <div>
                                            <div className="h-5 bg-gray-300 rounded w-24 mb-1"></div>
                                            <div className="h-3 bg-gray-300 rounded w-16"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-2 mx-auto pb-10">
            <Button onClick={handleRedirectReview} size="lg" variant="branded" className="flex items-center justify-center gap-2 mx-auto h-[70px] rounded-2xl">
                <Image src="/icons/g-logo.png" width={50} height={50} alt="google logo" />
                <p className="text-3xl">Dejanos saber tu experiencia!</p>
            </Button>
        </div>
       
        </div>
    );
}
