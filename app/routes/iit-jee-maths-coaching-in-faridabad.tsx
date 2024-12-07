import type { MetaFunction } from "@remix-run/node";
import JeeMainCoaching from "~/components/JeeMainCoaching";

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
      href: "https://www.mathsbypawansir.com/iit-jee-maths-coaching-in-faridabad",
    },
  ];
};

export default function Index() {
  return (
    <JeeMainCoaching/>
  );
}