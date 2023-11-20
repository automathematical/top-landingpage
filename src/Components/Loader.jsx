import { useProgress, Html } from '@react-three/drei'

export function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
