import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "IIT JEE Exam Information & Updates | Syllabus, Dates, Pattern",
    description: "Explore IIT JEE exam details: latest syllabus, important dates, paper pattern, expert tips, and updates for JEE Main & Advanced aspirants.",
    keywords:
      "IIT JEE exam details, JEE syllabus, JEE exam dates, JEE paper pattern, JEE updates, JEE preparation tips, JEE eligibility, JEE registration, JEE maths coaching, JEE study plan, JEE news, JEE strategy, JEE classes Faridabad, online JEE coaching, JEE resources",
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
      name: "IIT JEE Exam Information & Updates",
      description: "Comprehensive IIT JEE exam information: syllabus, dates, pattern, and expert tips for aspirants.",
      url: "https://www.mathsbypawansir.com/exams",
      publisher: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Exams() {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <Outlet />
    </div>
  );
}
