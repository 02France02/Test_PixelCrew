import HomeCard from "./HomeCard";
import natureCover from "../assets/img-home/1.png";
function App() {
  return (
    <>
      <div>
        {/* Title section */}
        <div>
          <div className="cover_home 	">
            <div className="w-[40%]  flex justify-center ">
              <div className=" w-[60%] gradient-text ">
                <h1 className="text-[6vw] font-bold  mt-[30%] ">
                  Soulfarm Agricoltura Familiare
                </h1>
                <p className="font-bold w-full text-[1.5vw]">
                  L’azienda è certificata biologica ed è composta da orto,
                  frutteto e pascolo.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Event section */}
        <div className="flex justify-center ">
          <div className="flex flex-wrap gap-7 w-[85%] justify-center">
            <HomeCard/> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
