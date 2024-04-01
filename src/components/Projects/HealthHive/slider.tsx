import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({ logos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        cssEase: "linear", // Linear animation for smooth scroll

        slidesToShow: 7,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true, // Enables automatic sliding
        centerPadding: '5px', // Adjust the padding to control space on the sides of the center slide
        


        
        swipeToSlide: true,
        touchMove: true,
    };

    // Handle click on the slide
    // const handleSlideClick = () => {
    //     // This function is supposed to handle the slide click.
    //     // In react-slick, direct navigation to a slide on click isn't straightforward.
    //     // Consider using the slider's existing navigation options (arrows, dots) 
    //     // or exploring other slider libraries for more flexibility.
    // };

    return (
        <div className="logo-slider-container">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="p-4 flex justify-center items-center"> {/* Adjust padding as necessary */}
                        <a href={logo.link || "#!"} target="_blank" rel="noopener noreferrer" className="inline-block"> {/* Inline-block will make the anchor fill the content size */}
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{ maxWidth: '50%', maxHeight: '100%' }} // This will ensure the image is responsive and covers the anchor tag
                                className="w-full h-auto" // Width full and auto height for responsiveness
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;
