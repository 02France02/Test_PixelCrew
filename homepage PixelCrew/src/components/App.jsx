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
        <div>
          <div className="cover_home 	">
            <div className="w-[40%]  flex justify-center max-xs:w-[100%]">
              <div className=" w-[60%] gradient-text max-xs:bg-white max-xs:bg-opacity-60 rounded-xl mt-[10%]">
                <h1 className="text-[6vw]  font-bold   max-xs:text-[9vw] mt-[0] text-center">
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
        <div className="bg-[#F8F1E2] w-full p-10">
  <div className="news_letter max-w-4xl mx-auto">
    <form action="news letter">
      <div className="text-center">
        <h1 className="text-white text-2xl mb-3">Rimani aggiornato</h1>
        <p className="text-white text-sm md:text-base">Per non perderti nessuna novità!</p>
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
            className="flex-grow p-2 rounded-3xl focus:outline-none"
          />
          <button className="bg-[#D1F864] max-sm:hidden text-black py-2 px-4 md:py-3 md:px-6 rounded-3xl flex-shrink-0">
            Iscriviti
          </button>
        </div>
        
      </div>
      <button className="bg-[#D1F864] sm:hidden text-black py-2 px-4 md:py-3 md:px-6 rounded-3xl flex-shrink-0">
            Iscriviti
          </button>
    </form>
  </div>


        </div>
      </div>
    </>
  );
}

export default App;
