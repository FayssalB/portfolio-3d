import { React,  useState } from 'react';
// import "../Resume.scss";
import Header from './Header';

const Resume = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className='resume-container'>
            <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
            <div className='left-side'>
                <div className='paragraphe'>
                    <p>BLABLABLABLA</p>
                </div>
            </div>
            <div className='right-side'>
                <img src='' alt='pp' />
            </div>
        </div>
    )
}

export default Resume;