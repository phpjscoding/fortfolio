import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";
import Swup from 'swup';

import stylesheet from "./tailwind.css";
import { useEffect } from "react";
// import Header from './comps/Header'
export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/anton" }


];
// import Header from "./comps/Header";

export default function App() {
  const location = useLocation();
  const isBlogRoute = location.pathname.includes('/blog/');
  console.log(isBlogRoute, 'isblogroute')
  const class1 = "h-screen flex flex-col"
  useEffect(() => {
    const swup = new Swup();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          title="Shopify developer"
          description="Remote Shopify Front-end developer"
          property="og:image" content="/assets/shopify.png"
        />
        <Links />
      </head>
      <body>

        <div className={`${class1} ${isBlogRoute ? '' : 'transition-fade'}`} id="swup">
          <Outlet />
        </div>
        <div className="et-hero-tabs-container fixed bottom-0 w-full">
          <a className="et-hero-tab" href="/blog">Blog</a>
          <a className="et-hero-tab" href="/">about</a>
          <a className="et-hero-tab" href="/projects">projects</a>

          <span className="et-hero-tab-slider"></span>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />



      </body>
    </html>
  );
}
