"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BrandPartners from "./components/brandsConting";
import Carousel from "./components/courosel";
import ServicesD2C from "./components/serviced2c";
import CaseStudies from "./components/caseStudies";

export default function Home() {
  const [dataObj, setDataObj] = useState(null);
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/home-section-ones?populate=*`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setDataObj(data);
        console.log(data);
        
        // Fetch subtitle from another API
        const subtitleRes = await fetch("http://localhost:1337/api/home-last-subtitles", {
          cache: "no-store",
        });

        if (!subtitleRes.ok) {
          throw new Error(`HTTP error! status: ${subtitleRes.status}`);
        }

        const subtitleData = await subtitleRes.json();
        setSubtitle(subtitleData?.data[0]?.attributes?.subtitlle || ""); // Extract subtitle safely
        console.log("Subtitle Data:", subtitleData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="section_homepage--frame-d2c flex gap-8 bg-white pl-[120px] pr-0 xl:gap-8">
        <div className="mobile-right-frame hidden">
          <Image
            src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section.png"
            alt="Hero Section"
            width={1468}
            height={823}
            className="image-121"
            loading="lazy"
            style={{ objectFit: "cover" }} // Optional: to control how the image fits
          />
        </div>

        <div className="flex flex-col lg:flex-row max-w-[679px]">
          <div className="left-frame--component-d2c mt-[109px] mb-[109px]">
            <div className="description-section-d2c grid gap-x-[64px] gap-y-[64px] flex-col justify-center items-stretch w-full mt-0 mb-0">
              <div className="title-1-d2c grid gap-x-[24px] gap-y-[24px] flex-col flex-0 order-0 justify-start items-start self-auto">
                <h1 className="hero-title-h1-left-aligned text-[#060237] text-[48px] text-left tracking-[-0.96px] font-bold leading-[120%]">
                  {dataObj?.data[0]?.attributes?.heading}
                </h1>
                <p className="body-large text-[#060237] text-[20px] leading-normal flex">
                  {dataObj?.data[0]?.attributes?.subheading}
                </p>
                <div className="sub-point-d2c flex flex-col">
                  {dataObj?.data?.[0]?.attributes?.list &&
                    Object.keys(dataObj?.data[0]?.attributes?.list).map(
                      (key, index) => {
                        const value = dataObj?.data[0]?.attributes?.list[key]; // Access the value using the key
                        return (
                          <div
                            key={index}
                            className="flex flex-row items-start gap-6 px-[10px] py-[6px]"
                          >
                            <img
                              className="max-w-full inline-block align-middle border-0"
                              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                              alt="Unmatched Speed & Stability"
                            />
                            <span className="text-block-23 text-[#060237] font-bold text-[20px] leading-normal md:font-bold">
                              {value} {/* Render the value of the key */}
                            </span>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
              <div className="left-frame-button-d2c ">
                <div className="w-layout-hflex flex-block-6 flex gap-3.5 lg:flex-row lg:gap-3.5 lg:ml-0 lg:mr-0">
                  <a
                    href="/audit-request-form"
                    className="button-d2c-1 btn3-d2ccc topbtn flex items-center justify-start gap-0 px-12 py-4 border border-[#060237] bg-transparent text-center rounded-[48px] flex-shrink-0 max-w-full text-decoration-none text-transparent 
  lg:border "
                  >
                    <div className="text-d2cxx text-2-d2c flex items-center text-center text-[16px] not-italic no-underline whitespace-normal border-0 lg:text-[#060237] lg:font-medium">
                                       {dataObj?.data[0]?.attributes?.buttonText['auditBtn'] || 'Audit My Website' }

                    </div>
                    <div className="arrow-div-d2c nxt hidden bg-[#68505000] items-center mb-0 pb-0 nxt:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <circle cx="18" cy="18" r="18" fill="#140152"></circle>
                        <mask
                          id="mask0_1289_4432"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="10"
                          y="10"
                          width="16"
                          height="16"
                        >
                          <rect
                            x="10"
                            y="10"
                            width="16"
                            height="16"
                            fill="#FFFF61"
                          />
                        </mask>
                        <g mask="url(#mask0_1289_4432)">
                          <path
                            d="M14.0356 23.1153L13.2002 22.2799L21.0725 14.3999H13.9156V13.2H23.1155V22.3999H21.9156V15.243L14.0356 23.1153Z"
                            fill="white"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    href={dataObj?.data[0]?.attributes?.buttonText['talkBtnHref']}
                    target="_blank"
                    className="button-d2c-1 ttu order-1 w-[200px] ml-0 mr-0 bg-[#140152] text-center border-solid border-0 rounded-[48px] flex-shrink-0 justify-center items-center max-w-full p-[7px_7px_7px_32px] no-underline flex sm:gap-[42px] md:gap-[42px] border-black text-transparent"
                  >
                    <div className="text-d2cxx talk-us-d2c text-white whitespace-normal text-center border-0 flex flex-row items-center text-[16px] not-italic no-underline sm:font-medium">
                      {dataObj?.data[0]?.attributes?.buttonText['talkTalk'] || 'Talk to Us' } 

                    </div>
                    <div className="arrow-d2c bg-[#68505000] justify-center items-center mb-0 pb-0 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <circle cx="24" cy="24" r="24" fill="white"></circle>
                        <mask
                          id="mask0_302_17084"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="12"
                          y="12"
                          width="24"
                          height="24"
                        >
                          <rect
                            x="12"
                            y="12"
                            width="36"
                            height="36"
                            fill="#FFFF61"
                          />
                        </mask>
                        <g mask="url(#mask0_302_17084)">
                          <path
                            d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z"
                            fill="#060237"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-frame-d2c flex-col flex-0 justify-center items-end max-w-[609px] max-h-[715px] overflow-clip md:flex-row md:justify-end md:items-center">
          <Image
src={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${dataObj?.data[0]?.attributes?.rightSideImg?.data[0]?.attributes?.formats?.large?.url || ""}`}

            alt="Hero Section Desktop"
            width={1827}
            height={1024}
            className="image-120"
            loading="eager"
            style={{ objectFit: "cover" }} // Optional: to control how the image fits
          />
        </div>
      </section>
      <BrandPartners></BrandPartners>
      <Carousel></Carousel>
      <ServicesD2C></ServicesD2C>
      <CaseStudies></CaseStudies>
      <section className="section_ctc-d2c ctc-mobile">
        <div className="div-block-22">
          <div className="text-block-41">
          {subtitle}
          </div>
        </div>
        <div className="marquee2-d2c overflow-hidden relative">
          <motion.div
            className="inner-marquee2-d2c flex"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              whiteSpace: "nowrap", // Ensures text doesn't break
            }}
            animate={{
              x: ["0%", "-50%"], // Move from 0% to -50% (this will bring both elements off the screen)
            }}
            transition={{
              repeat: Infinity, // Repeat infinitely
              duration: 10, // Adjust duration for speed
              ease: "linear", // Smooth and continuous movement
            }}
          >
            {/* First text block */}
            <div className="text-block-55 ss-txt">
            {subtitle}

            </div>
            {/* Second text block - immediately follows the first one */}
            <div className="text-block-55">
            {subtitle}

            </div>
          </motion.div>
        </div>
      </section>
 
    </>
  );
}
