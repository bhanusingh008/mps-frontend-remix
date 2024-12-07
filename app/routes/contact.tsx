import type { MetaFunction } from "@remix-run/node";
import { Contact } from "~/components/Contact/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us | Maths By Pawan Sir" },
    {
      name: "description",
      content:
        "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    },
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/contact",
    },
  ];
};

export default function Index() {
  return (
    <Contact/>
  );
}