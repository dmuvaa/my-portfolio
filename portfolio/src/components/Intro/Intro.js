import './intro.css';
import introImg from '../../assets/dmuvaa2.png';
import { Link } from 'react-scroll';
import { IoMdBriefcase } from "react-icons/io";

const IntroSection = () => {
    return (
        <section id='intro' className='introSection'>
            <div className='container'>
                <div className='intoContent'>
                    <span className='hello'>Hello,</span>
                    <span className='introText'>
                        I'm <span className='introName'>Dennis</span>
                        <br/>Software Engineer
                    </span>
                    <p className='introParagraph'>
                        I am a skilled software engineer with exprience in creating <br/>robust 
                        and user friendly applications
                    </p>
                    <Link>
                        <button className='btn'>
                            <IoMdBriefcase className='btnImg'/>
                            <span>Hire me</span>
                        </button>
                    </Link>
                </div>
                <img src={introImg} alt='profile' className='introImg'></img>
            </div>
        </section>
    )
}

export default IntroSection;