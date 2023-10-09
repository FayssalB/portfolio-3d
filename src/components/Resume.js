import { React, useState } from 'react';
import "../Resume.scss";
import Header from './Header';
import { FaCss3Alt, FaGithub, FaHtml5, FaPhp, FaReact, FaSass } from 'react-icons/fa'
import { TbSql } from "react-icons/tb";
import { SiMysql, SiMongodb } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
const Resume = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className='resume-container'>
            <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
            <div className={`allsides ${modal ? "noise" : ""}`} >
                <div className='left-side'>

                    <h1>A propos</h1>
                    <hr></hr>
                    <p> Salut ! Je suis Fayssal Belghazi, un développeur Full Stack avec une solide formation de chez <span style={{color:"#F82D2D"}}>M2I</span>. J'ai travaillé sur divers projets dans plusieurs langages, mais j'ai une préférence particulière pour <span style={{color:"#5ED3F3"}}>REACT</span>, avec lequel j'ai réalisé de nombreux projets passionnants. Je suis passionné par le développement et toujours prêt à apprendre de nouvelles technologies. Ma mission est de continuer à progresser, d'explorer de nouveaux horizons et de créer des projets innovants. Si vous cherchez un développeur enthousiaste pour rejoindre votre équipe ou collaborer sur des projets, n'hésitez pas à me contacter. Je suis prêt à relever de nouveaux défis !</p>

                </div>
                <div className='right-side'>
                    <FaHtml5 className='icon' />
                    <FaCss3Alt className='icon' />
                    <FaPhp className='icon' />
                    <FaReact className='icon' />
                    <FaSass className='icon' />
                    <TbSql className='icon' />
                    <SiMysql className='icon' />
                    <SiMongodb className='icon' />
                    <BiLogoJavascript className='icon' />
                    <FaGithub className='icon' />
                </div>
            </div>
        </div>
    )
}
export default Resume;