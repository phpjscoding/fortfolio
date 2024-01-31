export default function Products() {
    return (
        <div className="w-full px-4">
            <section className="min-h-screen pt-24">
                <div className="container mx-auto">
                    <div className="flex justify-around">
                        <div className="mb-24 text-left">
                            <p className="text-5xl text-white"> 3elegant </p>
                        </div>
                        <div>
                            <p className="text-2xl"> Figma to Shopify theme</p>
                            <a href="https://www.figma.com/file/X17LnpYmfuNzNC7Ioy56al/3legant-E-Commerce-UI-Design-Template-(Community)?type=design&node-id=4%3A11181&mode=dev" className="underline">
                                <small>Figma URL</small>

                            </a>
                            <p> <a href="https://3elegant.myshopify.com/" className="underline"><small>Store URL</small></a></p>
                            <p>Password <small> friday</small></p>
                            <p> <a href="https://github.com/phpjscoding/3elegant.git" className="underline">
                                <small>Git Repo</small>
                            </a> </p>

                        </div>
                    </div>
                    <div className="flex max-h-[400px] items-center justify-center mt-12">
                        <div>
                            <img src="/assets/m.png" alt="" height={300} />
                        </div>
                        <div>
                            <img src="/assets/s.png" alt="" height={300} />
                        </div>
                    </div>


                    <h3 className="text-2xl text-gray-400 my-24 w-[60ch] mx-auto text-center">
                        <i>In This projects I've converted a Figma design to a Shopify
                            store,using HTML/CSS/Liquid/Javasript/Tailwind/Git</i>

                    </h3>
                </div>

            </section>
            <hr className="w-full my-24" />
            <section className="min-h-screen ">
                <p className="text-center">
                    <a href="https://www.innergarden.uk/" className="underline">
                        <small>innergarden.uk</small>
                    </a>
                </p>
                <div className="container mx-auto text-center py-4">

                    <img src="/assets/garden.png" alt="" height={300} />
                </div>

                <h3 className="text-2xl text-gray-400 my-24 w-[60ch] mx-auto text-center">
                    <i>
                        I've developed this blog using Nuxt,.mdx files,and Tailwind, deployed it on render.com, and monetized it with Ezoic </i>

                </h3>
            </section>
        </div>
    );
}
// cameron@adlib-recruitment.co.uk.