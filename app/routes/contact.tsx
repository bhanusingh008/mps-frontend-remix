import type { MetaFunction } from "@remix-run/node";
import { Contact } from "~/components/Contact/Contact";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "Contact Us | Maths By Pawan Sir",
    description: "Join the best online IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    keywords:
      "IIT JEE maths contact, JEE advanced coaching contact, JEE maths classes Faridabad, contact maths by pawan sir, JEE maths support, JEE maths enquiry, JEE maths help, JEE maths admission, JEE maths online support, JEE maths offline support, JEE maths coaching phone, JEE maths coaching email",
    url: "https://www.mathsbypawansir.com/contact",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "website",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/contact",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Maths by Pawan Sir",
      description: "Contact us for IIT JEE Advanced and Main maths coaching, online and offline classes, and expert guidance from Pawan Sir.",
      url: "https://www.mathsbypawansir.com/contact",
      publisher: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        url: "https://www.mathsbypawansir.com",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return <Contact />;
}
