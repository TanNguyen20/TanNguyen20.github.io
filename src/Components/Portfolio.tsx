import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-grid-system';
import Zmage from "react-zmage";

interface Project {
    title: string;
    name: string;
    category: string;
    image: string;
    technologies: string;
    url: string;
}

interface PortfolioProps {
    data: {
        projects: Project[];
    };
}

function Portfolio({ data }: PortfolioProps) {
    return (
        <section id="projects" style={{ backgroundColor: '#ffffff', padding: '50px 0' }}>
            <motion.div
                className="row section-head"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="ten columns" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        PROJECTS
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: 0,
                            width: '60%',
                            height: '3px',
                            backgroundColor: '#2196f3'
                        }} />
                    </h2>
                </div>
            </motion.div>

            <Container fluid>
                <Row>
                    {data.projects.map((project, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            style={{ marginBottom: '30px' }}
                        >
                            <motion.div
                                className="portfolio-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    backgroundColor: '#fff'
                                }}
                                whileHover={{
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                    <Zmage
                                        alt={project.title}
                                        src={`images/portfolio/${project.image}`}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{project.title}</h3>
                                    <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>{project.category}</p>
                                    <p style={{ margin: '0 0 15px 0', color: '#888', fontSize: '12px' }}>{project.technologies}</p>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            marginTop: 'auto',
                                            padding: '8px 15px',
                                            backgroundColor: '#108FCF',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            textAlign: 'center',
                                            transition: 'background-color 0.3s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0a6d9e'}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#108FCF'}
                                    >
                                        {project.name}
                                    </a>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio; 