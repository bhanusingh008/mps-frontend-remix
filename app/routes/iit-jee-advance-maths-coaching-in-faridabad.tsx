import { MetaFunction } from "@remix-run/node";
import { JeeAdvancedCoaching } from "~/components/JeeAdvancedCoaching";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "Best IIT JEE Advanced Maths Coaching Faridabad | Online & Offline Classes",
    description: "Crack IIT JEE Advanced with Faridabad's top maths coaching. Expert faculty, live online & offline classes, proven results, and personalized guidance for JEE aspirants.",
    keywords:
      "IIT JEE Advanced maths coaching Faridabad, best JEE advanced maths classes, JEE advanced maths online coaching, JEE advanced maths offline classes, JEE advanced maths teacher, JEE advanced maths preparation, JEE advanced maths batch, JEE advanced maths results, JEE advanced maths study material, JEE advanced maths demo class, JEE advanced maths success stories, Pawan Sir JEE advanced, JEE advanced maths guidance, JEE advanced maths tips, JEE advanced maths strategies",
    url: "https://www.mathsbypawansir.com/iit-jee-advance-maths-coaching-in-faridabad/",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/iit-jee-advance-maths-coaching-in-faridabad/",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "IIT JEE Advanced Maths Coaching in Faridabad",
      description: "Best IIT JEE Advanced maths coaching in Faridabad with online and offline classes, expert faculty, and proven results.",
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
  return <JeeAdvancedCoaching />;
}
