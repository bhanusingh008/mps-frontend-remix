import { useNavigate } from "react-router-dom";

const ExamsCards = () => {
  const nav = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16 place-items-center w-full px-4">
      {/* JEE Advanced Card */}
      <div className="bg-white/80 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl min-h-[350px] min-w-[340px] max-w-[380px] flex flex-col items-center overflow-hidden group">
        <div className="w-full flex justify-center bg-gradient-to-b from-white to-gray-100 p-0">
          <img src="/assets/ADVANCED.png" alt="Advanced Exam Logo" loading="lazy" className="w-full max-w-[220px] p-6 h-28 object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="py-3 text-2xl font-bold text-center text-gray-900 tracking-tight">JEE ADVANCED</div>
        <div className="flex-1 w-full px-6 pb-6 flex flex-col justify-between">
          <div className="mb-6 text-base text-center text-gray-700 leading-relaxed">
            Conducted by one of the IITs,
            <br />
            which changes every year.
          </div>
          <button
            className="w-full flex items-center justify-center bg-primary border border-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary-light hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => nav("/exams/advanced")}
          >
            Details
          </button>
        </div>
      </div>
      {/* JEE Main Card */}
      <div className="bg-white/80 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl min-h-[350px] min-w-[340px] max-w-[380px] flex flex-col items-center overflow-hidden group">
        <div className="w-full flex justify-center bg-gradient-to-b from-white to-gray-100 p-0">
          <img src="/assets/NTA.png" alt="JEE Main Logo" loading="lazy" className="w-full max-w-[220px] p-6 h-28 object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="py-3 text-2xl font-bold text-center text-gray-900 tracking-tight">JEE MAIN</div>
        <div className="flex-1 w-full px-6 pb-6 flex flex-col justify-between">
          <div className="mb-6 text-base text-center text-gray-700 leading-relaxed">Conducted by <br/>National Testing Agency (NTA)</div>
          <button
            className="w-full flex items-center justify-center bg-primary border border-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary-light hover:scale-[1.03] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => nav("/exams/main")}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamsCards;
