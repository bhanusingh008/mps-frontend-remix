import { MetaFunction } from "@remix-run/node";
import JeeAdvanced from "~/components/Exams/JeeAdvanced";

export const meta: MetaFunction = () => {
  return [
    { title: "Jee Advanced Exam Details" },
    {
      name: "description",
      content:
        "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    },
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/exams/advanced",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <JeeAdvanced></JeeAdvanced>
    </div>
  );
}
