import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/Landing";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Best IIT-JEE Math Coaching Center | Tuition Classes in Faridabad",
    },
    {
      name: "description",
      content:
        "Welcome to Maths by Pawan Sir, your ultimate destination for the best maths teacher in Faridabad. Join us today for nurturing excellence!",
    },
    { rel: "canonical", href: "https://www.mathsbypawansir.com/" },
  ];
};

export default function Index() {
  return <Landing />;
}
