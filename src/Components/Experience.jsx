/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { RGBELoader } from 'three-stdlib'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import { useControls, button } from 'leva'
import { Suspense } from 'react'
import { Loading } from './Loading'

export function Experience() {
  const { autoRotate, shadow, ...config } = useControls({
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: '#9ca9ff',
    gColor: '#97d0ff',
    shadow: '#daecf7',
    autoRotate: true,
    screenshot: button(() => {
      // Save the canvas as a *.png
      const link = document.createElement('a')
      link.setAttribute('download', 'canvas.png')
      link.setAttribute(
        'href',
        document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream')
      )
      link.click()
    }),
  })

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [-15, 20, 20], zoom: 30 }}
      gl={{ preserveDrawingBuffer: true }}>
      <color
        attach='background'
        args={['#fafafa']}
      />
      <Suspense fallback={<Loading />}>
        {/** The text and the grid */}
        <Text
          config={config}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 2.25]}>
          More content soon!
        </Text>
        {/** Controls */}
        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={-0.5}
          zoomSpeed={0.25}
          minZoom={30}
          maxZoom={60}
          enablePan={true}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
        {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
        <Environment resolution={32}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer
              intensity={20}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={[10, 10, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[10, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={[10, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[20, 2, 1]}
            />
            <Lightformer
              type='ring'
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-0.1, -1, -5]}
              scale={10}
            />
          </group>
        </Environment>
        {/** Soft shadows */}
        <AccumulativeShadows
          frames={100}
          color={shadow}
          colorBlend={5}
          toneMapped={true}
          alphaTest={0.9}
          opacity={1}
          scale={80}
          position={[0, -1.01, 0]}>
          <RandomizedLight
            amount={4}
            radius={10}
            ambient={0.5}
            intensity={1}
            position={[0, 10, -10]}
            size={30}
            mapSize={1024}
            bias={0.0001}
          />
        </AccumulativeShadows>
      </Suspense>
    </Canvas>
  )
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color='#999' />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ':' + y}
          position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper
      args={[100, 100, '#bbb', '#bbb']}
      position={[0, -0.01, 0]}
    />
  </Instances>
)

function Text({ children, config, font = '/Inter_Medium_Regular.json', ...props }) {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
  )
  return (
    <>
      <group>
        <Center
          scale={[0.8, 1, 1]}
          front
          top
          {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            <MeshTransmissionMaterial
              {...config}
              background={texture}
            />
          </Text3D>
        </Center>
        <Grid />
      </group>
    </>
  )
}

export default Experience
