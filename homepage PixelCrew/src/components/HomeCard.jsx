import React from "react";
import cicloMese from "../assets/img card/image 299.png";
import agri_creatività from "../assets/img card/image 299 (1).png";
import celtico from "../assets/img card/image 299 (2).png";
import preparazioni from "../assets/img card/Frame 1291.png";
import corso from "../assets/img card/image 299 (3).png";
import { Link } from "react-router-dom";

const imgCards = [
  { img: cicloMese, title: "Sabato in Planetario", text: "", href: "#"},
  { img: agri_creatività, title: "Momenti di Agri-creatività", text: "", href: "#" },
  { img: celtico, title: "Ruota dell'Anno Celtico", text: "" , href: "#"},
  { img: preparazioni, title: "Sabato in Planetario", text: "" , href: "#"},
  { img: preparazioni, title: "Momenti di Agri-creatività", text: "" , href: "#"},
  { img: corso, title: "Ruota dell'Anno Celtico", text: "" , href: "#"},
];

const HomeCard = () => {
  return (
    <>
      {imgCards.map((item, index) => (
        <Link to={item.href} key={index} className="w-[30%] max-xs:w-[50%]  mb-5">
          <div>
            <div>
              <img
                src={item.img}
                alt="Copertina"
                className="rounded-[15px] mb-3"
              />
            </div>
            <h3 className="font-[900]  mb-3 text-xl max-xs:text-[5vw] ">
              {item.title}
            </h3>
            <p className="text-base max-xs:text-[3vw] 2xl:w-[80%] 3xl:w-[70%] 4xl:w-[56%]">
              L’azienda è certificata <b>biologica</b> ed è composta da orto,
              frutteto e pascolo, colture cerealicole, vigneto e medicaio.
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default HomeCard;
