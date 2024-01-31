import { useRef } from "react";
import Projects from "./Projects.js";

export default function Hero(){
    const audioRef = useRef();

    const handlePlay = () => {
       audioRef.current.play();
    };
    return(
      <>    
       


<main className="et-main flex overflow-x-auto">
  <section className="et-slide max-h-[800px] flex-none w-screen" id="about">
   <div className="flex ">
   <h1 className="dev-name"> Ismail O'talb </h1>
    <button onClick={handlePlay} className="py-4 self-bottom">
        <img src="/assets/spell.png" alt="" height={20} width={34} className="filter invert"/>
         </button>
   </div>
<audio ref={audioRef} track="" src="/assets/name.mp3" type="audio/mpeg"></audio>
    <h2 className="role"> Shopify developer <br /> based in Morocco </h2>
    <ul className="stack-icons flex gap-4 items-center mt-12 "> 
        <li className="max-w-[40px]" >
            <img src="/assets/java-script.png" alt="" height={20} className="filter invert" />
        </li>
      
        <li className="max-w-[40px]">
            <img src="/assets/shopify.png" alt="" height={20} className="filter invert"/>
        </li>
        <li className="max-w-[60px]">
            <img src="/assets/git.png" alt="" height={20} className="filter invert"/>
        </li>
        <li className="max-w-[100px] " >
            <img src="/assets/tailwind-css-1.svg" alt="" height={20} className="filter invert"/>
        </li>
        <li className="max-w-[80px] ">
            <img src="/assets/remix.png" alt="" height={20} className="filter invert"/>
        </li>
        
    </ul>
    <ul className="socials-icons flex items-center justify-center gap-4 mt-32">
      <li  className="max-w-[50px] ">
        <a href="https://www.linkedin.com/in/esmail-o-talb-36a98a20a/" target="_blank" rel="noreferrer">
          <img src="/assets/business.png" alt="" height={20} className="filter invert"/>
        </a>
      </li>
      <li  className="max-w-[50px] ">
        <a href="https://www.upwork.com/freelancers/~01ad7a6bf558fa7802?viewMode=1" target="_blank" rel="noreferrer">
          <img src="/assets/upwork.png" alt="" height={20} className=""/>
        </a>
      </li>
      <li  className="max-w-[50px] ">
        <a href="/assets/ShopifyDev.pdf">
          <img src="/assets/cv.png" alt="" height={20} className=""/>
        </a> 
      </li>
    </ul>
  
  </section>
  
  <section className="et-slide flex-none w-screen bg-amber-400" id="blog">
    <h1>blog</h1>
    <h3> Comming Soon...</h3>
  </section>
  <section className=" flex-none w-screen" id="projects">
    <Projects />
  </section>
</main>
      </>
    )
}