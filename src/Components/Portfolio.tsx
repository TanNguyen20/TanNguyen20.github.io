import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-grid-system';
import { useMediaQuery } from 'react-responsive';
import Zmage from "react-zmage";

interface Project {
    title: string;
    name: string;
    category: string;
    image: string;
    technologies: string;
    url: string;
    description: string;
}

interface PortfolioProps {
    data: {
        projects: Project[];
    };
}

function Portfolio({ data }: PortfolioProps) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section id="projects" style={{ backgroundColor: '#ffffff', padding: isMobile ? '30px 0' : '50px 0' }}>
            <motion.div
                className="row section-head"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="ten columns" style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '40px' }}>
                    <h2 style={{
                        fontSize: isMobile ? '24px' : '28px',
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
                            sm={12}
                            md={6}
                            style={{ marginBottom: isMobile ? '20px' : '30px' }}
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
                                <div style={{ padding: isMobile ? '12px' : '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ margin: '0 0 8px 0', fontSize: isMobile ? '16px' : '18px' }}>{project.title}</h3>
                                    <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: isMobile ? '12px' : '14px' }}>{project.category}</p>
                                    <p style={{ margin: '0 0 12px 0', color: '#888', fontSize: isMobile ? '11px' : '12px' }}>{project.technologies}</p>
                                    {project.description && (
                                        <p style={{
                                            margin: '0 0 12px 0',
                                            color: '#555',
                                            fontSize: isMobile ? '12px' : '14px',
                                            flex: 1
                                        }}>
                                            {project.description}
                                        </p>
                                    )}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            marginTop: 'auto',
                                            display: 'inline-block',
                                            padding: isMobile ? '6px 12px' : '8px 16px',
                                            backgroundColor: '#2196f3',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            textAlign: 'center',
                                            transition: 'background-color 0.3s ease',
                                            fontSize: isMobile ? '12px' : '14px'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1976d2'}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2196f3'}
                                    >
                                        View Project
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