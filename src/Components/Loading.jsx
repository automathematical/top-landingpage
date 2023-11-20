import { useProgress, Html } from '@react-three/drei'

export function Loading() {
  const { progress } = useProgress()
  console.log(progress)
  return (
    <Html center>
      <h2>{progress} % loaded</h2>
    </Html>
  )
}
