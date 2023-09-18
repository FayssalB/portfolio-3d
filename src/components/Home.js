import '../App.scss';
import Menu from './Menu.js';
import Project from './Project';
import { OrbitControls } from '@react-three/drei';
import { useLoader, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const [modal, setModal] = useState(false);
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
            <header>
                <nav>
                    <ul>
                        <li onClick={() => { setModal(!modal); }}>
                            <img className="hamburger-menu" src="hamburger-menu.svg" />
                        </li>
                    </ul>
                </nav>
            </header>

            <Menu
                visible={modal ? "visible" : "not-visible"} />
            <div className={`container ${modal ? "noise" : ""}`}>

                <div className='intro'>
                    <h1>
                        Salut, Je m'appelle Fayssal Belghazi.
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

                <div className='model-intro'>
                    {/* <Canvas camera={{ position: [0, 0.5, 4], fov: 70, near: 0.01, far: 1000 }}>
            <OrbitControls />
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
