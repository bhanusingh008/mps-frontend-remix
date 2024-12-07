import { MetaFunction } from "@remix-run/node";
import ExamsCards from "~/components/Exams/ExamsCards";

export const meta: MetaFunction = () => {
  return [
    { title: "Jee Exam Details" },
    {
      name: "description",
      content:
        "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    },
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/exams",
    },
  ];
};

export const links = () => [{ rel: "stylesheet", href: "/styles/exams.css" }];

export default function Exams() {
  return (
    <div>
      <ExamsCards></ExamsCards>
    </div>
  );
}
