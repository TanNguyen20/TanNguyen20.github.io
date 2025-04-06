import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';

interface ContactProps {
    data: {
        name: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            zip: string;
        };
        contactmessage: string;
    };
}

function Contact({ data }: ContactProps) {
    const contactRef = useRef<HTMLFormElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [formStatus, setFormStatus] = useState<{
        loading: boolean;
        success: boolean;
        error: string | null;
    }>({
        loading: false,
        success: false,
        error: null
    });

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!contactRef.current) return;

        setFormStatus({
            loading: true,
            success: false,
            error: null
        });

        // Check if all required fields are filled
        const formData = new FormData(contactRef.current);
        const contactMessage = formData.get('contactMessage');
        const contactName = formData.get('contactName');
        const contactEmail = formData.get('contactEmail');
        const contactSubject = formData.get('contactSubject');

        if (!contactMessage || !contactName || !contactEmail || !contactSubject) {
            setFormStatus({
                loading: false,
                success: false,
                error: 'Please fill all the fields'
            });
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm('service_4207vap', 'template_1kyn63v', contactRef.current, 'SUssSVv8xihUcIPBC')
            .then(() => {
                setFormStatus({
                    loading: false,
                    success: true,
                    error: null
                });

                // Reset form
                if (contactRef.current) {
                    contactRef.current.reset();
                }

                // Hide success message after 6 seconds
                setTimeout(() => {
                    setFormStatus(prev => ({
                        ...prev,
                        success: false
                    }));
                }, 6000);
            })
            .catch((error) => {
                setFormStatus({
                    loading: false,
                    success: false,
                    error: error.text || 'Error sending email'
                });
            });
    };

    return (
        <section id="contact" style={{
            padding: isMobile ? '30px 0' : '50px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <motion.div
                className="row section-head"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <div className={isMobile ? "twelve columns" : "two columns header-col"} style={{
                    textAlign: 'center',
                    marginBottom: isMobile ? '15px' : '0'
                }}>
                    <h1 style={{ fontSize: isMobile ? '24px' : '28px' }}>
                        <span>Get In Touch.</span>
                    </h1>
                </div>

                <div className={isMobile ? "twelve columns" : "ten columns"} style={{ textAlign: 'center' }}>
                    <p className="lead" style={{ fontSize: isMobile ? '16px' : '18px' }}>{data.contactmessage}</p>
                </div>
            </motion.div>

            <div className="row" style={{
                flexDirection: isMobile ? 'column' : 'row',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <motion.div
                    className={isMobile ? "twelve columns" : "eight columns"}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <form ref={contactRef} id="contactForm" name="contactForm" onSubmit={sendEmail} style={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '600px'
                    }}>
                        <fieldset>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="contactName" style={{
                                    fontSize: isMobile ? '14px' : '16px',
                                    display: 'block',
                                    marginBottom: '5px',
                                    textAlign: 'left'
                                }}>
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size={isMobile ? 25 : 35}
                                    id="contactName"
                                    name="contactName"
                                    style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        padding: isMobile ? '8px' : '10px',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="contactEmail" style={{
                                    fontSize: isMobile ? '14px' : '16px',
                                    display: 'block',
                                    marginBottom: '5px',
                                    textAlign: 'left'
                                }}>
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size={isMobile ? 25 : 35}
                                    id="contactEmail"
                                    name="contactEmail"
                                    style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        padding: isMobile ? '8px' : '10px',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="contactSubject" style={{
                                    fontSize: isMobile ? '14px' : '16px',
                                    display: 'block',
                                    marginBottom: '5px',
                                    textAlign: 'left'
                                }}>
                                    Subject <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size={isMobile ? 25 : 35}
                                    id="contactSubject"
                                    name="contactSubject"
                                    style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        padding: isMobile ? '8px' : '10px',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="contactMessage" style={{
                                    fontSize: isMobile ? '14px' : '16px',
                                    display: 'block',
                                    marginBottom: '5px',
                                    textAlign: 'left'
                                }}>
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    cols={isMobile ? 30 : 50}
                                    rows={isMobile ? 10 : 15}
                                    id="contactMessage"
                                    name="contactMessage"
                                    style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        padding: isMobile ? '8px' : '10px',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                ></textarea>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <button
                                    className="submit"
                                    style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        padding: isMobile ? '8px 16px' : '10px 20px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Submit
                                </button>
                                <span id="image-loader" style={{ display: formStatus.loading ? 'inline-block' : 'none' }}>
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning" style={{
                        display: formStatus.error ? 'block' : 'none',
                        fontSize: isMobile ? '14px' : '16px',
                        padding: isMobile ? '10px' : '15px',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '15px'
                    }}>
                        <i className="fa fa-warning"></i>{formStatus.error}
                    </div>
                    <div id="message-success" style={{
                        display: formStatus.success ? 'block' : 'none',
                        fontSize: isMobile ? '14px' : '16px',
                        padding: isMobile ? '10px' : '15px',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '15px'
                    }}>
                        <i className="fa fa-check"></i>Your message was sent, i will be in touch soon!
                    </div>
                </motion.div>

                <motion.aside
                    className={isMobile ? "twelve columns" : "four columns footer-widgets"}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        marginTop: isMobile ? '30px' : '0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <div className="widget widget_contact" style={{
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '300px'
                    }}>
                        <h4 style={{ fontSize: isMobile ? '18px' : '20px' }}>Address, Phone and Email</h4>
                        <p className="address" style={{
                            fontSize: isMobile ? '14px' : '16px',
                            margin: '0 auto'
                        }}>
                            {data.address.street} <br />
                            {data.address.city}, {data.address.zip}
                            <br />
                            <span>{data.phone}</span>
                            <br />
                            <span>{data.email}</span>
                        </p>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}

export default Contact; 