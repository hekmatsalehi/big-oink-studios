import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1400,
    },
    items: 3,
    slidesToSlide: 2,
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
      min: 768,
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
      <div className="w-[360] h-[360px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="w-[360] h-[360px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="w-[360] h-[360px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1663183539592-1a769606c069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="w-[360] h-[360px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="w-[360] h-[360px]">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/photos/glacial-mountain-garibaldi-lake-with-turquoise-water-in-the-middle-of-picture-id1244372877?b=1&k=20&m=1244372877&s=170667a&w=0&h=6hfucMB9SGJyI5zlXQwUtr-Duoi_8FSul4NMTwTgD7w="
        />
      </div>
    </Carousel>
  );
};

export default Slider;
