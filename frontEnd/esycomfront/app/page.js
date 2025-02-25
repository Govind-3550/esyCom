import Image from 'next/image';

export default function Home() {
  return (
    <section className="section_homepage--frame-d2c flex gap-8 bg-white pl-[120px] pr-0 xl:gap-8">
      <div className="mobile-right-frame hidden">
        <Image
          src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section.png"
          alt="Hero Section"
          width={1468}
          height={823}
          className="image-121"
          loading="lazy"
          style={{ objectFit: 'cover' }} // Optional: to control how the image fits
        />
      </div>
      
      <div className="flex flex-col lg:flex-row max-w-[679px]">
        <div className="left-frame--component-d2c mt-[109px] mb-[109px]">
          <div className="description-section-d2c grid gap-x-[64px] gap-y-[64px] flex-col justify-center items-stretch w-full mt-0 mb-0">
            <div className="title-1-d2c grid gap-x-[24px] gap-y-[24px] flex-col flex-0 order-0 justify-start items-start self-auto">
              <h1 className="hero-title-h1-left-aligned text-[#060237] text-[48px] text-left tracking-[-0.96px] font-bold leading-[120%]">
                We build high-converting Shopify stores that drive Profit
              </h1>
              <p className="body-large text-[#060237] text-[20px] leading-normal flex">
                We're a leading Shopify & Shopify Plus agency who design and develop
                strategic ecommerce websites
              </p>
              <div className="sub-point-d2c flex flex-col">
                <div className="flex flex-row items-start gap-6  px-[10px] py-[6px]">
                  <img
                    className="max-w-full inline-block align-middle border-0"
                    src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                    alt="Unmatched Speed & Stability"
                  />
                  <span className="text-block-23 text-[#060237] font-bold text-[20px] leading-normal md:font-bold">Unmatched Speed & Stability</span>
                </div>
                <div className="flex flex-row items-start gap-6  px-[10px] py-[6px]">
                  <img
                                      className="max-w-full inline-block align-middle border-0"
                    src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                    alt="Build for Conversions"
                  />
                  <span className="text-block-23 text-block-23 text-[#060237] font-bold text-[20px] leading-normal md:font-bold">Build for Conversions</span>
                </div>
                <div className="flex flex-row items-start gap-6 px-[10px] py-[6px]">
                  <img
                                      className="max-w-full inline-block align-middle border-0"
                    src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                    alt="Reduced App Stack & Developer Dependencies"
                  />
                  <span className="text-block-23 text-block-23 text-[#060237] font-bold text-[20px] leading-normal md:font-bold">Reduced App Stack & Developer Dependencies</span>
                </div>
              </div>
            </div>
            <div className="left-frame-button-d2c ">
              <div className="w-layout-hflex flex-block-6 flex justify-center items-center gap-6 max-w-full mx-auto p-1.75 px-12 text-center border-0 border-solid border-[#060237] border-t-[#060237] border-r-[#060237] border-b-[#060237] border-l rounded-full ">
                <a
                  href="/audit-request-form"
                  className="button-d2c-1 btn3-d2ccc topbtn flex justify-start items-center gap-0 mx-auto md:mx-auto py-4 px-12 border-2 border-solid border-blue-1-techd2c bg-white text-white rounded-full text-center flex-shrink-0 max-w-full"
                >
                  <div className="text-d2cxx text-2-d2c">Audit My Website</div>
                  <div className="arrow-div-d2c nxt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <circle cx="18" cy="18" r="18" fill="#140152"></circle>
                      <mask id="mask0_1289_4432" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="10" width="16" height="16">
                        <rect x="10" y="10" width="16" height="16" fill="#FFFF61" />
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
                  href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ"
                  target="_blank"
                  className="button-d2c-1 ttu flex justify-center items-center gap-6 mx-auto py-2.5 px-8 rounded-full text-white text-center bg-blue-2-techd2c border-0 border-solid flex-shrink-0 max-w-full order-1"
                >
                  <div className="text-d2cxx talk-us-d2c flex items-center text-white text-center text-lg font-bold md:font-medium">Talk to Us</div>
                  <div className="arrow-d2c flex justify-center items-start self-stretch max-w-full mb-0 bg-[#63565600] text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <circle cx="24" cy="24" r="24" fill="white"></circle>
                      <mask id="mask0_302_17084" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
                        <rect x="12" y="12" width="36" height="36" fill="#FFFF61" />
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
          src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop.png"
          alt="Hero Section Desktop"
          width={1827}
          height={1024}
          className="image-120"
          loading="eager"
          style={{ objectFit: 'cover' }} // Optional: to control how the image fits
        />
      </div>
    </section>
  );
}
