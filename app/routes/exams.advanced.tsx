import { MetaFunction } from "@remix-run/node";
import JeeAdvanced from "~/components/Exams/JeeAdvanced";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "JEE Advanced 2025 Exam Details | Syllabus, Dates, Pattern, Tips",
    description:
      "Get the latest JEE Advanced 2025 exam details: syllabus, important dates, paper pattern, expert tips, and preparation strategies for top IIT ranks.",
    keywords:
      "JEE Advanced 2025, JEE Advanced syllabus, JEE Advanced exam dates, JEE Advanced paper pattern, JEE Advanced tips, JEE Advanced preparation, JEE Advanced eligibility, JEE Advanced registration, JEE Advanced maths coaching, JEE Advanced study plan, JEE Advanced updates, JEE Advanced strategy, JEE Advanced classes Faridabad, online JEE Advanced coaching, JEE Advanced resources",
    url: "https://www.mathsbypawansir.com/exams/advanced",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/exams/advanced",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "JEE Advanced 2025 Exam Details",
      "description": "Comprehensive JEE Advanced 2025 exam information: syllabus, dates, pattern, and expert tips for aspirants.",
      "url": "https://www.mathsbypawansir.com/exams/advanced",
      "publisher": {
        "@type": "Organization",
        "name": "Maths by Pawan Sir",
        "url": "https://www.mathsbypawansir.com"
      }
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return (
      <JeeAdvanced></JeeAdvanced>
  );
}
