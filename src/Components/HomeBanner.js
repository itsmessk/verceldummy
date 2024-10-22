import Navbar from "./Navbar";
import { motion } from "framer-motion";
import "./css/HomeBanner.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TestimonialSlider from "./Testimonials";
import QuickScan from "./QuickScan";
import Services from "./Services";
import Footer from "./Footer";
import WhyInfoziant from "./WhyInfoziant";
import Partnership from "./Partnership";
import InquiryForm from "./InquiryForm";

export default function HomeBanner() {
  // intersection observer start
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Animation variants for the list items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  // intersection observer end

  const words = ["Cybersecurity...", "Scanning...", "Vulnerabilities..."];
  const imgWords = ["1.Discover & Crawl","2.Assess","3.Detect Risk","4.Resolve","5.Continuously secure"];
  const images = ["./assets/scan-gif-1.gif","./assets/scan-gif-2.gif","./assets/scan-gif-3.gif","./assets/scan-gif-4.gif","./assets/scan-gif-5.gif"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [scanningLine, setScanningLine] = useState(true);
  const [progressLoader, setProgressLoader] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
      setIsFormOpen(!isFormOpen); // Toggle form visibility
    };

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const textLength = displayedText.length;

      if (!isDeleting && textLength === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && textLength === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      const nextText = isDeleting
        ? currentWord.slice(0, textLength - 1)
        : currentWord.slice(0, textLength + 1);

      setDisplayedText(nextText);
      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex]);

  //  image scanning
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % imgWords.length;

        if (newIndex === 4) {
          setScanningLine(false);
          setProgressLoader(false);
        } else {
          setScanningLine(true);
          setProgressLoader(true);
        }

        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <Navbar />
      <section className="homeBanner-main">
      
        <ul className="home-ul">
          {/* home banner intro */}
          <motion.li
            className="banner-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              className="discount"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            >
              <b>20%</b> Discount On VAPT Services for New Clients!
            </motion.p>

            <motion.h1
              className="typing-anm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              Leading the Next Era in <br />
              <div>
                <h3 className="highlight">
                  {displayedText}
                  <span className="span-highlight">|</span>
                </h3>
              </div>
            </motion.h1>
            <br />
            <motion.p
              className="banner-p"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              Our team of cybersecurity experts utilizes advanced methodologies
              to assess
              <br />
              and protect your digital assets, ensuring top-tier security
              against potential threats. Explore our <br />
              range of services, including VAPT, security testing, and more.
            </motion.p>
            <br />
            <motion.button
        className="gs-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleForm}  // Show form when clicked
      >
        Get Started
      </motion.button>
          </motion.li>

          {/* image animation starts */}

          <li className="anm-img">
            <motion.div
              className="img-animation"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="border-container">
                {/* Scanning Line */}
                <motion.div
                  className={
                    scanningLine ? "scanning-line" : "hideScanningLine"
                  }
                  // className="scanning-line"
                  initial={{ y: -100 }}
                  animate={scanningLine ? { y: 100 } : {}}
                  transition={{
                    delay: 1,
                    duration: 1.5,
                    repeat: scanningLine ? Infinity : 0,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />

                <div className="neon-corner top-left animate__animated animate__fadeInTopLeft animate__slow"></div>
                <div className="neon-corner top-right animate__animated animate__fadeInTopRight animate__slow"></div>
                <div className="neon-corner bottom-left animate__animated animate__fadeInBottomLeft animate__slow"></div>
                <div className="neon-corner bottom-right animate__animated animate__fadeInBottomRight animate__slow"></div>

                <div className="container">
                  {/* First Box */}
                  <motion.div
                    className="box box1"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {/* Second Box */}
                    <motion.div
                      className="box box2"
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Third Box */}
                      <motion.div
                        className="box box3"
                        initial={{ y: -150 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                      >
                        {/* Animated Text */}
                        <img
                          className="scan-img"
                          src={images[currentIndex]}
                          alt={imgWords[currentIndex]}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* progress */}
                  <ul className="helo">
                    <li>{imgWords[currentIndex]}</li>
                    <li>
                      <div
                        className={
                          progressLoader
                            ? "loader-container"
                            : "stopProgressLoader"
                        }
                      >
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </li>
          {/* image animation ends */}
        </ul>
        {/* functionalities starts */}
        <ul className="func" ref={ref5}>
          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src="./ai-scan.png" className="func-img" /><br />
            <h3>AI Powered Scanning</h3>
          </motion.li>

          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="./seamless_integrations.png" className="func-img" /><br />
            <h3>Seamless Integrations</h3>
          </motion.li>

          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img src="./vulnerability_detectors.png" className="func-img" /><br />
            <h3>274+ Vulnerability Detectors</h3>
          </motion.li>

          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <img src="./audit_report.png" className="func-img" /><br />
            <h3>Generate Audit Reports</h3>
          </motion.li>
        </ul>
        {/* functionalities ends */}
      </section>

      <QuickScan />

      {/* why infoziant section starts */}

      <WhyInfoziant />

      {/* why infoziant section ends */}

    



      {/* Counting element starts */}
      {/* <div className="counting-main">
          <CountingElement number={45} text="Clients Protected" delay={50} />
          <CountingElement
            number={78}
            text="Global Recognition Security Testing"
            delay={40}
          />
          <CountingElement
            number={26}
            text="Vulnerabilities Discovered"
            delay={20}
            suffix="K"
          />
          <CountingElement number={50} text="Security Researchers | Consultants" delay={50} />
        </div> */}
      {/* counting element ends */}

      {/* Partnership */}
      <Partnership/>

      <Services />
     
      <TestimonialSlider />

      {/* <HomeVideo/> */}

      <Footer />
      {isFormOpen && <InquiryForm closeModal={toggleForm} />}

    </>
  );
}
