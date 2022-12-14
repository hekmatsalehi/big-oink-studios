import React from "react";
import ContactButton from "../../../components/contactButton";

const ProjectDetails = ({ project }: any) => {
  if(!project) {
    return null;
  }
  const tags = project.tags.split(",");
  
  return (
    <div className="w-4/6 flex flex-col gap-5 mt-5">
      <div className="w-full text-[8px] font-normal ">
        {tags.map((tag: any, index: number) => (
          <button
            key={index}
            className={`py-1 px-2 mr-4 ${generateColor(tag)[1]} ${generateColor(tag)[0]} rounded-[10px]`}
          >
            {tag}
          </button>
        ))}
      </div>
      <h1 className="text-3xl font-bold  text-[#F3F3F3] font-['Didot']">{project.title}</h1>
      <div className="text-[17px] text-[#D6D6D6]">{project.content}</div>
      <ContactButton />
    </div>
  );
};

// Alternate background and text color for project tags
function generateColor(tag: string) {
  let bgColor = "bg-[#74BFC4]";
  let textColor = "text-white";
  switch (tag) {
    case "BUSINESS":
      bgColor = "bg-[#004A5B]";
      break;
    case "MUSIC VIDEO":
      bgColor = "bg-[#EBF0F6]";
      textColor = "text-[#2D2D2D]";
      break;
    case "RECEPTION":
      textColor = "text-[#2D2D2D]";
      bgColor = "bg-[#74BFC4]";
      break;
    case "WEDDING":
      bgColor = "bg-[#ED254E]";
      break;
    default:
      bgColor = bgColor;
      textColor = textColor;
  }
  return [bgColor, textColor];
};

export default ProjectDetails;
