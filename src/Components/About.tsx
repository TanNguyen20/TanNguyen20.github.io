import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function About() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/TanNguyen20/TanNguyen20/main/README.md')
            .then((response) => response.text())
            .then((text) => {
                setMarkdown(text)
            });
    }, []);


    return (
        <section id="about">
            <motion.div
                className="row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="twelve columns main-col">
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                </div>
            </motion.div>
        </section>
    );
}

export default About;