import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group scale={1} position={[22,4,0]} dispose={null} {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.79, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.7,0.7,0.7]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo;