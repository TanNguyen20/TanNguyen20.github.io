import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
    const [resumeData, setResumeData] = useState<any>({} as any);
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
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '20px'
            }}>
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: 'red',
                fontSize: '20px'
            }}>
                Error: {error}
            </div>
        );
    }

    return (
        <div className="App">
            <Header data={resumeData.main} />
            <About />
            <Footer data={resumeData.main} />
        </div>
    );
}

export default App;
