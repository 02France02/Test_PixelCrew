import HomeCard from "./HomeCard";
import natureCover from "../assets/img-home/1.png";
import img_planetario from "../assets/img-home/Frame 2.png";
import Button from "./Button";
import Bottega_Carousel from "./Bottega_Carousel";
function App() {
  return (
    <>
      <div>
        {/* Title section */}
        <div className="flex">
          
          
            <div className="w-[40%]  flex justify-center max-xs:w-[100%] relative ">
              <div className="absolute max-sm:left-[50%] w-[60%]   rounded-xl mt-[30%] max-sm:bg-white max-sm:bg-opacity-60 max-sm:w-auto ">
                <h1 className="text-[5.5vw]  max-sm:text-[9.5vw] font-bold   max-xs:text-[9vw] mt-[0] text-center">
                  <span className="text-[#216545] ">Soulfarm</span> Agricoltura
                  Familiare
                </h1>
                <p className="font-bold max-sm:text-[2.5vw] max-sm:w-[40vw] w-[20vw] max-xs:w-[50vw] text-[1.2vw] max-xs:text-[3vw] text-center">
                  L’azienda è certificata biologica ed è composta da orto,
                  frutteto e pascolo.
                </p>
              </div>
            </div>
          

          <div className="cover_home 	"></div>
        </div>

        {/* Event section */}
        <div className="flex justify-center relative bottom-[70px] ">
          <div className="flex flex-wrap gap-7 w-[85%] justify-center">
            <HomeCard />
          </div>
        </div>
        <Button
          text="Scopri tutti gli eventi"
          flexProriety="flex justify-center"
        />

        {/* Sezione Planetario */}
        <div className="planetario_background w-full p-[10%] mt-[70px]">
          <div className="flex justify-center gap-[50px] max-sm:flex-wrap">
            <div>
              <img src={img_planetario} alt="planetario" />
            </div>
            <div className="w-[43%]  flex justify-center items-center ">
              <div>
                <h1
                  className="font-extrabold text-3xl text-white mb-5
                3"
                >
                  Il Planetario
                </h1>
                <p className=" text-white mb-5">
                  Finalmente il nostro planetario vi potrà accogliere anche nei
                  mesi invernali. Ci aspettano una serie di appuntamenti
                  pomeridiani -sabato pomeriggio -per scoprire i segreti del
                  cielo e una serie di appuntamenti speciali dedicati alla Ruota
                  dell'Anno Celtico.
                </p>
                <Button
                  text="Visita il planetario"
                  flexProriety="flex max-sm:justify-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottega Carousel */}
        <div className="w-full">
          <Bottega_Carousel />
        </div>

        {/* News Letter */}
        <div className="bg-[#F8F1E2] w-full p-12">
          <div className="news_letter  mx-auto p-[10%]">
            <form action="news letter">
              <div className="text-center ">
                <h1 className="text-white font-bold text-4xl mb-3 max-xs:text-lg">Rimani aggiornato</h1>
                <p className="text-white text-sm md:text-base">
                  Per non perderti nessuna novità!
                </p>
              </div>
              <div className="w-full flex justify-center mt-3">
                <div className="bg-white flex rounded-3xl p-1 w-full max-w-lg">
                  <div className="flex items-center pl-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="2.9em"
                      viewBox="0 0 24 24"
                      className="text-gray-600"
                    >
                      <path
                        fill="currentColor"
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-grow p-2 rounded-3xl focus:outline-none w-[2vw]"
                  />
                  <button className="bg-[#D1F864]  text-black py-2 px-4 md:py-3 md:px-6 rounded-3xl flex-shrink-0">
                    Iscriviti
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
