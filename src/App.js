import './App.scss';
import { OrbitControls } from '@react-three/drei';
import { useLoader, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function App() {
  function Bird() {
    const model = useLoader(GLTFLoader, 'turkey_called_indiushka/scene.gltf')
    return (
      <>
        <primitive object={model.scene} scale={1.5} position={[0, -1, 0]} />
      </>
    )
  }
  return (
    <div className="App">
      <div className='intro'>
        <h1>
          Salut, Je m'appelle Fayssal Belghazi.
        </h1>
        <p> Jeune developpeur web passionné</p>
        <ul>
          <li>
            <a href='#'> voir mes projets</a>
          </li>
          <li>
            <a href='#'> en savoir plus</a>
          </li>
        </ul>
      </div>
      
      <div className='model-intro'>
        <Canvas camera={{ position: [0, 0.5, 4], fov: 70, near: 0.01, far: 1000 }}>
          <OrbitControls />
          <ambientLight />
          <pointLight />
          <Bird />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
