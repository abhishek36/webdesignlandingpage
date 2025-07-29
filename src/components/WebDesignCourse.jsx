import React, { useState, useEffect } from "react";

const WebDesignCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "beginner",
    goals: "",
  });

  const [isVisible, setIsVisible] = useState({});
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError("Please fill in all required fields!");
      return;
    }
    // Prepare WhatsApp message
    const message = `🎓 NEW COURSE ENROLLMENT 🎓\n\n📋 STUDENT DETAILS:\n👤 Name: ${
      formData.name
    }\n📧 Email: ${formData.email}\n📱 Phone: ${
      formData.phone
    }\n🎯 Experience: ${formData.experience}\n💭 Goals: ${
      formData.goals || "Not specified"
    }\n\n🕒 Submitted: ${new Date().toLocaleString()}\n\nPlease contact this student for enrollment process!`;
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = "918989551553"; // Replace with your WhatsApp number
    // Create WhatsApp URL with proper line breaks
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )
      .replace(/%0A/g, "%0A")
      .replace(/%5Cn/g, "%0A")}`;
    // Open WhatsApp
    window.open(whatsappURL, "_blank");
    // Show success message
    setFormSuccess(
      "🎉 Congratulations! Your enrollment form has been submitted successfully! You will be redirected to WhatsApp to send us your details. We will contact you within 24 hours with payment details and course materials. Get ready to start your web design journey on February 15, 2025!"
    );
    console.log(message);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "beginner",
      goals: "",
    });
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
      margin: 0,
      padding: 0,
    },

    // Header Styles
    header: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
    },

    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },

    logo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#667eea",
    },

    ctaBtn: {
      background: "linear-gradient(45deg, #667eea, #764ba2)",
      color: "white",
      padding: "12px 24px",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },

    // Hero Styles
    hero: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "120px 2rem 80px",
      textAlign: "center",
      color: "white",
      position: "relative",
      overflow: "hidden",
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
      margin: "0 auto",
    },

    heroTitle: {
      fontSize: "3.5rem",
      marginBottom: "1rem",
      animation: "fadeInUp 1s ease",
    },

    heroText: {
      fontSize: "1.3rem",
      marginBottom: "2rem",
      opacity: 0.9,
    },

    priceHighlight: {
      background: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      display: "inline-block",
      padding: "15px 30px",
      borderRadius: "50px",
      margin: "20px 0",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },

    // Section Styles
    section: {
      padding: "80px 2rem",
    },

    whiteSection: {
      background: "white",
    },

    gradientSection: {
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white",
    },

    darkSection: {
      background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
      color: "white",
    },

    sectionTitle: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "3rem",
      color: "inherit",
    },

    // Grid Styles
    grid: {
      display: "grid",
      gap: "30px",
      marginTop: "50px",
      maxWidth: "1200px",
      margin: "50px auto 0",
    },

    reasonsGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },

    techGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    },

    detailsGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "40px",
    },

    // Card Styles
    reasonCard: {
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
      overflow: "hidden",
      borderTop: "4px solid #667eea",
    },

    techItem: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      padding: "30px 20px",
      borderRadius: "15px",
      textAlign: "center",
      transition: "all 0.3s ease",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },

    detailCard: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "40px 30px",
      borderRadius: "20px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },

    reasonIcon: {
      fontSize: "3rem",
      marginBottom: "20px",
    },

    // Form Styles
    formContainer: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      padding: "50px",
      borderRadius: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },

    formGroup: {
      marginBottom: "25px",
      textAlign: "left",
    },

    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
    },

    input: {
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.9)",
      fontSize: "1rem",
      boxSizing: "border-box",
    },

    textarea: {
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.9)",
      fontSize: "1rem",
      height: "100px",
      resize: "vertical",
      boxSizing: "border-box",
    },

    submitBtn: {
      background: "linear-gradient(45deg, #e74c3c, #f39c12)",
      color: "white",
      padding: "15px 40px",
      border: "none",
      borderRadius: "25px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      width: "100%",
      transition: "all 0.3s ease",
    },

    // Responsive styles
    "@media (max-width: 768px)": {
      heroTitle: {
        fontSize: "2.5rem",
      },
      heroText: {
        fontSize: "1.1rem",
      },
      formContainer: {
        padding: "30px 20px",
      },
    },
  };

  const reasonsData = [
    {
      icon: "💼",
      title: "High-Demand Career",
      description:
        "Web designers are in huge demand with salaries ranging from ₹3-12 LPA. Every business needs a website in 2025!",
    },
    {
      icon: "🚀",
      title: "Future-Proof Skills",
      description:
        "Learn cutting-edge technologies like React, Tailwind CSS, and modern JavaScript that companies are actively seeking.",
    },
    {
      icon: "💡",
      title: "Creative Freedom",
      description:
        "Express your creativity while building functional, beautiful websites. Work as a freelancer or join top companies.",
    },
    {
      icon: "🌐",
      title: "Remote Work Ready",
      description:
        "Web design skills allow you to work from anywhere in the world. Perfect for the digital nomad lifestyle!",
    },
    {
      icon: "⚡",
      title: "Quick Learning Curve",
      description:
        "Start building real websites within weeks. Our structured approach gets you job-ready fast!",
    },
    {
      icon: "💰",
      title: "Multiple Income Streams",
      description:
        "Freelancing, full-time jobs, creating themes, teaching - countless ways to monetize your skills.",
    },
  ];

  const techData = [
    { name: "HTML5", description: "Modern markup" },
    { name: "CSS3", description: "Advanced styling" },
    { name: "JavaScript", description: "Interactive functionality" },
    { name: "Tailwind CSS", description: "Utility-first framework" },
    { name: "Bootstrap", description: "Responsive design" },
    { name: "React.js", description: "Modern web apps" },
  ];

  const detailsData = [
    {
      icon: "📅",
      title: "Course Duration",
      content: (
        <>
          <strong>8 Weeks Intensive Training</strong>
          <br />
          Classes start: <strong>February 15, 2025</strong>
          <br />
          5 Days a week (Mon-Fri)
          <br />2 hours daily
        </>
      ),
    },
    {
      icon: "💻",
      title: "Class Format",
      content: (
        <>
          <strong>Live Online Classes via Google Meet</strong>
          <br />
          Interactive sessions
          <br />
          Screen sharing & live coding
          <br />
          Recorded for revision
        </>
      ),
    },
    {
      icon: "🎯",
      title: "What You'll Build",
      content: (
        <>
          <strong>Industry-Level Projects:</strong>
          <br />
          E-commerce websites
          <br />
          Portfolio sites
          <br />
          React applications
          <br />
          Responsive designs
        </>
      ),
    },
    {
      icon: "❓",
      title: "Q&A Support",
      content: (
        <>
          <strong>Saturday Doubt Sessions</strong>
          <br />
          Clear all your doubts
          <br />
          One-on-one guidance
          <br />
          Project reviews
        </>
      ),
    },
    {
      icon: "📋",
      title: "Requirements",
      content: (
        <>
          <strong>What You Need:</strong>
          <br />
          Basic computer knowledge
          <br />
          Good internet connection
          <br />
          Eagerness to learn
          <br />
          No prior coding experience needed!
        </>
      ),
    },
    {
      icon: "💎",
      title: "Course Price",
      content: (
        <>
          <strong>Market Comparison:</strong>
          <br />
          Other courses: ₹15,000-25,000
          <br />
          <strong>Our price: ₹4,999 only!</strong>
          <br />
          Most affordable in the market
        </>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>WebDesign</div>
          <button
            style={styles.ctaBtn}
            onClick={() => scrollToSection("enrollment")}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
            }}
          >
            Enroll Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Master Web Design in 2025</h1>
          <p style={styles.heroText}>
            Transform your career with industry-level skills in HTML5, CSS3,
            JavaScript, React, and more!
          </p>
          <div style={styles.priceHighlight}>
            🎯 Most Affordable Course in the Market - ₹4,999 Only!
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section style={{ ...styles.section, ...styles.whiteSection }}>
        <div>
          <h2 style={styles.sectionTitle}>Why Learn Web Design in 2025?</h2>
          <div style={{ ...styles.grid, ...styles.reasonsGrid }}>
            {reasonsData.map((reason, index) => (
              <div
                key={index}
                data-animate
                id={`reason-${index}`}
                style={styles.reasonCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={styles.reasonIcon}>{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ ...styles.section, ...styles.gradientSection }}>
        <div>
          <h2 style={styles.sectionTitle}>
            Master These In-Demand Technologies
          </h2>
          <div style={{ ...styles.grid, ...styles.techGrid }}>
            {techData.map((tech, index) => (
              <div
                key={index}
                data-animate
                id={`tech-${index}`}
                style={styles.techItem}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  {tech.name}
                </h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section style={{ ...styles.section, ...styles.whiteSection }}>
        <div>
          <h2 style={styles.sectionTitle}>Course Details & What You'll Get</h2>
          <div style={{ ...styles.grid, ...styles.detailsGrid }}>
            {detailsData.map((detail, index) => (
              <div
                key={index}
                data-animate
                id={`detail-${index}`}
                style={styles.detailCard}
              >
                <h3>
                  {detail.icon} {detail.title}
                </h3>
                <p>{detail.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section
        id="enrollment"
        style={{ ...styles.section, ...styles.darkSection }}
      >
        <div>
          <h2 style={styles.sectionTitle}>
            Ready to Start Your Web Design Journey?
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginBottom: "3rem",
            }}
          >
            Fill out the form below and secure your spot in our February 2025
            batch!
          </p>

          <div style={styles.formContainer}>
            <form
              onSubmit={handleFormSubmit}
              autoComplete="on"
              aria-label="Enrollment Form"
            >
              {formError && (
                <div
                  style={{
                    color: "#e74c3c",
                    marginBottom: "15px",
                    textAlign: "center",
                  }}
                  role="alert"
                >
                  {formError}
                </div>
              )}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  autoComplete="name"
                  aria-label="Full Name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  autoComplete="email"
                  aria-label="Email Address"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  autoComplete="tel"
                  aria-label="Phone Number"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="experience">
                  Current Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  style={styles.input}
                  aria-label="Current Experience Level"
                >
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some HTML/CSS Knowledge</option>
                  <option value="intermediate">Basic Web Development</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="goals">
                  What are your career goals? (Optional)
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="e.g., Get a job as web developer, start freelancing, build my own projects..."
                  autoComplete="off"
                  aria-label="Career Goals"
                />
              </div>
              <button
                type="submit"
                style={styles.submitBtn}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(231, 76, 60, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
                aria-label="Submit Enrollment Form"
              >
                🚀 Enroll Now - Secure Your Spot!
              </button>
              {formSuccess && (
                <div
                  style={{
                    color: "#27ae60",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                  role="status"
                >
                  {formSuccess}
                </div>
              )}
              <p
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "0.9rem",
                  opacity: 0.8,
                }}
              >
                Limited seats available. Early bird gets the best support!
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignCourse;
