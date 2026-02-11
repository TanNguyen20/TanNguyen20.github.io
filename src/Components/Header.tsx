import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import { useMediaQuery } from 'react-responsive';
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
    const isMobile = useMediaQuery({ maxWidth: 768 });

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
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="responsive-headline" style={{
                            fontSize: isMobile ? '32px' : '48px',
                            marginBottom: isMobile ? '10px' : '20px'
                        }}>
                            {data.name}
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 style={{
                            fontSize: isMobile ? '18px' : '24px',
                            marginBottom: isMobile ? '15px' : '25px'
                        }}>{data.description}.</h3>
                    </motion.div>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <ul className="social" style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '15px' : '20px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            listStyle: 'none',
                            padding: 0,
                            margin: isMobile ? '15px 0' : '20px 0'
                        }}>
                            <a
                                href={data.facebook}
                                className="button"
                                style={{
                                    backgroundColor: '#17B3B3',
                                    color: 'white',
                                    padding: isMobile ? '16px 24px' : '24px 24px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: '500',
                                    width: isMobile ? '100%' : 'auto'
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
                                    padding: isMobile ? '16px 24px' : '24px 24px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: '500',
                                    width: isMobile ? '100%' : 'auto'
                                }}
                            >
                                <i className="fa fa-github"></i>
                                Github
                            </a>
                            <a
                                href={"https://raw.githubusercontent.com/TanNguyen20/TanNguyen20/main/fullstack.pdf"}
                                className="button"
                                style={{
                                    backgroundColor: '#000000',
                                    color: 'white',
                                    padding: isMobile ? '16px 24px' : '24px 24px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: '500',
                                    width: isMobile ? '100%' : 'auto'
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