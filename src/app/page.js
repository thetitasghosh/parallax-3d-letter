'use client'
import { useEffect } from "react";
import style from "./page.module.css";
import dynamic from "next/dynamic";
import  Lenis  from '@studio-freight/lenis';

const Scene = dynamic(()=> import ('@/components/Scene'),{
  ssr:false,
})



export default function Home() {

  useEffect(()=>{
      const lenis = new Lenis()

      function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
    requestAnimationFrame(raf)
  },[])
  return (
    <main className={style.main}>
     {/* <h1 className="text-white">Skull</h1> */}
     <div className={style.page1} />
     <Scene />
     <div className={style.page2}/>
    </main>
  );
}
