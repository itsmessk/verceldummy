import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "./css/Services.css";

const serviceItems = [
    { id: 1, title: "Advanced Vulnerability Detection", image: "./assets/scroll-1.png", content: "Comprehensive Coverage: The tool identifies various vulnerabilities, from basic misconfigurations to complex logic flaws, across Web 2.0 and emerging Web 3.0 platforms. <br> Common Vulnerabilities: Automated checks for OWASP Top 10 vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). ", backgroundColor: "#85EBF9" },
    { id: 2, title: "Real-time Vulnerability Remediation ", image: "./assets/scroll-2.jfif", content: "Instant Alerts: Detects vulnerabilities in real-time, providing instant notifications when critical issues are identified. <br> Suggested Fixes: Offers detailed remediation advice for every detected vulnerability, empowering developers to address security flaws quickly and efficiently. ", backgroundColor: "#FFCE83" },
    { id: 3, title: "Comprehensive Reporting ", image: "./assets/scroll-3.jfif", content: "Modular Architecture: Infoziant DAST is built with a modular framework, allowing users to customize scans based on their unique application structure.  <br> Scalable Performance: Suitable for small to large organizations, providing robust performance for applications of any size.  ", backgroundColor: "#B8FE97" },
    { id: 4, title: "Scalability and Customizability ", image: "./assets/scroll-4.jfif", content: "API security is essential in today’s digital landscape, as weaknesses can result in data breaches and unauthorized access. Our VAPT services identify potential vulnerabilities early, allowing you to prevent threats and uphold system integrity. We thoroughly test for authentication flaws, sensitive data exposure, and API misuse to ensure compliance with industry standards. With our proactive approach, we help safeguard your APIs and protect your operations from breaches.", backgroundColor: "#77E9F8" },
    { id: 5, title: "Real-Time Dashboards and Analytics ", image: "./assets/scroll-5.jfif", content: "Visual Insights: A user-friendly dashboard delivers real-time insights into the security posture of your applications, highlighting trends, vulnerabilities, and overall risk.  <br> Actionable Analytics: Track vulnerabilities over time, assess remediation effectiveness, and prioritize critical fixes using data-driven insights. ", backgroundColor: "#FFC300" },
];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const servicesRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < serviceItems.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : serviceItems.length - 1));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.2 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    return (
        <>
            <motion.section
                ref={servicesRef}
                className="services-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h1>Empowering <span className="highlight">Smart Contract Security</span> with Cutting-Edge Features</h1>
                <p className="services-p">Our AI powered tool is packed with a diverse set of robust features designed to cater the unique requirements of Smart Contract Vulnerability Detection across organizations of all sizes in the web3 ecosystem.</p>
                <br />

                <div className="services-container">
                    <button className="arrow-btn left-btn" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>



                    <img
                        className="slide-img"
                        src={serviceItems[currentIndex].image}
                        alt={serviceItems[currentIndex].title}
                    />

                    <div className="vertical-line">
                        <span
                            className="item-id"
                            style={{
                                backgroundColor: serviceItems[currentIndex].backgroundColor,
                            }}
                        >
                            {serviceItems[currentIndex].id}
                        </span>
                    </div>

                    <motion.div
                        className="service-text"
                        key={serviceItems[currentIndex].id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <h3>{serviceItems[currentIndex].title}</h3>
                        <p>{serviceItems[currentIndex].content}</p>
                    </motion.div>

                    <button className="arrow-btn right-btn" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </motion.section>

            {/* services mobile view */}
            <section className="services-section-mobile">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false }}
                >
                    Empowering <span className="highlight">Smart Contract Security</span> with Cutting-Edge Features
                </motion.h1>

                <motion.p
                    className="services-p"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Our AI powered tool is packed with a diverse set of robust features designed to cater the unique requirements of Smart Contract Vulnerability Detection across organizations of all sizes in the web3 ecosystem.
                </motion.p>

                <br />

                <ul>
                    {serviceItems.map((service, index) => (
                        <motion.li
                            key={service.id}
                            className="service-li-m"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }} // Delay for cascading effect
                            viewport={{ once: false }}
                        >
                            <img className="service-img-m" src={service.image} alt={service.id} />
                            <br />
                            <h1>{service.title}</h1>
                            <p>{service.content}</p>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </>
    );
}
