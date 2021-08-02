import image1 from "../../images/svg-1.png";
import image2 from "../../images/svg-2.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Emjay Consultancy Ltd",
  headline: "Boutique family run consultancy firm",
  description:
    "We are experts in virtual business networking and operate 200+ WhatsApp groups covering a wide range of industries and business subjects.",
  buttonLabel: "Learn More",
  buttonTo: "about2",
  imgStart: false,
  img: image1,
  alt: "Emjay Consultancy Ltd",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "about2",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Virtual networking",
  headline: "Helping companies expand internationally",
  description:
    "Business Networking is a socioeconomic business activity by which businesspeople and entrepreneurs meet to form business relationships and to recognize, create, or act upon business opportunities, share information and seek potential partners for ventures.",
  buttonLabel: "Our Services",
  buttonTo: "services",
  imgStart: true,
  img: image2,
  alt: "Networking",
  dark: false,
  primary: false,
  darkText: true,
};
