import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/Landing";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "Best in class JEE Advanced and JEE Main Coaching | Top IIT-JEE Classes | By Pawan Sir",
    description: "Crack JEE Main & Advanced with expert-led live math classes. Join online or offline batches, get personalized guidance, and boost your IIT-JEE score!",
    keywords:
      "IIT JEE math coaching online, best maths teacher for JEE, JEE Main maths classes Faridabad, live JEE maths tuition, JEE Advanced math coaching, online math classes for JEE, offline math coaching Faridabad, Pawan Sir, JEE math preparation, JEE math course, JEE math live classes, JEE math batch, JEE math demo class, JEE math study material, JEE math results, JEE math toppers",
    url: "https://www.mathsbypawansir.com/",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "IIT-JEE Mathematics Coaching",
      description: "Live and offline math classes for JEE Main & Advanced by Pawan Sir in Faridabad and online.",
      provider: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          name: "JEE Main Math Live Batch",
          courseMode: "Online",
          startDate: "2025-06-10",
        },
        {
          "@type": "CourseInstance",
          name: "JEE Advanced Math Offline Batch",
          courseMode: "Offline",
          location: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Faridabad",
              addressCountry: "IN",
            },
          },
          startDate: "2025-06-15",
        },
      ],
      instructor: {
        "@type": "Person",
        name: "Pawan Sir",
        sameAs: "https://www.mathsbypawansir.com/about-us",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return <Landing />;
}
