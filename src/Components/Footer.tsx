import { motion } from "framer-motion";

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
            <div className="row">
                <motion.div
                    className="twelve columns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ul className="social-links">{networks}</ul>
                    <ul className="copyright">
                        <li>&copy; Copyright {new Date().getFullYear()} Tan Nguyen</li>
                    </ul>
                </motion.div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 