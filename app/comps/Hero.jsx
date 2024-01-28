import { useRef } from "react";

export default function Hero(){
    const audioRef = useRef();

    const handlePlay = () => {
       audioRef.current.play();
    };
    return(
      <>    
       


<main className="et-main flex overflow-x-auto">
  <section className="et-slide flex-none w-screen" id="about">
    <h1> Ismail O'talb </h1>
    <button onClick={handlePlay} className="py-4">
        <img src="/assets/spell.png" alt="" width={34}/>
         </button>
<audio ref={audioRef} track="" src="/assets/name.mp3" type="audio/mpeg"></audio>
    <h3> Shopify developer <br /> based in Morocco </h3>
  </section>
  <section className="et-slide flex-none w-screen bg-amber-400" id="blog">
    <h1>blog</h1>
    <h3> blog posts</h3>
  </section>
  <section className="et-slide flex-none w-screen" id="projects">
    <h1>projects</h1>
    <h3>list of projects</h3>
  </section>
</main>
      </>
    )
}