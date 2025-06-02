import type { MetaFunction } from "@remix-run/node";
import JeeMainCoaching from "~/components/JeeMainCoaching";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "Best IIT JEE Maths Coaching Faridabad | Online & Offline Classes",
    description: "Join the best IIT JEE maths coaching in Faridabad. Expert faculty, live online & offline classes, proven results, and personalized guidance for JEE Main & Advanced aspirants.",
    keywords:
      "IIT JEE maths coaching Faridabad, best JEE maths classes, JEE maths online coaching, JEE maths offline classes, JEE maths teacher, JEE maths preparation, JEE maths batch, JEE maths results, JEE maths study material, JEE maths demo class, JEE maths success stories, Pawan Sir JEE, JEE maths guidance, JEE maths tips, JEE maths strategies, JEE Main coaching Faridabad, JEE Advanced coaching Faridabad, online JEE maths classes, offline JEE maths classes",
    url: "https://www.mathsbypawansir.com/iit-jee-maths-coaching-in-faridabad",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/iit-jee-maths-coaching-in-faridabad",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "IIT JEE Maths Coaching in Faridabad",
      description: "Best IIT JEE maths coaching in Faridabad with online and offline classes, expert faculty, and proven results.",
      provider: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
      instructor: {
        "@type": "Person",
        name: "Pawan Sir",
        sameAs: "https://www.mathsbypawansir.com/about-us",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return <JeeMainCoaching />;
}
