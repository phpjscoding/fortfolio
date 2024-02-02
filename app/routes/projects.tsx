import Projects from "../comps/Projects.js";

export const meta = () => {
    return [
        { title: "Projects 2/2" },
        { name: "description", content: "Shopify Developer based in morocco" },
    ];
};

export default function Work() {
    return (
        <section className=" flex-none w-screen" id="projects">
            <Projects />
        </section>
    );
}