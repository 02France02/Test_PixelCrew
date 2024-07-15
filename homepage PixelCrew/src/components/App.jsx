import HomeCard from "./HomeCard";
import natureCover from "../assets/img-home/1.png";
import img_planetario from "../assets/img-home/Frame 2.png";
import Button from "./Button";
function App() {
  return (
    <>
      <div>
        {/* Title section */}
        <div>
          <div className="cover_home 	">
            <div className="w-[40%]  flex justify-center max-xs:w-[100%]">
              <div className=" w-[60%] gradient-text max-xs:bg-white max-xs:bg-opacity-60 rounded-xl mt-[10%]">
                <h1 className="text-[6vw]  font-bold  mt-[30%] max-xs:text-[9vw] mt-[0] text-center">
                  <span className="text-[#216545] ">Soulfarm</span> Agricoltura
                  Familiare
                </h1>
                <p className="font-bold w-full text-[1.5vw] max-xs:text-[2vw] text-center">
                  L’azienda è certificata biologica ed è composta da orto,
                  frutteto e pascolo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event section */}
        <div className="flex justify-center relative bottom-[70px] ">
          <div className="flex flex-wrap gap-7 w-[85%] justify-center">
            <HomeCard />
          </div>
        </div>
        <Button text="Scopri tutti gli eventi" flexProriety="flex justify-center"/>

        {/* Sezione Planetario */}
        <div className="planetario_background w-full p-[10%] mt-[70px]">
          <div className="flex justify-center gap-[50px] max-sm:flex-wrap">
            <div>
              <img src={img_planetario} alt="planetario" />
            </div>
            <div className="w-[43%]  flex justify-center items-center ">
              <div>
                <h1 className="font-extrabold text-3xl text-white mb-5
                3">Il Planetario</h1>
              <p className=" text-white mb-5">
                Finalmente il nostro planetario vi potrà accogliere anche nei
                mesi invernali. Ci aspettano una serie di appuntamenti
                pomeridiani -sabato pomeriggio -per scoprire i segreti del cielo
                e una serie di appuntamenti speciali dedicati alla Ruota
                dell'Anno Celtico.
              </p>
              <Button text="Visita il planetario" flexProriety="flex max-sm:justify-center"/>
              </div>
              
              {/* Bottega Carousel */}
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
