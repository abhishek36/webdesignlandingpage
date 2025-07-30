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

    // New style for price highlight card in details section
    priceCardHighlight: {
      background: "linear-gradient(135deg, #ff6a00, #ee0979)",
      color: "white",
      padding: "45px 35px",
      borderRadius: "25px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 0 20px 5px rgba(238, 9, 121, 0.7)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    priceCardHighlightHover: {
      transform: "scale(1.05)",
      boxShadow: "0 0 30px 10px rgba(255, 106, 0, 0.9)",
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
      color: "#000",
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

    // Footer Styles
    footer: {
      background: "#2c3e50",
      color: "white",
      padding: "20px 2rem",
      textAlign: "center",
      fontSize: "0.9rem",
      marginTop: "40px",
    },

    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    footerLink: {
      color: "#f39c12",
      textDecoration: "none",
      margin: "0 5px",
      transition: "color 0.3s ease",
    },

    // Responsive styles
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
    { name: "HTML5", description: "Modern markup", logo: "/html.png" },
    { name: "CSS3", description: "Advanced styling", logo: "/css.png" },
    {
      name: "JavaScript",
      description: "Interactive functionality",
      logo: "/js.png",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first framework",
      logo: "/tailwind.png",
    },
    {
      name: "Bootstrap",
      description: "Responsive design",
      logo: "/bootstrap.png",
    },
    { name: "React.js", description: "Modern web apps", logo: "/react.png" },
  ];

  const detailsData = [
    {
      icon: "📅",
      title: "Course Duration",
      content: (
        <>
          <strong>🔥 3 Months of Transformative Training</strong>
          <br />
          <span style={{ color: "#ffd700" }}>Next Batch Starting:</span>{" "}
          <strong>September 1, 2025</strong>
          <br />
          <span style={{ fontSize: "0.9em", opacity: 0.9 }}>
            ⚡ Intensive 5-Day Program (Mon-Fri)
            <br />
            🎯 2 Hours/Day of Focused Learning
            <br />
            🌟 24/7 Online Access to Resources
          </span>
        </>
      ),
    },
    {
      icon: "💻",
      title: "Class Format",
      content: (
        <>
          <strong>🌟 Premium 2025 Learning Experience</strong>
          <br />
          🎯 Live Interactive Masterclasses
          <br />
          💻 Real-time Code-Along Sessions
          <br />
          🎥 HD Recordings for Lifetime Access
          <br />
          🤝 Peer Learning & Group Projects
          <br />
          🎮 Gamified Learning Challenges
        </>
      ),
    },
    {
      icon: "🎯",
      title: "What You'll Build",
      content: (
        <>
          <strong>🚀 Build Real-World Projects:</strong>
          <br />
          🛍️ Dynamic E-commerce Platforms
          <br />
          ✨ Stunning Portfolio Websites
          <br />
          ⚛️ Modern React Applications
          <br />
          📱 Mobile-First Responsive Designs
          <br />
          🎨 Interactive UI/UX Projects
          <br />
          🌐 Full-Stack Web Applications
        </>
      ),
    },
    {
      icon: "❓",
      title: "Q&A Support",
      content: (
        <>
          <strong>🌟 Premium Support Sessions</strong>
          <br />
          🔍 Deep-Dive Doubt Resolution
          <br />
          👨‍🏫 Personalized Mentoring Sessions
          <br />
          💡 Expert Project Feedback
          <br />
          ⚡ Live Code Reviews
          <br />
          🎯 Career Path Guidance
          <br />
          🤝 Network with Industry Pros
        </>
      ),
    },
    {
      icon: "📋",
      title: "Requirements",
      content: (
        <>
          <strong>🎯 Your Success Toolkit:</strong>
          <br />
          💻 Basic computer skills - If you can browse the web, you're ready!
          <br />
          🌐 Reliable internet - For smooth live sessions
          <br />
          🔥 Passion to create - Your most important asset
          <br />
          ✨ Growth mindset - We'll teach you everything else
          <br />
          🚀 Zero coding experience? Perfect! Start fresh with us!
        </>
      ),
    },
    {
      icon: "💎",
      title: "Course Price",
      content: (
        <>
          <strong>🔥 Unbeatable Value!</strong>
          <br />
          <span style={{ textDecoration: "line-through", opacity: 0.7 }}>
            Industry Standard: ₹15,000-25,000
          </span>
          <br />
          <div
            style={{
              fontSize: "1.4em",
              color: "#ffd700",
              margin: "10px 0",
            }}
          >
            <strong>Your Investment: Just ₹4,999! 🎉</strong>
          </div>
          <span style={{ fontSize: "0.9em" }}>
            ⚡ Save up to 80% compared to other courses
            <br />
            💎 Premium quality at the most competitive price
            <br />⏰ Limited time offer - Don't miss out!
          </span>
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
          <h1 style={styles.heroTitle} className="heroTitle">
            Master AI-Powered Web Design in 2025
          </h1>
          <p style={styles.heroText}>
            Join our AI-enhanced bootcamp and master cutting-edge skills that
            Fortune 500 companies are actively seeking. Learn to build stunning
            websites with AI tools, create intelligent user experiences, and
            become a next-gen web designer!
          </p>
          <div style={styles.priceHighlight} className="price_highlight">
            🚀 Limited Seats Available - Next AI-Powered Batch Starting Soon!
          </div>
          <p
            style={{
              ...styles.heroText,
              fontSize: "1.1rem",
              marginTop: "20px",
            }}
          >
            🤖 AI-Enhanced Learning | 🎯 Real-World Projects | 💼 ML-Powered Job
            Matching | 🌟 Industry Experts
          </p>
          <p
            style={{
              ...styles.heroText,
              fontSize: "0.9rem",
              marginTop: "10px",
              opacity: 0.8,
            }}
          >
            Featuring: ChatGPT Integration | Figma AI | GitHub Copilot | AI
            Design Tools
          </p>
        </div>
      </section>

      {/* Why Learn Section */}
      <section style={{ ...styles.section, ...styles.whiteSection }}>
        <div>
          <h2 style={styles.sectionTitle} className="sectiontitle">
            Why Learn Web Design in 2025?
          </h2>
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
          <h2 style={styles.sectionTitle} className="sectiontitle">
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
                <img src={tech.logo} alt="" style={{ marginBottom: "5px" }} />
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
          <h2 style={styles.sectionTitle} className="sectiontitle">
            Course Details & What You'll Get
          </h2>
          <div style={{ ...styles.grid, ...styles.detailsGrid }}>
            {detailsData.map((detail, index) => (
              <div
                key={index}
                data-animate
                id={`detail-${index}`}
                style={
                  index === detailsData.length - 1
                    ? styles.priceCardHighlight
                    : styles.detailCard
                }
                onMouseOver={(e) => {
                  if (index === detailsData.length - 1) {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 0 30px 10px rgba(255, 106, 0, 0.9)";
                  }
                }}
                onMouseOut={(e) => {
                  if (index === detailsData.length - 1) {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px 5px rgba(238, 9, 121, 0.7)";
                  }
                }}
              >
                <h3>
                  {detail.icon} {detail.title}
                </h3>
                <p>{detail.content}</p>
                {index === detailsData.length - 1 && (
                  <div
                    style={{
                      marginTop: "20px",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#fff3cd",
                      textShadow: "0 0 10px #ffb347",
                      animation: "pulse 2s infinite",
                    }}
                  >
                    🎉 Enroll now and save big! Limited time offer! 🎉
                  </div>
                )}
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
          <h2
            style={{
              ...styles.sectionTitle,
              fontSize: "3rem",
              background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="sectiontitle"
          >
            🚀 Transform Your Future with Web Design
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.4rem",
              marginBottom: "2rem",
              color: "#FFD93D",
            }}
          >
            ⭐ Only 10 Spots Left for September 2025 Batch! ⭐
          </p>

          <div
            style={{
              ...styles.formContainer,
              background: "rgba(255,255,255,0.15)",
            }}
            className="form_container"
          >
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span
                style={{
                  background: "#FF6B6B",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
                className="earlybirdtext"
              >
                🎁 Early Bird Bonus: Free UI/UX Design Course Worth ₹2,999
              </span>
            </div>

            <form
              onSubmit={handleFormSubmit}
              autoComplete="on"
              aria-label="Enrollment Form"
            >
              {formError && (
                <div
                  style={{
                    color: "#FF6B6B",
                    marginBottom: "15px",
                    textAlign: "center",
                    background: "rgba(255,107,107,0.1)",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                  role="alert"
                >
                  ⚠️ {formError}
                </div>
              )}
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: "#4ECDC4" }}>
                  👤 Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    ...styles.input,
                    border: "2px solid rgba(78,205,196,0.3)",
                  }}
                  required
                  autoComplete="name"
                  aria-label="Full Name"
                  placeholder="Enter your full name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: "#4ECDC4" }}>
                  ✉️ Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    ...styles.input,
                    border: "2px solid rgba(78,205,196,0.3)",
                  }}
                  required
                  autoComplete="email"
                  aria-label="Email Address"
                  placeholder="Enter your email"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: "#4ECDC4" }}>
                  📱 Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    ...styles.input,
                    border: "2px solid rgba(78,205,196,0.3)",
                  }}
                  required
                  autoComplete="tel"
                  aria-label="Phone Number"
                  placeholder="Enter your phone number"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: "#4ECDC4" }}>
                  🎯 Your Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  style={{
                    ...styles.input,
                    border: "2px solid rgba(78,205,196,0.3)",
                  }}
                  aria-label="Current Experience Level"
                >
                  <option value="beginner">
                    👶 Complete Beginner - Starting Fresh!
                  </option>
                  <option value="some">
                    🌱 Some HTML/CSS - Ready to Level Up
                  </option>
                  <option value="intermediate">
                    💪 Basic Web Dev - Going Professional
                  </option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: "#4ECDC4" }}>
                  💭 Share Your Dreams (Optional)
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  style={{
                    ...styles.textarea,
                    border: "2px solid rgba(78,205,196,0.3)",
                  }}
                  placeholder="Tell us your career goals and dreams..."
                  autoComplete="off"
                  aria-label="Career Goals"
                />
              </div>
              <button
                type="submit"
                style={{
                  ...styles.submitBtn,
                  background: "linear-gradient(45deg, #FF6B6B, #FFD93D)",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(255,107,107,0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
                aria-label="Submit Enrollment Form"
              >
                🎉 Start Your Journey Now!
              </button>
              {formSuccess && (
                <div
                  style={{
                    color: "#4ECDC4",
                    marginTop: "20px",
                    textAlign: "center",
                    background: "rgba(78,205,196,0.1)",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                  role="status"
                >
                  🎊 {formSuccess}
                </div>
              )}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "25px",
                  padding: "15px",
                  background: "rgba(255,217,61,0.1)",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    color: "#FFD93D",
                    fontSize: "1rem",
                    marginBottom: "5px",
                  }}
                >
                  🔥 Only 10 Seats Remaining!
                </p>
                <p style={{ color: "#fff", fontSize: "0.9rem", opacity: 0.8 }}>
                  Early birds get exclusive 1-on-1 mentoring sessions
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>© 2025 WebDesign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebDesignCourse;
