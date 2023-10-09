import '../App.scss';
import Menu from './Menu.js';
import { OrbitControls } from '@react-three/drei';
import { useLoader, Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


function Home() {
    const [modal, setModal] = useState(false);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState(1.5)    
    const modelRef = useRef();

    function Bird() {

        useEffect(() => {
          const handleResize = () => {
            const isSmallScreen = window.innerWidth <= 768;
            {isSmallScreen ? setScale(1) : setScale(1.5)}
          }
        
          return () => {
           handleResize()
          }
        }, [window.innerWidth])
        



        const rotateModel = () => {
            setRotation([rotation[0], rotation[1] + 0.005, rotation[2]]);
        }

        useFrame(() => {
            rotateModel();
            if (modelRef.current) {
                modelRef.current.rotation.x = rotation[0];
                modelRef.current.rotation.y = rotation[1];
                modelRef.current.rotation.z = rotation[2];
            }
        })
       


        const model = useLoader(GLTFLoader, 'turkey_called_indiushka/scene.gltf')
        return (
            <>
                <primitive ref={modelRef} object={model.scene} scale={scale} position={[0, -1, 0]} />
            </>
        )

        

    }

    return (
        <div className="App">
            {/* <header>
                <nav>
                    <ul>
                        <li onClick={() => { setModal(!modal); }}>
                            <img className="hamburger-menu" src="hamburger-menu.svg" />
                        </li>
                    </ul>
                </nav>
            </header> */}
           
            <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
           
            <div className={`intro-container ${modal ? "noise" : ""}`}>

                <div className='intro'>
                    <div>
                        <h1>
                            Bonjour, je m'appelle Fayssal Belghazi.
                        </h1>
                        <p> Jeune developpeur web passionné</p>
                        <ul>
                            <li>
                                <Link to={"/project"}>voir mes projets</Link>
                            </li>
                            <li>
                                <Link to={"/resume"}>en savoir plus</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='model-intro'>
                    {/* <Canvas camera={{ position: [0, 0.5, 4], fov: 70, near: 0.01, far: 1000 }}>
                        <OrbitControls /> Permet de déplacer le Model
                        <ambientLight />
                        <pointLight />
                        <Bird />
                    </Canvas> */}
                </div>

            </div>


        </div>
    );
}

export default Home;
