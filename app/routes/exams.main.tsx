import { MetaFunction } from "@remix-run/node";
import JeeMain from "~/components/Exams/JeeMain";

export const meta: MetaFunction = () => {
  return [
    { title: "Jee Main Exam Details" },
    {
      name: "description",
      content:
        "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    },
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/exams/main",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <JeeMain></JeeMain>
    </div>
  );
}
