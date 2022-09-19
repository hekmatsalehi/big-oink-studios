export const generateColor = (tag: string) => {
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
