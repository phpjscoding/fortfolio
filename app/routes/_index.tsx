import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Ismail O'talb" },
    { name: "description", content: "Shopify Developer based in morocco" },
  ];
};

export default function Index() {
  return (
    <div className="homepage">
      <div className="container">

        <div className="hero  grid sm:grid-cols-2 h-[400px]">
          <div className="bg-green-200">()</div>
          <div className="bg-blue-200" >
            <h2 className="text-5xl text-cyan-500"> Hello!</h2>
            <p>I'm <b>Ismail</b>, a <br />
              Shopify developer
              based in Morocco.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
