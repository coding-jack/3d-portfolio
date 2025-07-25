import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
extend({ OrbitControls })
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight
        intensity={300}
        angle={0.12}
        penumbra={1}
        position={[-20, 50, 10]}
        castShadow
        shadow-mapSize={1024}
        decay={1}
        distance={100}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2, -1.2] : [0, -3.25, -1.5]}
        rotation={isMobile ? [0, -0.2, -0.1] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas