import type { MetaFunction } from "@remix-run/node";
import AboutUs from "~/components/AboutUs";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "About Pawan Sir | IIT JEE Advanced Maths Coaching Faridabad",
    description: "Meet Pawan Sir, the top IIT JEE Advanced Maths coach in Faridabad. Learn about his teaching philosophy, results, and how his online & offline classes help students excel.",
    keywords:
      "IIT JEE advanced maths coaching, about Pawan Sir, best maths teacher Faridabad, JEE advanced maths classes, online maths coaching, offline maths coaching, JEE maths results, maths faculty profile, JEE maths success stories, maths by pawan sir",
    url: "https://www.mathsbypawansir.com/about-us",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "profile",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/about-us",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Pawan Sir",
      description: "IIT JEE Advanced Mathematics faculty with a proven track record of producing top rankers. Expert in online and offline maths coaching in Faridabad.",
      image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
      jobTitle: "Mathematics Teacher",
      worksFor: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
      sameAs: ["https://www.mathsbypawansir.com/about-us"],
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return <AboutUs />;
}
