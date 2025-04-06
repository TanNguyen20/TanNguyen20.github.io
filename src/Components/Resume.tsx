import { motion } from "framer-motion";
import { Col, Row } from 'react-grid-system';
import { useMediaQuery } from 'react-responsive';

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
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Define colors for specific skills
    const skillColors: Record<string, string> = {
        'ReactJS': '#61DAFB',
        'TypeScript': '#3178C6',
        'NextJS': '#000000',
        'Java Spring Boot': '#6DB33F',
        'NodeJS': '#339933',
        'HTML/CSS': '#E34F26',
        'JavaScript (ES6+)': '#F7DF1E',
        'OAuth2/JWT': '#000000',
        'Redis': '#DC382D',
        'Apache Pulsar': '#188FFF',
        'Docker': '#2496ED',
        'Kubernetes': '#326CE5',
        'SQL Server': '#CC2927',
        'MongoDB': '#47A248',
        'PostgreSQL': '#336791',
        'Python': '#3776AB',
        'Design patterns': '#000000',
        'Clean Code': '#000000'
    };

    // Function to get color for a skill
    const getSkillColor = (skillName: string): string => {
        return skillColors[skillName] || '#2196f3'; // Default to blue if no specific color
    };

    // Function to parse the level string to a number
    const getSkillLevel = (level: string): number => {
        // Remove any non-numeric characters and convert to number
        const numericValue = parseInt(level.replace(/[^0-9]/g, ''));
        return isNaN(numericValue) ? 0 : numericValue;
    };

    return (
        <section id="resume" style={{ padding: isMobile ? '30px 0' : '50px 0', backgroundColor: '#f5f5f5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '24px' : '28px',
                        fontWeight: 'bold',
                        marginBottom: isMobile ? '30px' : '40px',
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
                        <Row key={index} style={{ marginBottom: isMobile ? '30px' : '40px', alignItems: 'flex-start' }}>
                            <Col xs={12} md={3} style={{ marginBottom: isMobile ? '15px' : '20px', textAlign: isMobile ? 'center' : 'left' }}>
                                <img
                                    src={`images/${education.image}`}
                                    alt={education.school}
                                    style={{
                                        width: isMobile ? '60px' : '80px',
                                        height: isMobile ? '60px' : '80px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Col>
                            <Col xs={12} md={9}>
                                <h3 style={{
                                    fontSize: isMobile ? '20px' : '24px',
                                    marginBottom: '10px',
                                    color: '#333',
                                    textAlign: isMobile ? 'center' : 'left'
                                }}>{education.school}</h3>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    textAlign: isMobile ? 'center' : 'left'
                                }}>
                                    {education.degree} • {education.graduated}
                                </p>
                                <p style={{ color: '#666', textAlign: isMobile ? 'center' : 'left' }}>{education.description}</p>
                            </Col>
                        </Row>
                    ))}
                </motion.div>

                {/* Work Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '24px' : '28px',
                        fontWeight: 'bold',
                        marginBottom: isMobile ? '30px' : '40px',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        WORK EXPERIENCE
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
                        <Row key={index} style={{ marginBottom: isMobile ? '30px' : '40px', alignItems: 'flex-start' }}>
                            <Col xs={12} md={3} style={{ marginBottom: isMobile ? '15px' : '20px', textAlign: isMobile ? 'center' : 'left' }}>
                                <img
                                    src={`images/${work.image}`}
                                    alt={work.company}
                                    style={{
                                        width: isMobile ? '60px' : '80px',
                                        height: isMobile ? '60px' : '80px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Col>
                            <Col xs={12} md={9}>
                                <h3 style={{
                                    fontSize: isMobile ? '20px' : '24px',
                                    marginBottom: '10px',
                                    color: '#333',
                                    textAlign: 'left'
                                }}>{work.company}</h3>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    textAlign: 'left'
                                }}>
                                    {work.title} • {work.years}
                                </p>
                                <div style={{
                                    color: '#555',
                                    whiteSpace: 'pre-line',
                                    lineHeight: isMobile ? '1.4' : '1.6',
                                    fontSize: isMobile ? '14px' : '16px',
                                    textAlign: 'left'
                                }}>
                                    {work.description}
                                </div>
                            </Col>
                        </Row>
                    ))}
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '24px' : '28px',
                        fontWeight: 'bold',
                        marginBottom: isMobile ? '30px' : '40px',
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

                    <p style={{
                        marginBottom: isMobile ? '20px' : '30px',
                        fontSize: isMobile ? '16px' : '18px',
                        color: '#555',
                        fontStyle: 'italic',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        {data.skillmessage}
                    </p>

                    <Row>
                        {data.skills.map((skill, index) => {
                            const skillLevel = getSkillLevel(skill.level);
                            const skillColor = getSkillColor(skill.name);

                            return (
                                <Col key={index} xs={12} md={6} style={{ marginBottom: isMobile ? '20px' : '30px' }}>
                                    <div style={{ marginBottom: '10px' }}>
                                        <h3 style={{
                                            fontSize: isMobile ? '14px' : '16px',
                                            fontWeight: '500',
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            textAlign: isMobile ? 'center' : 'left'
                                        }}>
                                            {skill.name}
                                        </h3>
                                        <div style={{
                                            height: isMobile ? '8px' : '10px',
                                            backgroundColor: '#e0e0e0',
                                            borderRadius: '5px',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                width: `${skillLevel}%`,
                                                height: '100%',
                                                backgroundColor: skillColor,
                                                borderRadius: '5px'
                                            }} />
                                        </div>
                                        <span style={{
                                            fontSize: isMobile ? '12px' : '14px',
                                            color: '#666',
                                            marginTop: '5px',
                                            display: 'block',
                                            textAlign: isMobile ? 'center' : 'left'
                                        }}>
                                            {skill.level}
                                        </span>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </motion.div>
            </div>
        </section>
    );
}

export default Resume; 