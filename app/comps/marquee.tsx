import { FaGitSquare } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { SiCsswizardry, SiNuxtdotjs, SiRemix, SiShopify, SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export default function Marquee() {
    return (
        <div className='umd:max-w-[300px]'>

            <div className="marquee mx-auto mt-48 " style={{ overflow: 'hidden', maxWidth: '600px' }}>
                <div className="marquee-content">
                    <div className="marquee-item">
                        <span title='vanilla JavaScrpit'> <TbBrandJavascript size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='CSS'> <SiCsswizardry size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='React framework Remix'> <SiRemix size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='Vue framework Nuxtjs'> <SiNuxtdotjs size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='Shopify platform'> <SiShopify size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='TailWindCss'> <SiTailwindcss size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='Git/Github'> <FaGitSquare size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='GraphQl'> <GrGraphQl size={50} /> </span>
                    </div>
                    {/* ------------------------------- */}
                    <div className="marquee-item">
                        <span title='vanilla JavaScrpit'> <TbBrandJavascript size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='CSS'> <SiCsswizardry size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='React framework Remix'> <SiRemix size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='Vue framework Nuxtjs'> <SiNuxtdotjs size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='Shopify platform'> <SiShopify size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='TailWindCss'> <SiTailwindcss size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='Git/Github'> <FaGitSquare size={50} /> </span>
                    </div>

                    <div className="marquee-item">
                        <span title='GraphQl'> <GrGraphQl size={50} /> </span>
                    </div>











                </div>
            </div>




        </div>
    )

}
