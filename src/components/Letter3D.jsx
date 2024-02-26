import {motion} from "framer-motion-3d"
import {useControls} from 'leva'
import {useScroll,useTransform,useVelocity} from "framer-motion"
import React, { useEffect, useRef } from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Letter3D({fref}) {
  const { nodes } = useGLTF("/Assets/Titas3DText.glb");
  const group = useRef()
    const {scrollYProgress} = useScroll({
        target:fref,
        offset:['start end', 'end start']
    })
    
    const posY = useTransform(scrollYProgress,[0,1],[-300,900 ])
    const rotY = useTransform(scrollYProgress,[0,1],[0,5])
    const rotX = useTransform(scrollYProgress,[0,1],[0,30])
    const rotZ = useTransform(scrollYProgress,[0,1],[0,5])
    
    // const {xpos,ypos,zpos} = useControls("rotation",{
    //     xpos:{value:0,min:0,max:10},
    //     ypos:{value:0,min:0,max:10},
    //     zpos:{value:0,min:0,max:10},
    // })
  
  return (
    <group  >
      <group ref={group} scale={0.014} position={[1,-5,10]}  >
       <Text3D data={nodes.T1}  position={[-300,posY,0]} rotation={[rotX ,0,1.9]}  /> z : 1.9
       <Text3D data={nodes.I}  position={[-95.64,posY, 3.789]} rotation={[rotX,0,1.2]} />
       <Text3D data={nodes.T_2} position={[-500,posY, 15.789]} rotation={[rotX,0,1.8]} />
       <Text3D data={nodes.A}   position={[119.391,posY, 82.789]} rotation={[rotX,0,-1]} />
       <Text3D data={nodes.S} position={[379.899,posY, 51.79]} rotation={[rotX,0,1]} />
      </group>
    </group>
  );
}
function Text3D({data,position,rotation}){
    const {geometry} = data;
    const [matMat] = useMatcapTexture('161B1F_C7E0EC_90A5B3_7B8C9B')
    return (
        <motion.mesh
        
        rotation={rotation}
        position={position}
        geometry={geometry}

        // rotateOnAxis={[y,0.9]}
        >
            <meshMatcapMaterial color="white" matcap={matMat}/>
        </motion.mesh>
    )
}

useGLTF.preload("/Assets/Titas3DText.glb");
