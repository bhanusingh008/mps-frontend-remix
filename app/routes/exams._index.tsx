import { MetaFunction } from "@remix-run/node";
import ExamsCards from "~/components/Exams/ExamsCards";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "IIT JEE Exam Details 2025 | Syllabus, Dates, Pattern & Tips",
    description: "Get the latest IIT JEE Main & Advanced 2025 exam details: syllabus, important dates, paper pattern, expert tips, and preparation strategies for top ranks.",
    keywords:
      "IIT JEE 2025 exam details, JEE Main syllabus, JEE Advanced syllabus, JEE exam dates 2025, JEE paper pattern, JEE preparation tips, JEE eligibility, JEE registration, JEE maths coaching, JEE study plan, JEE exam updates, JEE expert guidance, JEE strategy, JEE maths classes Faridabad, online JEE coaching, JEE exam resources",
    url: "https://www.mathsbypawansir.com/exams",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/exams",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "IIT JEE Exam Details 2025",
      description: "Comprehensive IIT JEE Main & Advanced 2025 exam information: syllabus, dates, pattern, and expert tips for aspirants.",
      url: "https://www.mathsbypawansir.com/exams",
      publisher: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export const links = () => [{ rel: "stylesheet", href: "/styles/exams.css" }];

export default function Exams() {
  return (
    <div>
      <ExamsCards></ExamsCards>
    </div>
  );
}
