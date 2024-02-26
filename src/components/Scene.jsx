"use client";
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls, Environment } from "@react-three/drei";
import React, { useRef } from "react";
import TextParagraph from "./TextPara";
import style from "./components.module.css";
import Letter3D from "./Letter3D";

const Scene = () => {
  const canvas = useRef(null);
  return (
    <Canvas
    
      className={style.Canvas}
      ref={canvas}
      style={{ backgroundColor: "black" }}
      orthographic
      camera={{ position: [0, 0, 15], zoom: 100 }}
    >
      <ambientLight intensity={0.6} color={"#dee2ff"} />
      <Letter3D fref= {canvas}  />
      <TextParagraph />
      <Environment preset="studio" />
      {/* <axesHelper
        scale={2}
        position={[0, 0, 0]}
        onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
      /> */}
      {/* <OrbitControls /> */}
      {/* <ambientLight intensity={0.5} color={"white"}/> */}
      <directionalLight intensity={2} position={[0, 2, 3]} />
    </Canvas>
  );
};

export default Scene;
