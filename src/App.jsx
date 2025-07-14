import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronDown,
  Brain,
  Code,
  Database,
  Cloud,
  Award,
  Calendar,
  Building
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';

// Import images
import heroBackground from './assets/hero_background.jpg';
import aiBrainBg from './assets/ai_brain_bg.jpg';
import dataVizBg from './assets/data_viz_bg.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      // Fade in animation
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      company: "Manulife",
      position: "Data Scientist/AI Engineer",
      period: "Apr 2025 - Present",
      location: "Jakarta",
      description: "Mengelola pipeline data, validasi model AI generatif, dan mengembangkan sistem AI multi-agen menggunakan LangChain dan LangGraph.",
      technologies: ["LangChain", "LangGraph", "Qdrant", "Azure OpenAI", "Jenkins", "Docker"]
    },
    {
      company: "DTO - Kementerian Kesehatan RI",
      position: "Data Scientist/AI Engineer",
      period: "Mar 2024 - Feb 2025",
      location: "Jakarta",
      description: "Mengembangkan FAQ Chatbot Satu Sehat Mobile dan Diet Assistant Chatbot dengan peningkatan akurasi dari 54% menjadi 76%.",
      technologies: ["Vertex AI", "Ollama", "Llama", "RAG", "GCP", "Docker", "Flask"]
    },
    {
      company: "Gammatech",
      position: "AI Engineer (Freelance)",
      period: "Sep 2023 - Present",
      location: "Jakarta",
      description: "Memimpin desain dan implementasi chatbot FAQ menggunakan OpenAI API dan Pinecone API. Menerapkan 5 AI Chatbot widget untuk klien.",
      technologies: ["OpenAI", "Pinecone", "LangChain", "PostgreSQL", "Claude"]
    },
    {
      company: "PT Bank Rakyat Indonesia",
      position: "Data Scientist/AI Engineer",
      period: "Jul 2022 - Sep 2023",
      location: "Jakarta",
      description: "Mengembangkan model NLP untuk deteksi spam, mengurangi tingkat fallback bulanan dari 40% menjadi 20%.",
      technologies: ["TensorFlow", "PyTorch", "BERT", "Hugging Face", "BerTopic", "FastAPI"]
    }
  ];

  const projects = [
    {
      title: "FAQ Chatbot Satu Sehat Mobile",
      description: "Chatbot FAQ yang diintegrasikan dalam aplikasi Satu Sehat Mobile dengan tiga model prediksi medis (stunting, hipertensi, diabetes).",
      technologies: ["Vertex AI", "Adaptive RAG", "GCP", "Docker"],
      category: "Healthcare AI"
    },
    {
      title: "Diet Assistant Chatbot",
      description: "POC chatbot asisten diet yang mengintegrasikan LLM dengan Llama Vision dan catatan medis untuk rekomendasi diet personal.",
      technologies: ["Llama Vision", "RAG", "Gradio", "Vector Database"],
      category: "Healthcare AI"
    },
    {
      title: "NLP Spam Detection",
      description: "Model deteksi spam untuk aplikasi BRIMO yang berhasil mengurangi tingkat fallback dari 40% menjadi 20%.",
      technologies: ["BERT", "TensorFlow", "FastAPI", "GCP"],
      category: "NLP"
    },
    {
      title: "Restaurant Waitress AI",
      description: "Chatbot AI yang dirancang untuk bertindak sebagai pelayan restoran dengan kemampuan pemrosesan pesanan.",
      technologies: ["OpenAI Assistant", "LangChain", "PostgreSQL"],
      category: "Customer Service"
    },
    {
      title: "MALATI - Landslide Susceptibility",
      description: "Software machine learning untuk memetakan kerentanan tanah longsor di daerah Purworejo, Jawa Tengah.",
      technologies: ["Python", "Machine Learning", "GIS", "Data Analysis"],
      category: "Geoscience"
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "SQL", "JavaScript", "R"], level: 90 },
    { category: "AI/ML Frameworks", items: ["TensorFlow", "PyTorch", "Langchain", "Hugging Face"], level: 95 },
    { category: "Cloud Platforms", items: ["Google Cloud Platform", "Azure", "AWS"], level: 85 },
    { category: "Databases", items: ["PostgreSQL", "Qdrant", "Pinecone", "MongoDB"], level: 80 },
    { category: "DevOps", items: ["Docker", "Jenkins", "Git", "FastAPI"], level: 85 },
    { category: "AI Technologies", items: ["NLP", "Computer Vision", "RAG", "LLM"], level: 95 }
  ];

  const achievements = [
    {
      title: "Juara 1 - HMGI 2nd Regional Festival",
      year: "2019",
      category: "National Paper Competition"
    },
    {
      title: "Juara 3 - Geophysical Grand Project",
      year: "2021",
      category: "National Paper Competition"
    },
    {
      title: "Juara 1 - PIT HAGI Student Competition",
      year: "2021",
      category: "National Project Competition"
    },
    {
      title: "Top 10 - IATMI Student Festival",
      year: "2020",
      category: "Best Paper Contest"
    },
    {
      title: "Deep Learning Specialization",
      year: "2023",
      category: "Certification"
    },
    {
      title: "IBM Data Science",
      year: "2023",
      category: "Certification"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary"
            >
              Achmad Athoillah
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-2 space-y-1">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Achmad Athoillah
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-8">
              <span className="typing-animation">Data Scientist & AI Engineer</span>
            </div>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Berpengalaman dalam mengembangkan solusi AI end-to-end, termasuk chatbot FAQ, 
              model prediksi medis, dan aplikasi NLP dengan fokus pada optimasi kinerja AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection('projects')}
              >
                Lihat Proyek
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-black"
                onClick={() => scrollToSection('contact')}
              >
                Hubungi Saya
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isVisible.about ? 'fade-in visible' : 'fade-in'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Tentang Saya</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seorang Data Scientist dan AI Engineer dengan passion dalam mengoptimalkan kinerja AI 
              dan memberikan solusi berdampak di bidang kesehatan, keuangan, dan layanan pelanggan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
                    <p className="text-muted-foreground">Expertise dalam LangChain, Vertex AI, dan OpenAI</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Full-Stack Development</h3>
                    <p className="text-muted-foreground">Python, Docker, FastAPI, dan cloud platforms</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-chart-1/10 rounded-lg">
                    <Database className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Data Engineering</h3>
                    <p className="text-muted-foreground">Pipeline data, MLOps, dan deployment scalable</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="rounded-lg h-96 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${aiBrainBg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Lokasi</h4>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 bg-muted/30 ${isVisible.experience ? 'fade-in visible' : 'fade-in'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Pengalaman Kerja</h2>
            <p className="text-xl text-muted-foreground">
              Perjalanan karir dalam mengembangkan solusi AI dan machine learning
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2 flex items-center">
                          <Building className="h-5 w-5 mr-2 text-primary" />
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {exp.position}
                        </CardDescription>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="tech-icon">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isVisible.projects ? 'fade-in visible' : 'fade-in'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proyek Unggulan</h2>
            <p className="text-xl text-muted-foreground">
              Koleksi proyek AI dan machine learning yang telah saya kembangkan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className={`py-20 relative ${isVisible.skills ? 'fade-in visible' : 'fade-in'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${dataVizBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Keahlian & Teknologi</h2>
            <p className="text-xl text-gray-300">
              Tools dan teknologi yang saya kuasai dalam pengembangan AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-white/20">
                  <CardHeader>
                    <CardTitle className="text-black-100 flex items-center ">
                      <Cloud className="h-5 w-5 mr-2 text-accent " />
                      {skill.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {skill.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-black-100">
                          {item}
                        </div>
                      ))}
                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-black-100 mb-1">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 bg-muted/30 ${isVisible.achievements ? 'fade-in visible' : 'fade-in'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Prestasi & Sertifikasi</h2>
            <p className="text-xl text-muted-foreground">
              Pencapaian dalam kompetisi dan pengembangan profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Award className="h-6 w-6 text-accent" />
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.category}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isVisible.contact ? 'fade-in visible' : 'fade-in'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Mari Berkolaborasi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tertarik untuk bekerja sama? Saya terbuka untuk diskusi proyek AI, 
              konsultasi teknologi, atau peluang karir baru.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">ahmadathoillah28@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-muted-foreground">+62 812 9670 2202</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-chart-1/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-chart-1" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/achmadathoillah</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-chart-2/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold">Lokasi</h3>
                  <p className="text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>
                    Atau hubungi saya langsung melalui kontak di samping
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      className="w-full" 
                      onClick={() => window.open('mailto:ahmadathoillah28@gmail.com')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://www.linkedin.com/in/achmadathoillah', '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => window.open('tel:+6281296702202')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Hubungi via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Achmad Athoillah. Dibuat dengan React dan Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

