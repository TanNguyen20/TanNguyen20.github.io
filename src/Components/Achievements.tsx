import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-grid-system';
import { useMediaQuery } from 'react-responsive';

interface Achievement {
    title: string;
    description: string;
    icon?: string;
}

interface AchievementsProps {
    data: {
        achievements: Achievement[];
    };
}

function Achievements({ data }: AchievementsProps) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section id="achievements" style={{ backgroundColor: '#f5f5f5', padding: isMobile ? '30px 0' : '50px 0' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '40px' }}>
                        <h2 style={{
                            fontSize: isMobile ? '24px' : '28px',
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            ACHIEVEMENTS
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

                    <Row>
                        {data.achievements.map((achievement, index) => (
                            <Col
                                key={index}
                                xs={12}
                                md={6}
                                style={{ marginBottom: isMobile ? '20px' : '30px' }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '8px',
                                        padding: isMobile ? '20px' : '25px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        flexDirection: isMobile ? 'column' : 'row',
                                        textAlign: isMobile ? 'center' : 'left'
                                    }}>
                                        {achievement.icon && (
                                            <div style={{
                                                width: isMobile ? '50px' : '40px',
                                                height: isMobile ? '50px' : '40px',
                                                backgroundColor: '#2196f3',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: isMobile ? '0' : '15px',
                                                marginBottom: isMobile ? '10px' : '0'
                                            }}>
                                                <i className={achievement.icon} style={{ color: 'white', fontSize: isMobile ? '20px' : '16px' }}></i>
                                            </div>
                                        )}
                                        <h3 style={{
                                            margin: 0,
                                            fontSize: isMobile ? '18px' : '20px',
                                            fontWeight: 'bold',
                                            color: '#333'
                                        }}>
                                            {achievement.title}
                                        </h3>
                                    </div>

                                    <p style={{
                                        color: '#555',
                                        fontSize: isMobile ? '14px' : '16px',
                                        lineHeight: '1.6',
                                        margin: 0,
                                        textAlign: isMobile ? 'center' : 'left'
                                    }}>
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
}

export default Achievements; 