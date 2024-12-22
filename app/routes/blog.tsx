import type { MetaFunction } from "@remix-run/node";
import { Blogs } from "~/components/Blog/index";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Maths By Pawan Sir" },
    {
      name: "description",
      content:
        "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    },
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/blog",
    },
  ];
};

export default function Index() {
  return (
    <><Blogs/></>
  );
}