import type { MetaFunction } from "@remix-run/node";
import Hero from "../comps/Hero.jsx"

export const meta: MetaFunction = () => {
  return [
    { title: "Ismail O'talb" },
    { name: "description", content: "Shopify Developer based in morocco" },
  ];
};

export default function Index() {
  return (
    <div className="container">

      <div className="hero-section min-h-screen my-[100px]">
        <Hero />
      </div>

    </div>
  );
}
