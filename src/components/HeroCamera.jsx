import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({children,isSmall}) => {
    const groupRef = useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position,[0,0,30],0.2,delta)
        if(!isSmall){
          easing.dampE(groupRef.current.rotation,[-state.pointer.y/4,-state.pointer.x/5,0],0.2,delta)
        }
    })
  return (
    <group ref={groupRef}>
        {children}
    </group>
  )
}
export default HeroCamera