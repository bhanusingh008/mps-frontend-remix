import type { MetaFunction } from "@remix-run/node";
import { Blogs } from "~/components/Blog/index";
import { buildMeta } from "~/utils/MetaUtils";

export const meta: MetaFunction = () =>
  buildMeta({
    title: "IIT-JEE Maths Blog | Maths By Pawan Sir",
    description: "Join the best IIT JEE advanced maths coaching classes in Faridabad for in-depth concepts, expert guidance, & proven strategies to excel in your exam.",
    keywords:
      "IIT JEE maths blog, JEE advanced preparation tips, JEE maths concepts, JEE maths coaching articles, JEE maths study material, JEE maths strategies, JEE maths expert guidance, JEE maths success stories, JEE maths news, JEE maths updates, maths by pawan sir blog",
    url: "https://www.mathsbypawansir.com/blog",
    image: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
    type: "blog",
    siteName: "Maths by Pawan Sir",
    locale: "en_US",
    twitterCardType: "summary_large_image",
    canonical: "https://www.mathsbypawansir.com/blog",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Maths by Pawan Sir Blog",
      description: "Expert IIT JEE maths preparation tips, strategies, and success stories from Pawan Sir.",
      url: "https://www.mathsbypawansir.com/blog",
      publisher: {
        "@type": "Organization",
        name: "Maths by Pawan Sir",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mathsbypawansir.com/assets/pawan_sir.png",
        },
      },
      author: {
        "@type": "Person",
        name: "Pawan Sir",
        sameAs: "https://www.mathsbypawansir.com/about-us",
      },
    },
    favicon: "/mathsbypawansir.ico",
  });

export default function Index() {
  return (
    <>
      <Blogs />
    </>
  );
}
