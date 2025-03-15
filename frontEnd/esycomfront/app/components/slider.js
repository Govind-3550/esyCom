"use client";
import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-section-twos?populate=*`);
        const jsonData = await res.json();

        const { Heading, desc, carouselImg } = jsonData.data[0].attributes;
        const images = carouselImg.data.map((img) => img.attributes.url);
        setImages(images);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  const totalImages = images.length;

  const updateLayout = () => {
    if (window.innerWidth < 550) {
      setImagesPerPage(2); // Show 2 images on small screens
      setIsMobile(true);
    } else if (window.innerWidth < 765) {
      setImagesPerPage(3); // Show 3 images on medium screens
      setIsMobile(true);
    } else {
      setImagesPerPage(6); // Show 6 images on larger screens
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const homeSlider = useRef();
  const scrollAmount = 190;

  const handleLeftClick = () => {
    homeSlider.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    homeSlider.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    // setTimeout(checkScroll, 300);
    // Check after scroll
  };

  return (
    <section
      className={`section-11 flex w-full items-center justify-center mb-0 pb-0 pl-0 gap-6 ${
        isMobile ? "flex-col" : "flex-row"
      }`}
    >
      {!isMobile && (
        <div className="left-btn-d2c right-d2c" onClick={handleLeftClick}>
          <div className="w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#D3C3F8"></circle>
              <path
                d="M32.0256 24.0435L32.0256 25.5203L18.1024 25.5271L24.4283 31.853L23.3677 32.9136L15.236 24.7819L23.3677 16.6502L24.4283 17.7108L18.1024 24.0367L32.0256 24.0435Z"
                fill="#140152"
              ></path>
            </svg>
          </div>
        </div>
      )}

      <div
        className="home-slider box-border overflow-hidden w-full max-w-[1136px] flex"
        ref={homeSlider}
      >
        <div
          className="home-inner-slider box-border flex transition-transform duration-500 justify-center"
         
        >
          {images
            .map((src, index) => (
              <div
                key={index}
                className={`inner-slides box-border ${
                  imagesPerPage === 2
                    ? "w-1/2"
                    : imagesPerPage === 3
                    ? "w-1/3"
                    : "w-1/6"
                }`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${src || ""}`}
                  loading="eager"
                  alt={`Slider image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      {!isMobile && (
        <div
          className="right-btn-d2c lelft-arrow-d2c"
          onClick={handleRightClick}
        >
          <div className="w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#D3C3F8"></circle>
              <path
                d="M15.9744 23.9565L15.9744 22.4797L29.8976 22.4729L23.5717 16.147L24.6323 15.0864L32.764 23.2181L24.6323 31.3498L23.5717 30.2892L29.8976 23.9633L15.9744 23.9565Z"
                fill="#140152"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center gap-6 mt-4 responsiveBtn">
          <div className="left-btn-d2c right-d2c" onClick={handleLeftClick}>
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#D3C3F8"></circle>
                <path
                  d="M32.0256 24.0435L32.0256 25.5203L18.1024 25.5271L24.4283 31.853L23.3677 32.9136L15.236 24.7819L23.3677 16.6502L24.4283 17.7108L18.1024 24.0367L32.0256 24.0435Z"
                  fill="#140152"
                ></path>
              </svg>
            </div>
          </div>

          <div
            className="right-btn-d2c lelft-arrow-d2c"
            onClick={handleRightClick}
          >
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#D3C3F8"></circle>
                <path
                  d="M15.9744 23.9565L15.9744 22.4797L29.8976 22.4729L23.5717 16.147L24.6323 15.0864L32.764 23.2181L24.6323 31.3498L23.5717 30.2892L29.8976 23.9633L15.9744 23.9565Z"
                  fill="#140152"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Slider;
