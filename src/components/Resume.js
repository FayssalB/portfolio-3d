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
            <div className='left-side'>
                <div className='paragraphe'>
                    <p>
                        Salut ! Je suis un passionné de code, tout juste sorti d'une formation de développeur Full Stack. Je suis prêt à explorer de nouvelles voies et à m'immerger dans le monde du développement. Ma mission ? Progresser continuellement et vivre de nouvelles expériences dans le domaine du développement, tout en créant des projets passionnants. Alors, si mon profil vous intéresse, contactez-moi.</p>
                </div>
            </div>
            <div className='right-side'>
                <FaHtml5 className='icon' />
                <FaCss3Alt className='icon'/>
                <FaPhp className='icon'/>
                <FaReact className='icon'/>
                <FaSass className='icon'/>
                <TbSql className='icon'/>
                <SiMysql className='icon'/>
                <SiMongodb className='icon'/>
                <BiLogoJavascript className='icon'/>
                <FaGithub className='icon'/>
            </div>
        </div>
    )
}

export default Resume;