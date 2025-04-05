import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from 'react-grid-system';

interface Education {
    school: string;
    degree: string;
    graduated: string;
    description: string;
    image: string;
}

interface Work {
    company: string;
    title: string;
    years: string;
    description: string;
    image: string;
}

interface Skill {
    name: string;
    level: string;
}

interface ResumeProps {
    data: {
        skillmessage: string;
        education: Education[];
        work: Work[];
        skills: Skill[];
    };
}

function Resume({ data }: ResumeProps) {
    const getRandomColor = (): string => {
        return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
    };

    return (
        <section id="resume" style={{ padding: '50px 0', backgroundColor: '#f5f5f5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        marginBottom: '40px',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        EDUCATION
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: 0,
                            width: '60%',
                            height: '3px',
                            backgroundColor: '#2196f3'
                        }} />
                    </h2>

                    {data.education.map((education, index) => (
                        <Row key={index} style={{ marginBottom: '40px', alignItems: 'flex-start' }}>
                            <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
                                <img
                                    src={`images/${education.image}`}
                                    alt={education.school}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Col>
                            <Col xs={12} md={9}>
                                <h3 style={{
                                    fontSize: '24px',
                                    marginBottom: '10px',
                                    color: '#333'
                                }}>{education.school}</h3>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: '16px'
                                }}>
                                    {education.degree} • {education.graduated}
                                </p>
                                <p style={{ color: '#666' }}>{education.description}</p>
                            </Col>
                        </Row>
                    ))}
                </motion.div>

                {/* Work Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginTop: '60px' }}
                >
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        marginBottom: '40px',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        WORK
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: 0,
                            width: '60%',
                            height: '3px',
                            backgroundColor: '#2196f3'
                        }} />
                    </h2>

                    {data.work.map((work, index) => (
                        <Row key={index} style={{ marginBottom: '40px', alignItems: 'flex-start' }}>
                            <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
                                <img
                                    src={`images/${work.image}`}
                                    alt={work.company}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'contain',
                                        backgroundColor: '#0099E5',
                                        borderRadius: '8px',
                                        padding: '8px'
                                    }}
                                />
                            </Col>
                            <Col xs={12} md={9}>
                                <h3 style={{
                                    fontSize: '24px',
                                    marginBottom: '10px',
                                    color: '#333'
                                }}>{work.company}</h3>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: '16px'
                                }}>
                                    {work.title} • {work.years}
                                </p>
                                <p style={{ color: '#666' }}>
                                    {work.description.split("\n").map((item, i) => (
                                        <React.Fragment key={i}>
                                            {item}<br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </Col>
                        </Row>
                    ))}
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginTop: '60px' }}
                >
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        marginBottom: '40px',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        SKILLS
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: 0,
                            width: '60%',
                            height: '3px',
                            backgroundColor: '#2196f3'
                        }} />
                    </h2>

                    <p style={{ marginBottom: '30px', color: '#666' }}>{data.skillmessage}</p>

                    <div className="bars">
                        <ul className="skills" style={{ listStyle: 'none', padding: 0 }}>
                            {data.skills.map((skill, index) => {
                                const backgroundColor = getRandomColor();
                                const className = "bar-expand " + skill.name.toLowerCase();
                                const width = skill.level;

                                return (
                                    <li key={index} style={{ marginBottom: '60px' }} data-tip={skill.level}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'start',
                                            gap: '10px',
                                            flexDirection: 'column'
                                        }}>
                                            <span style={{
                                                width,
                                                backgroundColor,
                                                height: '42px',
                                                display: 'block',
                                                borderRadius: '3px'
                                            }} className={className}></span>
                                            <em style={{
                                                color: '#333',
                                                fontSize: '16px'
                                            }}>{skill.name}</em>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Resume; 