import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderData } from "../../../utils/sliderData";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1400,
    },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: {
      max: 1400,
      min: 1090,
    },
    items: 2,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      responsive={responsive}
      swipeable={true}
      arrows
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={true}
      className="py-16 bg-stone-800 "
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="px-2"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
    >
      {sliderData.map((data, index) => (
        <div
          key={index}
          className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] flex flex-col justify-center items-center p-10 bg-[#474747]"
        >
          <span className="text-[#FFFFFF] text-[16px] md:text-[20px] lg:text-[25px] font-bold">
            {data.post}
          </span>
          <span className="text-[#D6D6D6] text-[10px] md:text-[12px] lg:text-[17px] font-light mt-2 mr-20">
            - {data.author}.
          </span>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
