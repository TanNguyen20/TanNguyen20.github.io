import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";

interface ResumeData {
    main: {
        name: string;
        occupation: string;
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
            state: string;
            zip: string;
        };
        website: string;
        social: Array<{
            name: string;
            url: string;
            className: string;
        }>;
    };
    resume: {
        skillmessage: string;
        education: Array<{
            school: string;
            degree: string;
            graduated: string;
            description: string;
            image: string;
        }>;
        work: Array<{
            company: string;
            title: string;
            years: string;
            description: string;
            image: string;
        }>;
        skills: Array<{
            name: string;
            level: string;
        }>;
    };
    portfolio: {
        projects: Array<{
            title: string;
            name: string;
            category: string;
            image: string;
            technologies: string;
            url: string;
            description: string;
        }>;
    };
}

function App() {
    const [resumeData, setResumeData] = useState<ResumeData>({} as ResumeData);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ReactGA.initialize("UA-110570651-1");
        ReactGA.pageview(window.location.pathname);
        getResumeData();
    }, []);

    const getResumeData = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await fetch("resumeData.json");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setResumeData(data);
            setError(null);
        } catch (err) {
            console.error("Error fetching resume data:", err);
            setError(err instanceof Error ? err.message : "Failed to load resume data");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        Object.keys(resumeData).length > 0 && <div className="App">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
        </div>
    );
}

export default App; 