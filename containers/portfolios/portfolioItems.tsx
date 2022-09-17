import React from "react";

const portfolios = [
  {
    img: "https://media.istockphoto.com/photos/sunbeams-lower-antelope-slot-canyon-picture-id1363616245?b=1&k=20&m=1363616245&s=170667a&w=0&h=KN3njIUBf_CAGUio164v8lIQS2sP6yHiJWcWJKCeIlU=",
    title: "John & Jane Smith",
    details:
      "It was such a blast to film the wedding of John and Jane Smith. They requested that the video be really good, so we decided to film a really good video.",
  },
  {
    img: "https://images.unsplash.com/photo-1547480251-f733d0cd8bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbGRlcm5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Dabs All Day Music Video",
    details:
      "Big Oink was hired to film the music video for the newest single “Dabs All Day”, by The Moist Napkins, located in Nashville TN. They paid us money and we filmed them.",
  },
  {
    img: "https://images.unsplash.com/photo-1526996233918-d7059afc59bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGVybmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Horrible Design Promo",
    details:
      "Horrible Design, a local graphic design agency, requested that we film several promos for them. This was such an amazing project. Working with Horrible Design was a breeze, and they were excellent clients. We also did lots of filming, which gave Horrible the chance to tell everyone how awesome they are. It was a really good time. We had a celebratory beer afterwards, which we paid for because Horrible was so much fun to work with.",
  },
  {
    img: "https://media.istockphoto.com/photos/campsite-with-a-wood-material-and-a-campfire-with-a-vintage-teapot-picture-id1299252173?b=1&k=20&m=1299252173&s=170667a&w=0&h=Lat2J-nl5qR5tZFiuJx6MyuLStr9h4NbW3nCthiPTHc=",
    title: "Test Title",
    details:
      "It was such a blast to film the wedding of John and Jane Smith. They requested that the video be really good, so we decided to film a really good video.",
  },
];
const PortfolioItems = () => {
  return (
    <div className="container mx-auto py-10">
      {portfolios.map((portfolio, index) => (
        <div
          key={index}
          className={
            // Alternate image and text
            index % 2 === 0
              ? "flex items-center cursor-pointer"
              : "flex text-right flex-row-reverse items-center cursor-pointer"
          }
        >
          <div className="w-1/2 ">
            <img className="w-full object-cover" src={portfolio.img}></img>
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-bold text-[#F3F3F3] ">
              {portfolio.title}
            </h1>
            <p className="text-[17px] text-[#D6D6D6] mt-3">
              {portfolio.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioItems;
