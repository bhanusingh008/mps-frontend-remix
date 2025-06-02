import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import CallToActionFooter from "./components/CallToAction";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
  { rel: "icon", href: "/mathsbypawansir.ico" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="sIJiD0MdvPEx-5sOfSLagkFkubkYp5Ni4WtHuFOLqpo" />
        <meta name="description" content="Maths by Pawan Sir - Expert coaching for IIT JEE and other competitive exams. Join us for the best results!" />
        <meta name="keywords" content="Maths, IIT JEE, Coaching, Competitive Exams, Faridabad" />
        <meta property="og:title" content="Maths by Pawan Sir" />
        <meta property="og:description" content="Expert coaching for IIT JEE and other competitive exams. Join us for the best results!" />
        <meta property="og:image" content="/assets/pawan_sir.png" />
        <meta property="og:url" content="https://mathsbypawansir.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PQ49XNT2N8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PQ49XNT2N8');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {" "}
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
        <CallToActionFooter />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
