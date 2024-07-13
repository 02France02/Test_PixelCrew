import React from "react";
import cicloMese from "../assets/img card/image 299.png";
import agri_creatività from "../assets/img card/image 299 (1).png";
import celtico from "../assets/img card/image 299 (2).png";
import preparazioni from "../assets/img card/Frame 1291.png";
import corso from "../assets/img card/image 299 (3).png";

const imgCards = [
  {img: cicloMese, title: "Sabato in Planetario", text: ""},
  { img: agri_creatività, title: "Momenti di Agri-creatività", text: "" },
  { img: celtico, title: "Ruota dell'Anno Celtico", text: "" },
  { img: preparazioni, title: "Sabato in Planetario", text: "" },
  { img: preparazioni, title: "Momenti di Agri-creatività", text: "" },
  { img: corso, title: "Ruota dell'Anno Celtico", text: "" },
];

const HomeCard = () => {
  return (
    <>
      {imgCards.map((item, index) => (
        <div key={index} className=" w-[30%] mb-5">
          <div>
            <img src={item.img} alt="Copertina" className="rounded-[15px] mb-3" />
          </div>
          <h3 className="font-[900] mb-3">{item.title}</h3>
          <p className="text-[14px]">
            L’azienda è certificata <b>biologica</b> ed è composta da orto, frutteto e
            pascolo, colture cerealicole, vigneto e medicaio.
          </p>
        </div>
      ))}
    </>
  );
};

export default HomeCard;
