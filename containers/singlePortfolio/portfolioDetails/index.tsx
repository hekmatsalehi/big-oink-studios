import React from "react";
import ContactButton from "../../../components/contactButton";

const PortfolioDetails = () => {
  return (
    <div className="w-4/6 flex flex-col gap-5 mt-5">
      <div className="w-full text-[8px] font-normal ">
        <button className="py-1 px-2 mr-4 text-[#F3F3F3] bg-rose-600 rounded-[10px]">
          WEDDING
        </button>
        <button className="py-1 px-2 text-[#2D2D2D] bg-cyan-300  rounded-[10px]">
          RECEPTION
        </button>
      </div>
      <h1 className="text-3xl font-bold  text-[#F3F3F3]">John & Jane Smith</h1>
      <p className="text-[17px] text-[#D6D6D6]">
        Meh mixtape subway tile tousled cred cloud bread mumblecore. Wayfarers
        jianbing street art, neutra paleo dreamcatcher cold-pressed beard
        unicorn selvage. Pour-over edison bulb locavore, neutra glossier
        helvetica authentic. Freegan pickled celiac master cleanse bushwick,
        green juice helvetica mlkshk wayfarers listicle selvage. Beard slow-carb
        post-ironic, migas lomo kinfolk vice kogi blue bottle. Bitters pitchfork
        offal listicle kickstarter fashion axe keffiyeh small batch. Vegan
        pinterest brunch disrupt hexagon 3 wolf moon shabby chic artisan
        truffaut prism. Kinfolk single-origin coffee pitchfork normcore four
        dollar toast. Hella prism tacos wolf lo-fi. Raclette bicycle rights
        keytar tumblr austin gastropub schlitz kombucha. Slow-carb squid kogi
        banh mi freegan heirloom hashtag. Street art taiyaki tumeric next level
        gastropub echo park. Art party pop-up pinterest occupy listicle squid
        chia fixie. Fam umami godard YOLO, waistcoat art party blog fixie pok
        pok hexagon fingerstache knausgaard.
      </p>
      <ContactButton />
    </div>
  );
};

export default PortfolioDetails;
