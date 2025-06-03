import { Facebook, Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-90 text-white flex flex-col justify-center items-center">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 p-20 px-10 lg:px-0">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold mb-2">Quick Links</div>
          <nav className="flex flex-col gap-2 text-base">
            <a href="/" className="hover:text-blue-300 transition-colors text-sm">
              HOME
            </a>
            <a href="/contact" className="hover:text-blue-300 transition-colors text-sm">
              CONTACT
            </a>
            <a href="/exams/main" className="hover:text-blue-300 transition-colors text-sm">
              JEE MAIN
            </a>
            <a href="/exams/advanced" className="hover:text-blue-300 transition-colors text-sm">
              JEE ADVANCED
            </a>
            <a href="/iit-jee-advance-maths-coaching-in-faridabad" className="hover:text-blue-300 transition-colors text-sm">
              ACE JEE ADVANCED
            </a>
            <a href="/iit-jee-maths-coaching-in-faridabad" className="hover:text-blue-300 transition-colors text-sm ">
              ACE JEE MAIN
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold mb-2">Connect</div>
          <div className="flex items-center gap-3 text-lg">
            <img src="/assets/whatsapp.png" alt="whatsappIcon" className="h-7 w-7" />
            <Phone className="w-6 h-6 text-green-400" aria-label="Call" />
            <span>9718942794</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Facebook className="w-6 h-6 text-blue-500" aria-label="Facebook" />
            <a className="hover:text-blue-300 transition-colors" href="https://www.facebook.com/profile.php?id=61556705023218" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <MessageCircle className="w-6 h-6 text-blue-400" aria-label="Support Email" />
            <a href="mailto:mathsbypawanksir@gmail.com" className="hover:text-blue-300 transition-colors underline">
                mathsbypawanksir@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <MapPin className="w-6 h-6 text-red-400" aria-label="Address" />
            <span>SCF 92 FIRST FLOOR, Sector 17, Faridabad, Haryana 121002</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xs md:text-sm py-2 border-t border-white/20">Copyright &copy; {new Date().getFullYear()} Maths By Pawan Sir - All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
