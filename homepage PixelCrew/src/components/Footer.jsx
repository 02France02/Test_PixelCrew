import React from "react";
import logo from "../assets/Logo.png";
import fondoEuLogo from "../assets/fondoEu.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="p-[24px] bg-navbarGreen ">
        <div>
          <img src={logo} alt="Logo footer" className="h-8 w-auto"/>
        </div>
        <div className="border-[1px] mt-6  "></div>
        <div className="testo_titolo flex mt-6 justify-between flex-wrap ">
          <div>
            <h3>AZIENDA AGRICOLA</h3>
            <p>Agricoltura</p>
            <p>allevamenti</p>
            <p>Bottega agricola</p>
            <p>Punti vendita</p>
          </div>
          <div>
            <h3>FATTORIA DIDATTICA</h3>
            <p>Attività scuole</p>
            <p>Attività per grandi e piccoli</p>
            <p>Planetario</p>
            <p>Fattoria sociale</p>
          </div>
          <div>
            <h3>AGRITURISMO</h3>
            <h3>BIO E SOSTENIBILITA'</h3>
            <h3>TURISMO E TERRITORIO</h3>
            <h3 className="mb-4">CONTATTI</h3>
          </div>
          <div>
            <img src={fondoEuLogo} alt="fondo europeo" />
          </div>
        </div>
        <div className="border-[1px] mt-6  "></div>
        <div className="flex mt-6 justify-between flex-wrap ">
          <div className="text-white">
            <p>
              Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare
            </p>
            <p className="font-bold mb-3">P.IVA 02322540184</p>
          </div>
          <div className="text-white">
            <span className="mr-4">✏️ Code <Link to="#" className="underline underline-offset-2"> Emiliano Bucci</Link></span>
            <span>🎨 Design <Link to="#" className="underline underline-offset-2"> Michele Fasani</Link></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
