import { useNavigate } from "react-router-dom";

const ExamsCards = () => {
  const nav = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-10 min-h-[calc(100vh-300px)] place-items-center">
      <div className="border border-gray-300 bg-black/5 rounded-xl min-h-[200px] min-w-[350px] mb-8 flex flex-col items-center">
        <div className="rounded-xl bg-white w-full flex justify-center">
          <img src={"assets/ADVANCED.png"} alt="Advanced Exam Logo" loading="lazy" className="max-w-[350px] p-5 h-24 object-contain" />
        </div>
        <div className="py-4 text-2xl font-semibold text-center">JEE ADVANCED</div>
        <div className="h-[41.5%] p-4 flex flex-col justify-between">
          <div className="mb-4 text-base text-center">
            Conducted By One of the IITs,
            <br />
            Which changes every year.
          </div>
          <div className="flex justify-end h-[50px]">
            <button className="flex items-center bg-primary border border-primary text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-primary-light transition-colors" onClick={() => nav("/exams/advanced")}>
              Details
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 bg-black/5 rounded-xl min-h-[200px] min-w-[350px] mb-8 flex flex-col items-center">
        <div className="rounded-xl bg-white w-full flex justify-center">
          <img src={"/assets/NTA.png"} alt="JEE Main Logo" className="max-w-[350px] p-5 h-24 object-contain" />
        </div>
        <div className="py-4 text-2xl font-semibold text-center">JEE MAIN</div>
        <div className="h-[41.5%] p-4 flex flex-col justify-between">
          <div className="mb-4 text-base text-center">Conducted By National Testing Agency(NTA)</div>
          <div className="flex justify-end h-[50px] mt-4">
            <button className="flex items-center bg-primary border border-primary text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-primary-light transition-colors" onClick={() => nav("/exams/main")}>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsCards;
