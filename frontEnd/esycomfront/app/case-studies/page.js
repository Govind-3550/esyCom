"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const CaseStudies = () => {
  const [data, setData] = useState({
    firstHeading: "",
    secondHeading: "",
    desc: "",
    scrollerText: "",
    images: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/case-studies-pages?populate=*`
        );
        const jsonData = await response.json();

        if (jsonData.data.length > 0) {
          const attributes = jsonData.data[0].attributes;

          setData({
            firstHeading: attributes.fistHeading,
            secondHeading: attributes.secondHeading,
            desc: attributes.desc,
            scrollerText: attributes.scrollerText,
            images: attributes.ImageSection.data.map(
              (image) => image.attributes.url
            ),
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="section_cms-d2c">
        <div className="w-layout-vflex cs-container-d2c">
          <div className="text-block-93">
            {data.firstHeading}
            {/* Case Studies */}
          </div>
          <div className="text-block-94">
            {data.secondHeading}
            {/* Success Stories &amp; Results */}
          </div>
          <div className="text-block-95">{data.desc}</div>
        </div>

        <div className="cms-middle-container none-landing">
          <div className="div-block-24">
            <div className="collection-list-wrapper-2 w-dyn-list">
              <div role="list" className="collection-list-6 w-dyn-items w-row">
                <div
                  role="listitem"
                  className="collection-item-3 w-dyn-item w-col w-col-6"
                >
                  <img
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[2] ||
                      "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325.png"
                    }`}
                    alt=""
                    sizes="100vw"
                    srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[2]
                    } 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${data.images[2]} 708w`}
                  />
                </div>
                <div
                  role="listitem"
                  className="collection-item-3 w-dyn-item w-col w-col-6"
                >
                  <img
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[3] ||
                      "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394.png"
                    }`}
                    alt=""
                    sizes="100vw"
                    srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[3]
                    } 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${data.images[3]} 708w`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="collection-list-5 w-dyn-items w-row">
              <div
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-6"
              >
                <a
                  href="/case-studies/stylish-wodrobe"
                  className="w-inline-block"
                >
                  <img
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[2] ||
                      "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325.png"
                    }`}
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                    srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[2]
                    } 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[2]
                    } 800w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[2]
                    } 1080w,  ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${data.images[2]} 1118w`}
                  />
                </a>
              </div>
              <div
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-6"
              >
                <a
                  href="/case-studies/the-good-leaf"
                  className="w-inline-block"
                >
                  <img
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[3] ||
                      "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394.png"
                    }`}
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                    srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[3]
                    } 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[3]
                    } 800w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[3]
                    } 1080w,  ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${data.images[3]} 1118w`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="img-cms-mobile">
          <div className="w-dyn-list">
            <div role="list" className="collection-list-7 w-dyn-items w-row">
              <div
                role="listitem"
                className="collection-item-4 w-dyn-item w-col w-col-6"
              >
                <a
                  href="/case-studies/stylish-wodrobe"
                  className="w-inline-block"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[0] ||
                      "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325.png"
                    }`}
                    loading="eager"
                    alt=""
                    sizes="100vw"
                    srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[0]
                    } 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${data.images[0]} 708w`}
                    className="image-174"
                  />
                </a>
              </div>
              <div
                role="listitem"
                className="collection-item-4 w-dyn-item w-col w-col-6"
              >
                <a
                  href="/case-studies/the-good-leaf"
                  className="w-inline-block"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[1] ||
                      "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394.png"
                    }`}
                    loading="eager"
                    alt=""
                    sizes="100vw"
                    srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.images[1]
                    } 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${data.images[1]} 708w`}
                    className="image-174"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_ctc-d2c ss-mobile">
        <div className="div-block-22">
          <div className="text-block-41">
            {data.scrollerText}
            {/* Faster Websites. Higher conversion. More revenue. */}
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
              Faster Websites. Higher conversion. More revenue.
            </div>
            {/* Second text block - immediately follows the first one */}
            <div className="text-block-55">
              Faster Websites. Higher conversion. More revenue.
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
