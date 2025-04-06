import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

interface SocialNetwork {
    name: string;
    url: string;
    className: string;
}

interface FooterProps {
    data: {
        social: SocialNetwork[];
    };
}

function Footer({ data }: FooterProps) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    if (!data) return null;

    const networks = data.social.map(function (network: SocialNetwork) {
        return (
            <li key={network.name}>
                <a href={network.url}>
                    <i className={network.className}></i>
                </a>
            </li>
        );
    });

    return (
        <footer>
            <div className="row" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: isMobile ? '200px' : 'auto'
            }}>
                <motion.div
                    className="twelve columns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <ul className="social-links" style={{
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '15px',
                        padding: '0 0 15px 0',
                        margin: '0 auto',
                        width: '100%'
                    }}>{networks}</ul>
                    <ul className="copyright" style={{
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '15px',
                        padding: '0',
                        margin: '0 auto',
                        width: '100%'
                    }}>
                        <li>&copy; Copyright {new Date().getFullYear()} Tan Nguyen</li>
                    </ul>
                </motion.div>

                <div id="go-top" style={{
                    position: 'relative',
                    marginTop: '20px'
                }}>
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 