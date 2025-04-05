import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface ContactProps {
    data: {
        name: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            state: string;
            zip: string;
        };
        contactmessage: string;
    };
}

function Contact({ data }: ContactProps) {
    const contactRef = useRef<HTMLFormElement>(null);
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
        <section id="contact">
            <motion.div
                className="row section-head"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="two columns header-col">
                    <h1>
                        <span>Get In Touch.</span>
                    </h1>
                </div>

                <div className="ten columns">
                    <p className="lead">{data.contactmessage}</p>
                </div>
            </motion.div>

            <div className="row">
                <motion.div
                    className="eight columns"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <form ref={contactRef} id="contactForm" name="contactForm" onSubmit={sendEmail}>
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size={35}
                                    id="contactName"
                                    name="contactName"
                                />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size={35}
                                    id="contactEmail"
                                    name="contactEmail"
                                />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">
                                    Subject <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue=""
                                    size={35}
                                    id="contactSubject"
                                    name="contactSubject"
                                />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    cols={50}
                                    rows={15}
                                    id="contactMessage"
                                    name="contactMessage"
                                ></textarea>
                            </div>

                            <div>
                                <button className="submit">Submit</button>
                                <span id="image-loader" style={{ display: formStatus.loading ? 'inline-block' : 'none' }}>
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning" style={{ display: formStatus.error ? 'block' : 'none' }}>
                        <i className="fa fa-warning"></i>{formStatus.error}
                    </div>
                    <div id="message-success" style={{ display: formStatus.success ? 'block' : 'none' }}>
                        <i className="fa fa-check"></i>Your message was sent, i will be in touch soon!
                    </div>
                </motion.div>

                <motion.aside
                    className="four columns footer-widgets"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="widget widget_contact">
                        <h4>Address, Phone and Email</h4>
                        <p className="address">
                            {data.address.street} <br />
                            {data.address.city}, {data.address.state} {data.address.zip}
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