import { useEffect, useRef } from 'react'
import { ContainerScene } from './Scene.elements'
import { cleanUpScene, initScene, loadModels, loadGroups } from './Script'

const Scene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    initScene(mountRef)
    loadModels('./model/base/Base.gltf', 'base')
    loadModels('./model/motor/Motor1.gltf', 'motor')
    loadModels('./model/helices/Helice1.gltf', 'helices')
    loadModels('./model/cam/Cam1.gltf', 'camaras')
    loadGroups()
    return () => {
      cleanUpScene()
    }
  }, [])

  return (
    <>
      <ContainerScene
        className="SceneContainer"
        ref={mountRef}
      ></ContainerScene>
    </>
  )
}

export default Scene
