import {motion} from "framer-motion-3d"
import {useControls} from 'leva'
import {useScroll,useTransform,useVelocity} from "framer-motion"
import React, { useEffect, useRef } from "react";
import { Float, useGLTF, useMatcapTexture } from "@react-three/drei";
import { useThree} from "@react-three/fiber";

export default function Letter3D({fref}) {
  const { nodes } = useGLTF("/Assets/Titas3DText.glb");
  const {viewport} = useThree()
  const group = useRef()
    const {scrollYProgress} = useScroll({
        target:fref,
        offset:['start end', 'end start']
    })
    
    const posY1 = useTransform(scrollYProgress,[0,1],[-100,700 ])
    const posY2 = useTransform(scrollYProgress,[0,1],[-250,800 ])
    const posY3 = useTransform(scrollYProgress,[0,1],[-300,950 ])
    const posY4 = useTransform(scrollYProgress,[0,1],[-100,810 ])
    const posY5 = useTransform(scrollYProgress,[0,1],[-100,890 ])
    const rotY = useTransform(scrollYProgress,[0,1],[0,5])
    const rotX = useTransform(scrollYProgress,[0,1],[0,30])
    const rotZ = useTransform(scrollYProgress,[0,1],[0,5])
    
    // const {xpos,ypos,zpos} = useControls("rotation",{
    //     xpos:{value:0,min:0,max:10},
    //     ypos:{value:0,min:0,max:10},
    //     zpos:{value:0,min:0,max:10},
    // })
  return (
    <>
      <group ref={group} scale={0.014} position={[1,-5,10]}  >
       <Text3D data={nodes.T1}  position={[-300,posY5,0]} rotation={[rotX ,0,1.9]}  /> z : 1.9
       <Text3D data={nodes.I}  position={[-95.64,posY2, 3.789]} rotation={[rotX,0,1.2]} />
       <Text3D data={nodes.T_2} position={[-500,posY1, 15.789]} rotation={[rotX,0,1.8]} />
       <Text3D data={nodes.A}   position={[119.391,posY4, 82.789]} rotation={[rotX,0,-1]} />
       <Text3D data={nodes.S} position={[379.899,posY3, 51.79]} rotation={[rotX,0,1]} />
      </group>
    </>
  );
}
function Text3D({data,position,rotation}){
    const {geometry} = data;
    const [matMat] = useMatcapTexture('525050_D4D3D3_959393_ACACAC')
    return (
      <Float>
        <motion.mesh
        rotation={rotation}
        position={position}
        geometry={geometry}
        >
        <meshMatcapMaterial color="white" matcap={matMat}/>
        </motion.mesh>
        </Float>
    )
}

useGLTF.preload("/Assets/Titas3DText.glb");
