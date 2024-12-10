import Home from "../components/Home/home";
import { Result } from "../components/Result/Result";
import { CurrentAffair } from "../components/CurrentAffair/CurrentAffair";
import { Reach } from "../components/Reach/Reach";
import MiddleContent from "./MiddleContent";

// Remix Meta Function
export const meta = () => {
  return {
    title:
      "Best Online Math Coaching Center | Tuition Classes in Faridabad | JEE MAIN | JEE ADVANCED | BITSAT",
    description:
      "Welcome to Maths by Pawan Sir, your ultimate destination for the best maths teacher in Faridabad. Join us today for nurturing excellence!",
    canonical: "https://www.mathsbypawansir.com/",
  };
};

// Remix Links Function (if needed for styles or external resources)
export const links = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/",
    },
  ];
};

// Main Component
export function Landing() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Home />
      <MiddleContent/>
      <Result />
      <CurrentAffair />
      <Reach />
    </div>
  );
}
