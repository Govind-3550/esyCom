import React , {useState , useEffect} from "react";
import Slider from "./slider";
const Carousel = () => {

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-section-twos?populate=*`);
        const jsonData = await res.json();

        const { Heading, desc, carouselImg } = jsonData.data[0].attributes;
        const images = carouselImg.data.map((img) => img.attributes.url);

        setHeading(Heading);
        setDescription(desc);
        setImages(images);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="section_carousel-d2c sc1 pt-32 pb-32 section_carousel-d2c grid gap-20 border-t border-[#d3c3f8] bg-white text-center rounded-none flex-col justify-center items-center mx-auto">
      <div className="top-text-d2c gap-[39px] text-center flex flex-col mx-[200px]">
        <div className="title-subtitle-2-d2c hptxt sm:text-center md:gap-[10px] flex flex-col order-0 justify-center items-center">
          <div className="subtitle-h1-center-aligned text-[#060237] text-[48px] text-center tracking-[-0.96px] justify-center items-center font-bold leading-[1.1em] flex lg:gap-0 lg:leading-[120%]
">
          { heading.split('<br>')[0]}<br/>{heading.split('<br>')[1]}  {/* || 'Stunningly Crafted Shopify Solutions <br/> Driven by Insights'}  */}
          </div>
        </div>
        <div className="description-d2c flex
">
          <div className="body-large text-[#060237] text-[20px] leading-normal flex
">
           { description || `As Shopify Partners and a leading eCommerce Web Design Agency, we
            empower brands to thrive through strategic design and robust Shopify
            development. We bring a fresh strategic approach to your brand,
            focusing on delivering pixel-perfect websites, built for Conversions
            & Growth.`}
          </div>
        </div>
      </div>
      <Slider></Slider>
    </section>
  );
};

export default Carousel;
