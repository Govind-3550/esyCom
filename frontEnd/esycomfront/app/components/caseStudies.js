import React, { useState, useEffect } from "react";

const CaseStudies = () => {
const [mainHeading, setMainHeading] = useState("");
const [images, setImages] = useState([]);
const [caseStudiesBtnText, setCaseStudiesBtnText] = useState("");
const [lastHeading, setLastHeading] = useState("");
const [callTxt, setCallTxt] = useState("");
const [auditTxt, setAuditTxt] = useState("");
const [callHref, setCallHref] = useState("");
const [auditHref, setAuditHref] = useState("");
const [responsiveImages, setResponsiveImages] = useState([]);

useEffect(() => {
  // Define the async function to fetch data
  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-section-fours?populate=*`);  
      const jsonData = await res.json();

      // Extract main heading and images from the response
      const data = jsonData.data[0].attributes;
      setMainHeading(data.heading);
      setImages(data.images.data.map(image => image.attributes.url)); 

      // Extract new fields from API response
      setCaseStudiesBtnText(data.caseStudiesBtnText);
      setLastHeading(data.lastHeading);
      setCallTxt(data.lastSectionBtnText.calltxt);
      setAuditTxt(data.lastSectionBtnText.audittxt);
      setCallHref(data.lastBtnHref.callhref);
      setAuditHref(data.lastBtnHref.audithref);
      
      // Extract responsive image URLs
      setResponsiveImages(data.responsiveImages.data.map(img => img.attributes.url));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call the fetchData function on component mount
  fetchData();
}, []); // Empty dependency array to call only once on mount
let ar = [responsiveImages[0],responsiveImages[1]]
console.log(ar)
    return (
        <>
      <section className="section_cms-d2c">
        <div className="cms-top-d2c">
          <div className="cms-info-d2c">
            <div className="case-stu-sub">
              <div className="subtitle-h1-center-aligned">{mainHeading}</div>
            </div>
          </div>
        </div>
        <div className="cms-middle-container">
          <div className="div-block-24">
            <div className="collection-list-wrapper-2 w-dyn-list">
              <div role="list" className="collection-list-6 w-dyn-items w-row">
                <div role="listitem" className="collection-item-3 w-dyn-item w-col w-col-6">
                  <a href="/case-studies/stylish-wodrobe" className="w-inline-block">
                    <img
                      loading="eager"
                      src={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${responsiveImages[1] || "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325.png"}`} 
                      alt=""
                      sizes= "(max-width: 479px) 120vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                      srcSet={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${responsiveImages[1]} 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${responsiveImages[1]} 708w`}
                      className="image-171"
                    />
                  </a>
                </div>
                <div role="listitem" className="collection-item-3 w-dyn-item w-col w-col-6">
                  <a href="/case-studies/the-good-leaf" className="w-inline-block">
                    <img
                      loading="eager"
                      src={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${responsiveImages[0] || "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394.png"}`} 
                      alt=""
                      sizes="(max-width: 479px) 120vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                      srcSet= {`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${responsiveImages[0]} 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${responsiveImages[0]} 708w`}
                      className="image-171"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="collection-list-5 w-dyn-items w-row">
              <div role="listitem" className="collection-item-2 w-dyn-item w-col w-col-6">
                <a href="/case-studies/stylish-wodrobe" className="cms-link-left w-inline-block">
                  <img
                    loading="eager"
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[0] || "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container.png"}`} 
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                    srcSet = {`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[0]} 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[0]} 800w, ${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[0]} 1080w,${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[0]} 1118w`}
                    className="image-171"
                  />
                </a>
              </div>
              <div role="listitem" className="collection-item-2 w-dyn-item w-col w-col-6">
                <a href="/case-studies/the-good-leaf" className="cms-link-left w-inline-block">
                  <img
                    loading="eager"
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[1] || "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container.png"}`} 
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                    srcSet = {`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[1]} 500w, ${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[1]} 800w, ${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[1]} 1080w,${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}${images[1]} 1118w`}
                    className="image-171"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cms-footer-btn">
          <a href="/case-studies" className="view-case-studies w-inline-block">
            <div className="text-block-59">{caseStudiesBtnText}</div>
          </a>
        </div>
      </section>
       <section className="section_container-d2c">
       <div className="container_compo-d2c">
         <div className="subtitle-h1-center-aligned">{lastHeading}</div>
         <div className="footer-text-btn-d2c">
           <div className="footer-btn-d2c">
             <a href={callHref} className="button-d2c-1 book-call-d2c w-inline-block">
               <div className="text-d2cxx talk-us-d2c">{callTxt}</div>
               <div className="arrow-div-d2c">
                 <div className="arrow-d2c w-embed">
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                     <circle cx="24" cy="24" r="24" fill="white"></circle>
                     <mask id="mask0_302_17084" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
                       <rect x="12" y="12" width="24" height="24" fill="#FFFF61"></rect>
                     </mask>
                     <g mask="url(#mask0_302_17084)">
                       <path d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z" fill="#060237"></path>
                     </g>
                   </svg>
                 </div>
               </div>
             </a>
             <a href={auditHref} className="button-d2c-1 btn3-d2ccc w-inline-block">
               <div className="text-d2cxx text-2-d2c get-free-d2c">{auditTxt}</div>
               <div className="arrow-div-d2c nxt">
                 <div className="arrow-div-d2c">
                   <div className="arrow-d2c w-embed">
                     <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                       <circle cx="18.5" cy="18.0007" r="18" fill="#140152"></circle>
                       <mask id="mask0_751_3236" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="10" y="10" width="17" height="17">
                         <rect x="10.5" y="10.0007" width="16" height="16" fill="#FFFF61"></rect>
                       </mask>
                       <g mask="url(#mask0_751_3236)">
                         <path d="M14.5353 23.116L13.7 22.2807L21.5723 14.4006H14.4153V13.2007H23.6153V22.4006H22.4153V15.2437L14.5353 23.116Z" fill="white"></path>
                       </g>
                     </svg>
                   </div>
                 </div>
               </div>
             </a>
           </div>
         </div>
       </div>
     </section>
     </>
    );
  };
  
  export default CaseStudies;
  