import { useState, useEffect } from 'react'
import './App.css'
import useScrollAnimation from './hooks/useScrollAnimation'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showContactInfo, setShowContactInfo] = useState(false)
  
  // Scroll animation refs
  const projectsHeaderRef = useScrollAnimation()
  const experienceHeaderRef = useScrollAnimation()
  const contactRef = useScrollAnimation()

  // Handle scroll to update active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const projects = [
    {
      title: "FAQ Chatbot Satu Sehat Mobile - Ministry of Health Indonesia",
      description: "Successfully deployed an FAQ Chatbot within the Satu Sehat Mobile application on Google Cloud Platform (GCP), utilizing GPU-accelerated hardware to optimize performance. Led development using Google Cloud's Vertex AI, delivering a POC that integrated advanced question-answering with three medical prediction models (stunting, hypertension, diabetes). Achieved accuracy improvement from 54% to 76% using Adaptive RAG with Langchain frameworks. Enhanced information retrieval accuracy and deployed using Docker, Cloud Run, and Flask for scalability."
    },
    {
      title: "Agentic AI Architecture - Multi-Agent Systems at Manulife",
      description: "Developed sophisticated multi-agent AI systems leveraging LangChain and LangGraph frameworks, integrated with Qdrant vector databases and Azure OpenAI services. Implemented comprehensive monitoring and observability through LangSmith for production AI applications. Orchestrated end-to-end deployment of generative AI solutions using Jenkins CI/CD pipelines and Docker containerization, establishing scalable infrastructure for model versioning, automated testing, and production rollouts."
    },
    {
      title: "Diet Assistant Chatbot - Ministry of Health Indonesia",
      description: "Designed and developed a POC diet assistant chatbot for the Ministry of Health of Indonesia, integrating LLM with Llama Vision, Medical Records, and user input for personalized dietary recommendations. Utilized Langchain and vector databases to streamline system integration and deployment. The solution provides tailored nutritional guidance based on individual health profiles and medical history."
    },
    {
      title: "AI Chatbot Solutions for Restaurant Industry - Gammatech",
      description: "Led the design and implementation of FAQ conversation chatbots using OpenAI API for natural language processing and Pinecone API for vector search capabilities. Developed an AI chatbot designed to act as a restaurant waitress, managing customer interactions and order processing. Successfully deployed 5 AI Chatbot widgets for Gammatech clients using OpenAI Assistant, ensuring smooth operation and enhanced customer experience."
    },
    {
      title: "Spam Detection Classification Using RNN With Word Embedding - Bank BRI",
      description: "Decreased Monthly Fallback Rate from 40% to 20%. Enhanced an NLP model focused on spam detection by implementing advanced techniques such as fine-tuning and incorporating additional data sources. Conducted rigorous testing and evaluation to ensure effectiveness and reliability of the improved model. Deployed the solution on Google Cloud Platform using Docker and FastAPI for scalable customer service improvements."
    },
    {
      title: "Sentiment Analysis Using RNN With BERT and Topic Modeling Using BERTopic - Bank BRI",
      description: "Developed and delivered an NLP model capable of performing topic extraction and sentiment analysis for the BRIMO app. Integrated the model to provide valuable insights into customer preferences and sentiment. Enhanced the existing dashboard by incorporating extracted topics and sentiment analysis results, enabling improved customer understanding and actionable business insights."
    },
    {
      title: "Inappropriate Message Detection System - Bank BRI",
      description: "Developed NLP models for inappropriate message detection to enhance customer service quality and maintain professional communication standards. Implemented deep learning methods to achieve SOTA performance in message classification. The system helps maintain a safe and professional environment for customer interactions across digital banking platforms."
    },
    {
      title: "Data Pipeline Management & AI Model Validation - Manulife",
      description: "Designed and maintained robust data delivery systems to support marketing and agency teams with daily operational analytics, ensuring consistent data availability and quality for business-critical decision making. Conducted comprehensive testing and validation of generative AI models, implementing systematic evaluation frameworks to assess model performance, reliability, and business impact across multiple use cases."
    },
    {
      title: "MALATI (Machine Learning Landslide Susceptibility) Software Development",
      description: "Developed innovative software for mapping landslide vulnerability in Purworejo, Central Java using machine learning techniques. Won 1st place in National Paper Competition 'HMGI 2nd Regional Festival' and 1st place in National Project Competition 'The 45th PIT HAGI Student Competition'. The solution combines geological engineering expertise with advanced AI to assess natural disaster risks and support disaster preparedness planning."
    },
    {
      title: "P-LAVA (Python Landslide Vulnerability Analysis) System",
      description: "Created machine learning-based landslide susceptibility mapping system for Purworejo, Central Java. Won 3rd place in National Paper Competition 'Geophysical Grand Project 2021' and achieved Top 10 Best Paper at Simposium IATMI 2020. The system leverages Python-based machine learning algorithms to analyze geological data and predict landslide-prone areas for disaster mitigation."
    },
    {
      title: "Augmented Reality for Natural Hazard Identification - Geothermal Development",
      description: "Developed an innovative application of Augmented Reality technology for natural hazard identification in Sinabung Geothermal Resource Development. Won 2nd place at JCY Student Competition with the project focusing on connecting energy resources to end users. The solution enhances safety protocols and risk assessment in geothermal energy development projects."
    }
  ]

  // Work experience data (sorted from newest to oldest)
  const workExperiences = [
    {
      position: "Data Scientist/AI Engineer",
      company: "Manulife",
      duration: "Apr 2025 - Present",
      description: [
        "Data Pipeline Management: Designed and maintained robust data delivery systems to support marketing and agency teams with daily operational analytics, ensuring consistent data availability and quality for business-critical decision making.",
        "AI Model Validation & Testing: Conducted comprehensive testing and validation of generative AI models, implementing systematic evaluation frameworks to assess model performance, reliability, and business impact across multiple use cases.",
        "MLOps & Production Deployment: Orchestrated end-to-end deployment of generative AI solutions using Jenkins CI/CD pipelines and Docker containerization, establishing scalable infrastructure for model versioning, automated testing, and production rollouts.",
        "Agentic AI Architecture: Developed sophisticated multi-agent AI systems leveraging LangChain and LangGraph frameworks, integrated with Qdrant vector databases and Azure OpenAI services, while implementing comprehensive monitoring and observability through LangSmith for production AI applications."
      ],
      tools: "Langchain, Langgraph, Langsmith, Qdrant, Azure OpenAI, Docker, Jenkins, CI/CD, MLOps, Databricks, Python, FastAPI, Streamlit, Vector DB, LLM, Synapse, Azure"
    },
    {
      position: "Data Scientist/AI Engineer",
      company: "DTO - Ministry of Health of the Republic of Indonesia",
      duration: "Mar 2024 - Feb 2025",
      description: [
        "FAQ Chatbot Satu Sehat Mobile: Successfully deployed an FAQ Chatbot within the Satu Sehat Mobile application on Google Cloud Platform (GCP), utilizing GPU-accelerated hardware to optimize performance and ensure efficient, real-time responses for users.",
        "Led development of a chatbot using Google Cloud's Vertex AI, delivering a Proof of Concept (POC) that integrated advanced question-answering with three medical prediction models (stunting, hypertension, diabetes).",
        "Conducted self-development using Langchain frameworks, achieving an accuracy improvement from 54% to 76% with Adaptive RAG.",
        "Enhanced information retrieval accuracy and deployed the solution using Docker, Cloud Run, and Flask for scalability.",
        "Diet Assistant Chatbot: Designed and developed a POC diet assistant chatbot for the Ministry of Health of Indonesia, integrating LLM with Llama Vision, Medical Records, and user input for personalized dietary recommendations."
      ],
      tools: "Ollama, Llama, Langchain, Langgraph, Pydantic, Custom Function Call, Retrieval Augmented Generation (RAG), Adaptive RAG, Self Reflective RAG, LM-Studio, Vertex AI, Cloud Run, Streamlit, Cloud Function, Docker, Model Registry, Flask, Llama-vision, Gradio, Vector Database"
    },
    {
      position: "Artificial Intelligence Engineer",
      company: "Gammatech (Freelance)",
      duration: "Sep 2023 - Present",
      description: [
        "Led the design and implementation of a FAQ conversation chatbot using OpenAI API for natural language processing and Pinecone API for vector search capabilities.",
        "Led project for an AI chatbot designed to act as a restaurant waitress, and developed and managed systems for AI chatbots to ensure smooth operation.",
        "Deployed 5 AI Chatbot widgets for Gammatech clients using OpenAI Assistant."
      ],
      tools: "Vector DB, LLM, Langchain, Langsmith, Langgraph, Render, Postgresql, Docker, OpenAI, Claude"
    },
    {
      position: "Data Scientist/AI Engineer",
      company: "PT Bank Rakyat Indonesia",
      duration: "Jul 2022 - Sep 2023",
      description: [
        "Working as Data Scientist that focuses on NLP use case for better customer service through deep learning method for SOTA performance. Deploying model on Google Cloud Platform with Docker using FastAPI.",
        "Enhanced an NLP model for spam detection, reducing the monthly fallback rate from 40% to 20%.",
        "Developed NLP models for inappropriate message detection and topic extraction & sentiment analysis for the BRIMO app.",
        "Focused on NLP use cases to improve customer service by developing deep learning models end to end, deploying models on Google Cloud Platform using Docker and FastAPI."
      ],
      tools: "scikit-learn, tensorflow, pytorch, BERT, Hugging-face, BerTopic"
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img 
            src="/img/Logo.png" 
            alt="Atho Portfolio Logo" 
            className="navbar-logo"
          />
        </div>
        
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        
        <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={`navbar-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('experience')
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="section section-hero">
          <div className="hero-content">
            <div className="hero-greeting">
              Hello!!
            </div>
            <h1 className="hero-title">
              I'm <span className="text-primary">Atho</span>
            </h1>
            <p className="hero-subtitle">
              Data Scientist & AI Engineer
            </p>
            <div className="hero-image">
              <img 
                src="/img/Simple Box Solution Game Store Logo (1250 x 1250 px) (1).png" 
                alt="Atho Profile"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section section-projects">
          <div className="container">
            <div className="projects-header animate-on-scroll" ref={projectsHeaderRef}>
              <h2 className="projects-title">
                My <span className="highlight">Projects</span>
              </h2>
              <p className="hero-subtitle">
                Showcasing my expertise in NLP, Machine Learning, and Data Science
              </p>
            </div>
            
            <div className="projects-grid">
              {projects.map((project, index) => {
                const ProjectCard = () => {
                  const cardRef = useScrollAnimation()
                  return (
                    <div key={index} className="project-card animate-on-scroll" ref={cardRef}>
                      <h3 className="project-card-title">{project.title}</h3>
                      <hr className="project-card-divider" />
                      <p className="project-card-description">{project.description}</p>
                    </div>
                  )
                }
                return <ProjectCard key={index} />
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section section-experience">
          <div className="container">
            <div className="experience-header animate-on-scroll" ref={experienceHeaderRef}>
              <h2 className="experience-title">
                Work <span className="highlight">Experience</span>
              </h2>
              <p className="hero-subtitle">
                Professional journey in data science and machine learning
              </p>
            </div>
            
            <div className="experience-content">
              {workExperiences.map((experience, index) => {
                const ExperienceCard = () => {
                  const cardRef = useScrollAnimation()
                  return (
                    <div key={index} className="project-card animate-on-scroll" ref={cardRef} style={{marginBottom: 'var(--space-xl)'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)', flexWrap: 'wrap', gap: 'var(--space-xs)'}}>
                        <div>
                          <h3 className="project-card-title" style={{marginBottom: 'var(--space-xs)'}}>{experience.position}</h3>
                          <h4 style={{color: 'var(--color-primary)', fontSize: 'var(--font-size-lg)', fontWeight: '600', marginBottom: '0'}}>{experience.company}</h4>
                        </div>
                        <span style={{color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)', fontWeight: '500', whiteSpace: 'nowrap'}}>{experience.duration}</span>
                      </div>
                      <hr className="project-card-divider" />
                      <div className="project-card-description">
                        {experience.description.map((desc, descIndex) => (
                          <p key={descIndex} style={{marginBottom: 'var(--space-sm)', color: 'var(--color-white)'}}>{desc}</p>
                        ))}
                        {experience.tools && (
                          <div style={{marginTop: 'var(--space-md)'}}>
                            <strong style={{color: 'var(--color-white)', fontSize: 'var(--font-size-sm)'}}>Tools & Technologies: </strong>
                            <span style={{color: 'var(--color-white)', fontSize: 'var(--font-size-sm)'}}>{experience.tools}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                }
                return <ExperienceCard key={index} />
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section-hero">
          <div className="container">
            <div className="hero-content animate-on-scroll" ref={contactRef}>
              <h2 className="hero-title">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="hero-subtitle">
                Ready to collaborate on your next data science project
              </p>
              <div 
                className="hero-greeting" 
                style={{cursor: 'pointer', transition: 'all var(--transition-normal)'}}
                onClick={() => setShowContactInfo(!showContactInfo)}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Get in touch!
              </div>
              
              {showContactInfo && (
                <div style={{
                  marginTop: 'var(--space-xl)',
                  padding: 'var(--space-2xl)',
                  background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.95) 0%, rgba(42, 42, 42, 0.95) 100%)',
                  borderRadius: 'var(--radius-2xl)',
                  border: '1px solid var(--color-primary)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(253, 133, 58, 0.2)',
                  animation: 'fadeInUp 0.6s ease-out',
                  maxWidth: '600px',
                  margin: 'var(--space-xl) auto 0'
                }}>
                  <div style={{
                    textAlign: 'center',
                    marginBottom: 'var(--space-2xl)'
                  }}>
                    <h3 style={{
                      color: 'var(--color-white)',
                      fontSize: 'var(--font-size-3xl)',
                      fontWeight: '700',
                      marginBottom: 'var(--space-sm)',
                      background: 'linear-gradient(135deg, var(--color-white) 0%, var(--color-primary) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Let's Connect
                    </h3>
                    <div style={{
                      width: '60px',
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                      margin: '0 auto',
                      borderRadius: '2px'
                    }}></div>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--space-lg)',
                    marginBottom: 'var(--space-xl)'
                  }}>
                    {/* Email */}
                    <a href="mailto:ahmadathoillah28@gmail.com" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 'var(--space-lg)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 'var(--radius-xl)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all var(--transition-normal)',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.background = 'rgba(253, 133, 58, 0.1)'
                      e.currentTarget.style.borderColor = 'var(--color-primary)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 133, 58, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        marginBottom: 'var(--space-md)'
                      }}>
                        ✉️
                      </div>
                      <div style={{color: 'var(--color-primary)', fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-xs)'}}>Email</div>
                      <div style={{color: 'var(--color-white)', fontSize: 'var(--font-size-sm)', textAlign: 'center', lineHeight: '1.4'}}>
                        ahmadathoillah28@gmail.com
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/achmadathoillah" target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 'var(--space-lg)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 'var(--radius-xl)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all var(--transition-normal)',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.background = 'rgba(253, 133, 58, 0.1)'
                      e.currentTarget.style.borderColor = 'var(--color-primary)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 133, 58, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        marginBottom: 'var(--space-md)'
                      }}>
                        💼
                      </div>
                      <div style={{color: 'var(--color-primary)', fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-xs)'}}>LinkedIn</div>
                      <div style={{color: 'var(--color-white)', fontSize: 'var(--font-size-sm)', textAlign: 'center', lineHeight: '1.4'}}>
                        /in/achmadathoillah
                      </div>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/achmadathoillah" target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 'var(--space-lg)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 'var(--radius-xl)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all var(--transition-normal)',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.background = 'rgba(253, 133, 58, 0.1)'
                      e.currentTarget.style.borderColor = 'var(--color-primary)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(253, 133, 58, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        marginBottom: 'var(--space-md)'
                      }}>
                        💻
                      </div>
                      <div style={{color: 'var(--color-primary)', fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-xs)'}}>GitHub</div>
                      <div style={{color: 'var(--color-white)', fontSize: 'var(--font-size-sm)', textAlign: 'center', lineHeight: '1.4'}}>
                        /achmadath
                      </div>
                    </a>
                  </div>
                  
                  <div style={{
                    textAlign: 'center',
                    padding: 'var(--space-md)',
                    background: 'rgba(253, 133, 58, 0.1)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(253, 133, 58, 0.2)'
                  }}>
                    <div style={{
                      color: 'var(--color-primary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '500'
                    }}>
                      💡 Click "Get in touch!" again to hide this information
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
