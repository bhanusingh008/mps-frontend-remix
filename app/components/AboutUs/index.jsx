import { Mail, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 flex flex-col items-center min-h-[80vh]">
      <div className="w-full">
        <h1 className="text-xl md:text-3xl font-extrabold mb-6 text-left text-blue-900 drop-shadow-sm">About Maths by Pawan Sir</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left text-blue-700">Empowering JEE Aspirants with Expert Mathematics Coaching</h2>
        <div className="text-base text-[16.5px] leading-relaxed text-gray-600 mb-8 space-y-5 font-light">
          <p>
            <span className="font-bold text-blue-800">Pawan Sir</span> is a renowned mathematics educator with over <span className="font-bold">20 years of experience</span>, dedicated to guiding students towards IIT-JEE success. Having
            mentored <span className="font-bold">4,000+ students</span>, his results-driven approach and passion for teaching have made him a trusted name in JEE preparation.
          </p>
          <p>
            At <span className="font-bold text-blue-800">Maths by Pawan Sir</span>, we believe in making mathematics engaging, accessible, and enjoyable. Our live <span className="font-bold">online and offline classes</span> are designed to
            simplify complex concepts, foster problem-solving skills, and build the confidence needed to excel in JEE Main & Advanced.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="text-green-600 font-semibold">✔️</span>
              Personalized attention and doubt-solving
            </li>
            <li>
              <span className="text-green-600 font-semibold">✔️</span> Proven track record of top JEE ranks
            </li>
            <li>
              <span className="text-green-600 font-semibold">✔️</span>
              Comprehensive study material & regular practice
            </li>
            <li>
              <span className="text-green-600 font-semibold">✔️</span>
              Motivational guidance and exam strategies
            </li>
          </ul>
          <p>
            Join our community of achievers and experience a supportive environment where every student is inspired to reach their full potential. Whether you are in Class 11 or 12, our mission is to help you{" "}
            <span className="font-bold text-blue-800">master mathematics</span> and secure your dream IIT seat.
          </p>
        </div>
        <div className="text-lg font-semibold text-left text-blue-600">
          Ready to transform your JEE journey? <span className="text-orange-500 font-bold">Start learning with Pawan Sir today!</span>
        </div>
        <div className="mt-8 flex flex-col justify-start items-center space-y-2">
          <div className="w-full text-base text-gray-700 font-light flex items-center gap-2">
            <Mail className="w-10 h-10 text-blue-800" aria-label="Support Email" />
            <span className="font-semibold text-blue-800">Support Email:</span>
            <a href="mailto:support@mathsbypawansir.com" className="underline hover:text-blue-600">
              mathsbypawanksir@gmail.com
            </a>
          </div>
          <div className="w-full text-base text-gray-700 font-light flex items-center gap-2">
            <MapPin className="w-10 h-10 text-blue-800" aria-label="Address" />
            <span className="font-semibold text-blue-800">Address:</span>SCF 92 FIRST FLOOR, Sector 17, Faridabad, Haryana 121002
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
