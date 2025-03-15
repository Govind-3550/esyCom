"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
      <section className="bg-white flex items-center w-full relative overflow-hidden py-10">
        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap min-w-max"
            animate={{
              x: ["0%", "-50%"], // Moves left by half its width
            }}
            transition={{
              repeat: Infinity,
              duration: 20, // Adjust speed here
              ease: "linear",
            }}
          >
            {/* Duplicating images only once to ensure seamless loop */}
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Brand Logo ${index + 1}`}
                className="h-16 mx-2 mix-blend-darken" // Adjusted spacing for smooth loop
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/brand-logos?populate=*`
    );
    const data = await res.json();
    const images =
      data?.data?.length > 0
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
