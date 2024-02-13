import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./tailwind.css";
// import Header from './comps/Header'
export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/anton" }


];
// import Header from "./comps/Header";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

        <div className="h-screen flex flex-col">
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
