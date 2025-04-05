import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import CVPdf from '../files/NguyenNhatTan_CV_En.pdf';
import { CVIcon } from "../icons/svg/cv";

interface HeaderProps {
    data: {
        name: string;
        description: string;
        image: string;
        bio: string;
        careerObjective: string;
        contactmessage: string;
        email: string;
        phone: string;
        github: string;
        facebook: string;
        address: {
            street: string;
            city: string;
            zip: string;
        };
        website: string;
        social: Array<{
            name: string;
            url: string;
            className: string;
        }>;
    };
}

function Header({ data }: HeaderProps) {
    return (
        <header id="home">
            <ParticlesBg type="cobweb" bg={true} />

            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="responsive-headline">
                            {data.name}
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3>{data.description}.</h3>
                    </motion.div>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <ul className="social" style={{
                            display: 'flex',
                            gap: '20px',
                            justifyContent: 'center',
                            listStyle: 'none',
                            padding: 0,
                            margin: '20px 0'
                        }}>
                            <a
                                href={data.facebook}
                                className="button"
                                style={{
                                    backgroundColor: '#17B3B3',
                                    color: 'white',
                                    padding: '24px 24px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}
                            >
                                <i className="fa fa-facebook"></i>
                                Facebook
                            </a>
                            <a
                                href={data.github}
                                className="button"
                                style={{
                                    backgroundColor: '#2F4F4F',
                                    color: 'white',
                                    padding: '24px 24px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}
                            >
                                <i className="fa fa-github"></i>
                                Github
                            </a>
                            <a
                                href={CVPdf}
                                className="button"
                                style={{
                                    backgroundColor: '#000000',
                                    color: 'white',
                                    padding: '24px 24px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}
                            >
                                <CVIcon />
                                Link to CV (PDF)
                            </a>
                        </ul>
                    </motion.div>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    );
}

export default Header; 