import { motion } from "framer-motion";

interface AboutProps {
    data: {
        name: string;
        description: string;
        image: string;
        bio: string;
        careerObjective: string;
        contactmessage: string;
        email: string;
        phone: string;
        github: string;
        facebook: string;
        address: {
            street: string;
            city: string;
            zip: string;
        };
        website: string;
        social: Array<{
            name: string;
            url: string;
            className: string;
        }>;
    };
}

function About({ data }: AboutProps) {
    return (
        <section id="about">
            <motion.div
                className="row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={`images/${data.image}`}
                        alt="Nordic Giant Profile Pic"
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{data.bio}</p>

                    <h2>Executive Sumary & Career Objective</h2>
                    <p>{data.careerObjective}</p>

                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>
                                    {data.address.street}
                                    <br />
                                    {data.address.city}, {data.address.zip}
                                </span>
                                <br />
                                <span>{data.phone}</span>
                                <br />
                                <span>{data.email}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default About; 