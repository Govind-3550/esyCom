"use client";
import React, { useEffect, useState, useRef } from "react";

const BrandPartners = ({ initialImages }) => {
  const [images, setImages] = useState(initialImages || []);
  const observer = useRef(null);

  useEffect(() => {
    if (!images.length) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/brand-logos?populate=*`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.length > 0) {
            const imageArray = data.data[0].attributes.brandsImg.data.map(
              (img) => `${process.env.NEXT_PUBLIC_API_URL}${img.attributes.url}`
            );
            setImages(imageArray);
          }
        })
        .catch((error) => console.error("Error fetching images:", error));
    }
  }, [images]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("loading", "eager");
        }
      });
    });
    document.querySelectorAll(".brand-logo").forEach((img) => {
      observer.current.observe(img);
    });
    return () => observer.current.disconnect();
  }, [images]);

  return (
    <>
      <section className="relative flex items-center justify-center w-full ">
        <div className="bg-[#d3c3f8] flex-1 w-full max-w-[108px] h-px"></div>

        <div className="flex flex-[0_auto]">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707d64d12c30c0aab593a83_Vector.svg"
              loading="lazy"
              alt="Brand Icon"
              className="max-w-full inline-block align-middle border-0"
            />
          ))}

          <div className="text-[#060237] text-left flex flex-row justify-center items-center w-auto pl-1.5 leading-normal font-plus-jakarta-sans text-lg font-medium antialiased">
            90+ Brands & Counting
          </div>
        </div>

        <div className="bg-[#d3c3f8] flex-1 w-auto h-px max-w-none"></div>
      </section>

      {/* Brand Logos Marquee */}
      <section className=" bg-white   flex flex-row justify-start items-center w-full relative overflow-hidden 
  bg-[var(--white-techd2c)] gap-0
  
  lg:border-t-0 lg:border-b lg:border-transparent lg:rounded-none 
  pt-[40px] pb-[40px]">
        <div className="relative flex items-center w-full ">
          {/* Marquee Container */}
          <div className="flex w-max animate-marquee whitespace-nowrap min-w-full">
            {images.length > 0 ? (
              [...images, ...images].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Brand Logo ${index + 1}`}
                  className="brand-logo h-16 mx-4 mix-blend-darken"
                  loading="lazy"
                />
              ))
            ) : (
              <p className="text-center">Loading images...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/brand-logos?populate=*`);
    const data = await res.json();
    const images = data?.data?.length > 0
      ? data.data[0].attributes.brandsImg.data.map(
          (img) => `${process.env.NEXT_PUBLIC_API_URL}${img.attributes.url}`
        )
      : [];
    return { props: { initialImages: images } };
  } catch (error) {
    console.error("Error fetching images on server side:", error);
    return { props: { initialImages: [] } };
  }
}

export default BrandPartners;
