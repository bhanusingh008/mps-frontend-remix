import { MetaFunction } from "@remix-run/node";
import { JeeAdvancedCoaching } from "~/components/JeeAdvancedCoaching";

export const meta: MetaFunction = () => {
  return [
    { title: "Best IIT JEE Advance Maths Online Coaching Classes Faridabad" },
    {
      name: "description",
      content:
        "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    },
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/iit-jee-advance-maths-coaching-in-faridabad/",
    },
  ];
};

export const links = () => {
  return [
    {
      rel: "canonical",
      href: "",
    },
  ];
};

export default function Index() {
  return <JeeAdvancedCoaching />;
}
