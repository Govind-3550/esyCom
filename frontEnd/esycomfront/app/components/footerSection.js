"use client";
import { useEffect, useState } from "react";

const FooterSection = () => {
  const [data, setData] = useState({
    logoName: "",
    desc: "",
    copyright: {},
    footerRightSection: {},
    socialIconHref: {},
    socialIcons: [],
  });
  const pages = ["/boco-shopify-store-build" , "/custom-shopify-landing-page" ,"/case-studies"]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate=*`
        );
        const jsonData = await response.json();

        const attributes = jsonData.data.attributes;

        setData({
          logoName: attributes.logoName,
          desc: attributes.desc,
          copyright: attributes.copyright,
          footerRightSection: attributes.footerRightSection,
          socialIconHref: attributes.socialIconHref,
          socialIcons: attributes.socialIcon.data.map(
            (icon) => icon.attributes.url
          ),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="footer-d2c">
        <div className="footer-container-wrapper-d2c">
          <div className="footer-left-2-d2c">
            <a href="/" className="w-inline-block w--current">
              <div className="boco-logo-d2c footer-logo">
                {data.logoName}
              </div>
            </a>
            <p className="paragraph-7">
              {data.desc}
            </p>
            <div className="w-layout-blockcontainer social-icon-link-container-d2c w-container">
              <div className="social-icon-list-d2c">
                <a
                  href={`${
                    data.socialIconHref[0] ||
                    "https://www.instagram.com/boco.agency/"
                  }`}
                  className="w-inline-block"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.socialIcons[0] ||
                      "https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6706351059ed547b7733da1b_Vector%20(12).svg"
                    }`}
                    loading="lazy"
                    width="53"
                    height="53"
                    alt=""
                    className="image-118"
                  />
                </a>
                <a
                  href={`${
                    data.socialIconHref[1] ||
                    "https://www.linkedin.com/company/boco-ventures/"
                  }`}
                  className="w-inline-block"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                      /\/$/,
                      ""
                    )}${
                      data.socialIcons[1] ||
                      "https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6731b34f0fce48fafa0ab302_basil_linkedin-solid.png"
                    }`}
                    loading="lazy"
                    width="53"
                    height="53"
                    alt=""
                    className="image-118"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="right-footer-d2c">
            <div className="right-footer-component-d2c">
              <h4 className="heading-13">
                {data.footerRightSection.list_heading}
              </h4>
              {data.footerRightSection.list_items?.map((item, index) => (
                <a
                  key={index}
                  href= {`${pages[index]}`}
                  className="w-inline-block"
                >
                  <div className="text-block-9">{item}</div>
                </a>
              ))}

            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer container-24 footer-line-d2c w-container"></div>
        <div className="columns w-row">
          <div className="footer-bottom-d2c column w-col w-col-6">
            <div className="copyright-d2c">
              {data.copyright["copyright"]}
              ,
            </div>
            <div className="footer-boco-d2c">
              {data.copyright["company"]}
            </div>
            <div className="footer-2024-d2c">
              {data.copyright["year"]}
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrapper-d2c">
          <div className="mobile-footer-bottom-2-d2c">
            <div className="text-block-15">© Copyright,</div>
            <div className="text-block-16">BOCO</div>
            <div className="text-block-17">2024</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
