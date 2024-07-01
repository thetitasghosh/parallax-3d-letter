"use client";
import { useEffect } from "react";
import style from "./page.module.css";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  // useEffect(()=>{
  //     const lenis = new Lenis()

  //     function raf(time){
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)
  //     }
  //   requestAnimationFrame(raf)
  // },[])
  return (
    <main className={style.main}>
      {/* <h1 className="text-white">Skull</h1> */}
      <div className={style.page1}>
        <div className="flex items-center justify-center flex-col font-bold ">
          <h1>
            {" "}
            <em>t</em> itas <em>g</em>hosh
          </h1>
          <h1>creative front end</h1>
          <h1>
            <em>★</em> developer ⁂
          </h1>
        </div>
        <div className="text-xl flex items-center justify-center flex-col">
          <h1>Scroll Down</h1>
          <h1 className="text-5xl">↓</h1>
        </div>
      </div>
      <Scene />
      <div className={style.page2} >
        <h1>contact me ↲ </h1>
        <h1 className="text-5xl italic">
          <a href="mailto:info.titasghosh@gmail.com" target="_top">
            info.titasghosh@gmail.com
          </a>
        </h1>
      </div>
    </main>
  );
}
