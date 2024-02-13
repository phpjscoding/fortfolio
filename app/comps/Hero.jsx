import { useRef } from "react";

import Marquee from "./marquee.js";

export default function Hero(){
    const audioRef = useRef();

    const handlePlay = () => {
       audioRef.current.play();
    };
    return(
      <>    
       
     

 
<main className="et-main  mx-auto umd:mt-32 umd:pb-[200px] ">
  <section className="et-slide" >
   <div className="flex usm:flex-col usm:items-center">
   <h1 className="text-7xl sm:text-9xl uppercase"> Ismail O'talb </h1>
    <button onClick={handlePlay} className="py-4 self-bottom">
        <img src="/assets/spell.png" alt="" height={20} width={34} className="filter invert"/>
         </button>
   </div>
<audio ref={audioRef} track="" src="/assets/name.mp3" type="audio/mpeg"></audio>
       <div className="">
        <img src="/assets/shopify.png" alt="" width={60}/>
       </div>
    <h2 className="role"> Front-end Shopify developer based in Morocco </h2>
    <div className="py-4"> <small>Remote freelancer</small> </div>
    <div className="max-w-[400px] mt-24"> <small>Proficient in utilizing Shopify Liquid, AJAX, JavaScript, HTML, and CSS to develop custom Shopify solutions. Proficient in understanding and implementing Shopify's architecture, especially concerning cart and checkout systems. Capable of integrating smoothly with existing backend services. Strong focus on design and user experience. Exceptional problem-solving abilities and meticulous attention to detail

</small> </div>
     <Marquee />
    <ul className="socials-icons flex items-center justify-center gap-4 mt-32">
      <li  className="max-w-[80px] ">
        <a href="https://www.linkedin.com/in/esmail-o-talb-36a98a20a/" target="_blank" rel="noreferrer">
          <img src="/assets/business.png" alt="" height={80} className="filter invert"/>
        </a>
      </li>
      <li  className="max-w-[80px] ">
        <a href="https://www.upwork.com/freelancers/~01ad7a6bf558fa7802?viewMode=1" target="_blank" rel="noreferrer">
          <img src="/assets/upwork.png" alt="" height={80} className=""/>
        </a>
      </li>
      <li  className="max-w-[80px] ">
        <a href="/assets/ShopifyDev.pdf">
          <img src="/assets/cv.png" alt="" height={80} className=""/>
        </a> 
      </li>
    </ul>
  
  </section>


</main>
      </>
    )
}