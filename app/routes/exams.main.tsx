import { MetaFunction } from "@remix-run/node";
import JeeMain from "~/components/Exams/JeeMain";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "JEE Main 2025 Exam Details | Syllabus, Dates, Pattern, Tips",
    description: "Get the latest JEE Main 2025 exam details: syllabus, important dates, paper pattern, expert tips, and preparation strategies for top NTA ranks.",
    keywords:
      "JEE Main 2025, JEE Main syllabus, JEE Main exam dates, JEE Main paper pattern, JEE Main tips, JEE Main preparation, JEE Main eligibility, JEE Main registration, JEE Main maths coaching, JEE Main study plan, JEE Main updates, JEE Main strategy, JEE Main classes Faridabad, online JEE Main coaching, JEE Main resources, NTA JEE Main",
    url: "https://www.mathsbypawansir.com/exams/main",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/exams/main",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "JEE Main 2025 Exam Details",
      description: "Comprehensive JEE Main 2025 exam information: syllabus, dates, pattern, and expert tips for aspirants.",
      url: "https://www.mathsbypawansir.com/exams/main",
      publisher: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return (
    <div>
      <JeeMain></JeeMain>
    </div>
  );
}
