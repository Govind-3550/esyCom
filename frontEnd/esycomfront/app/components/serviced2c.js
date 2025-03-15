"use client";
import React, { useRef, useState, useEffect } from "react";

const ServicesD2C = () => {
  const homeSliderNew = useRef();
  const scrollAmount = 310;

  const handleLeftClickNew = () => {
    homeSliderNew.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    console.log("lund");
  };

  const handleRightClickNew = () => {
    homeSliderNew.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const [mainHeading, setMainHeading] = useState("");
  const [firstContainerHeading, setFirstContainerHeading] = useState("");
  const [secondContainerHeading, setSecondContainerHeading] = useState("");
  const [thirdContainerHeading, setThirdContainerHeading] = useState("");
  const [firstList, setFirstList] = useState({});
  const [secondList, setSecondList] = useState({});
  const [thirdList, setThirdList] = useState({});
  const [firstContainerImage, setFirstContainerImage] = useState("");
  const [secondContainerImage, setSecondContainerImage] = useState("");
  const [thirdContainerImage, setThirdContainerImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/home-section-threes?populate=*`
        );
        const jsonData = await res.json();

        const { data } = jsonData;
        const firstData = data[0].attributes;

        // Setting values for main heading and container headings
        setMainHeading(firstData.mainHeading);
        setFirstContainerHeading(firstData.containerHeding);
        setSecondContainerHeading(firstData.secondContainerHeding);
        setThirdContainerHeading(firstData.thirdContainerHeading);

        // Setting the lists
        setFirstList(firstData.firstList);
        setSecondList(firstData.secondList);
        setThirdList(firstData.thirdList);

        // Setting images
        setFirstContainerImage(firstData.containerImg.data[0].attributes.url);
        setSecondContainerImage(
          firstData.secondContainerImg.data[0].attributes.url
        );
        setThirdContainerImage(
          firstData.thirdContainerImg.data[0].attributes.url
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section_services-d2c">
      <div className="case-study-container-d2c">
        <div className="subtitles-d2c">
          <div className="descriptions-d2c">
            <div className="text-block-35">
              <span className="subtitle-h1-center-aligned pl-[24px] pr-[24px]">
                <strong className="bold-text-6">Interaction </strong>
                {mainHeading.split("<br />")[0]}
                <br /> {mainHeading.split("<br />")[1]}
              </span>
            </div>
            <div className="text-block-64">
              {mainHeading.split("<br />")[0]}
              {mainHeading.split("<br />")[1]}
            </div>
          </div>
        </div>
      </div>

      <div className="main-frame-d2c">
        <div className="brix-sectionoverflowhidden3">
          <div
            id="CRO"
            className="brix-containerdefault3 w-container"
            ref={homeSliderNew}
          >
            <div
              className="brix---slider-wrapper-3 w-slider "
              data-autoplay="false"
              data-infinite="true"
            >
              <div className="brix---slider-mask-width-388px w-slider-mask ">
                {/* Slide 1 */}
                <div className="brix---slide-item-mg-4 w-slide">
                  <div className="service-card-d2c s-card-1-d2c">
                    <div className="service-details-d2c">
                      <img
                        loading="eager"
                        src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                          /\/$/,
                          ""
                        )}${
                          firstContainerImage ||
                          "https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b719e3d75143640db60b_CRO.png"
                        }`}
                        alt="Conversion Rate Optimisation"
                        width={500}
                        height={300}
                        className="pt-4 max-w-full inline-block align-middle border-0"
                      />
                    </div>
                    <div className="servise-detail-d2c">
                      <div className="sd-title-d2c">
                        <div className="text-block-79">
                          {/*       Conversion Rate <br aria-hidden="true"></br>{" "}
                          Optimisation */}
                          {
                            firstContainerHeading.split(
                              '<br aria-hidden="true">'
                            )[0]
                          }
                          <br aria-hidden="true"></br>{" "}
                          {
                            firstContainerHeading.split(
                              '<br aria-hidden="true">'
                            )[1]
                          }
                        </div>
                      </div>
                      <div className="sd-features-d2c">
                        {Object.values(firstList).map((item, index) => (
                          <div className="sd-features--d2c" key={index}>
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                              alt={item}
                              width={20}
                              height={20}
                            />
                            <div className="text-block-37">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="brix---slide-item-mg-4 w-slide">
                  <div className="service-card-d2c s-card-1-d2c">
                    <div className="service-details-d2c">
                      <img
                        loading="eager"
                        src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                          /\/$/,
                          ""
                        )}${
                          secondContainerImage ||
                          "https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b719de870e6b0eade322_UX.png"
                        }`}
                        alt="UI/UX Design"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="servise-detail-d2c">
                      <div className="sd-title-d2c">
                        <div className="text-block-79">
                          {/*  UI / UX <br aria-hidden="true"></br> Design */}
                          {
                            secondContainerHeading.split(
                              '<br aria-hidden="true">'
                            )[0]
                          }
                          <br aria-hidden="true"></br>{" "}
                          {
                            secondContainerHeading.split(
                              '<br aria-hidden="true">'
                            )[1]
                          }
                        </div>
                      </div>
                      <div className="sd-features-d2c">
                        {Object.values(secondList).map((item, index) => (
                          <div className="sd-features--d2c" key={index}>
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                              alt={item}
                              width={20}
                              height={20}
                            />
                            <div className="text-block-37">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className="brix---slide-item-mg-4 w-slide">
                  <div className="service-card-d2c s-card-1-d2c">
                    <div className="service-details-d2c">
                      <img
                        loading="eager"
                        src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                          /\/$/,
                          ""
                        )}${
                          thirdContainerImage ||
                          "https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b7193510ca1863111ec5_WD.png"
                        }`}
                        alt="Web Development"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="servise-detail-d2c">
                      <div className="sd-title-d2c">
                        <div className="text-block-80">
                          {
                            thirdContainerHeading.split(
                              '<br aria-hidden="true">'
                            )[0]
                          }
                          <br aria-hidden="true"></br>{" "}
                          {
                            thirdContainerHeading.split(
                              '<br aria-hidden="true">'
                            )[1]
                          }
                        </div>
                      </div>
                      <div className="sd-features-d2c">
                        {Object.values(thirdList).map((item, index) => (
                          <div className="sd-features--d2c" key={index}>
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                              alt={item}
                              width={20}
                              height={20}
                            />
                            <div className="text-block-37">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 4 */}
              </div>

              {/* Slider controls, if needed */}
              {/* <div className="w-slider-nav w-round" /> */}
            </div>
            <div className="flex gap-[55px] justify-center mt-4 responsiveBtnNew absolute  right-[60px]">
              <div className="" onClick={handleLeftClickNew}>
                <div className="button-arrow  s1-arrow-d2c demo-check-btn w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="24" fill="#D3C3F8" />
                    <mask
                      id="mask-left"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="7"
                      y="7"
                      width="34"
                      height="34"
                    >
                      <rect
                        x="24"
                        y="40.9705"
                        width="24"
                        height="24"
                        transform="rotate(-135 24 40.9705)"
                        fill="#FFFF61"
                      />
                    </mask>
                    <g mask="url(#mask-left)">
                      <path
                        d="M32.0256 24.0435L32.0256 25.5203L18.1024 25.5271L24.4283 31.853L23.3677 32.9136L15.236 24.7819L23.3677 16.6502L24.4283 17.7108L18.1024 24.0367L32.0256 24.0435Z"
                        fill="#140152"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="" onClick={handleRightClickNew}>
                <div className="button-arrow  s1-arrow-d2c demo-check-btn w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="24" fill="#D3C3F8" />
                    <mask
                      id="mask-right"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="7"
                      y="7"
                      width="34"
                      height="34"
                    >
                      <rect
                        x="24"
                        y="7.02954"
                        width="24"
                        height="24"
                        transform="rotate(45 24 7.02954)"
                        fill="#FFFF61"
                      />
                    </mask>
                    <g mask="url(#mask-right)">
                      <path
                        d="M15.9744 23.9565L15.9744 22.4797L29.8976 22.4729L23.5717 16.147L24.6323 15.0864L32.764 23.2181L24.6323 31.3498L23.5717 30.2892L29.8976 23.9633L15.9744 23.9565Z"
                        fill="#140152"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper-d2c">
        <div className="service-card-d2c">
          <div className="service-details-d2c">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/670e093a1039f87d6fc20b7f_Frame%201000010693.png"
              alt=""
            />
          </div>
          <div className="servise-detail-d2c">
            <div className="sd-title-d2c">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/670e1d74a551e3f4c403a9f7_Title.png"
                alt=""
                className="img-142"
              />
            </div>
            <div className="sd-features-d2c">
              <div className="sd-features--d2c">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                  alt=""
                />
                <div className="text-block-37">Design Optimization</div>
              </div>
              <div className="sd-features--d2c">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                  alt=""
                />
                <div className="text-block-37">Speed Optimization</div>
              </div>
              <div className="sd-features--d2c">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                  alt=""
                />
                <div className="text-block-37">On Page SEO</div>
              </div>
              <div className="sd-features--d2c">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                  alt=""
                />
                <div className="text-block-37">
                  Tech Maintenance and Support
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="button-d2c-1 button-2-d2c button2-white-d2c w-inline-block"
            >
              <div className="text-d2cxx book-call-d2c">Book a Call</div>
              <div className="arrow-div-d2c">
                <div className="arrow-d2c w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="36"
                    viewBox="0 0 37 36"
                    fill="none"
                  >
                    <circle
                      cx="18.5"
                      cy="18.0007"
                      r="18"
                      fill="#140152"
                    ></circle>
                    <mask
                      id="mask0_751_3236"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="10"
                      y="10"
                      width="17"
                      height="17"
                    >
                      <rect
                        x="10.5"
                        y="10.0007"
                        width="16"
                        height="16"
                        fill="#FFFF61"
                      ></rect>
                    </mask>
                    <g mask="url(#mask0_751_3236)">
                      <path
                        d="M14.5353 23.116L13.7 22.2807L21.5723 14.4006H14.4153V13.2007H23.6153V22.4006H22.4153V15.2437L14.5353 23.116Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesD2C;
