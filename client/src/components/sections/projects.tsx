import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Github, ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { desc } from "drizzle-orm";

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "College Project", "IoT", "Security", "Web Dev", "Automation"];

  const projects = [
    {
      title: "Pac-Man-Game - College Project",
      description: "A simple, colorful Pac-Man-style game built with Pygame. Includes menus, sound effects, three levels, and ghost AI. ",
      image: "https://i.postimg.cc/KjzMCfYK/pacman-lead-graphic.jpg",
      category: "College Project",
      technologies: ["Python", "Pygame"],
      github: "https://github.com/chetanngavali/Pac-Man-Game",
      demo: "#",
    },
    {
      title: "ESP32_FlipperZero_DIY",
      description: "Complete integration of multiple wireless protocols and security testing modules into a unified Flipper Zero-like device using ESP32.",
      image: "https://i.postimg.cc/ydFKsCk9/Gemini-Generated-Image-qfx9f4qfx9f4qfx9.png",
      category: "IoT",
      technologies: ["ESP32", "C++", "Wireless Protocols"],
      github: "#",
      demo: "#",
    },
    {
      title: "ESP32 Air-Gap Magnetometer Keylogger",
      description: "Complete brand identity redesign for a fintech startup including logo, style guide, and marketing materials.",
      image: "https://i.postimg.cc/k4wjxTZ6/Gemini-Generated-Image-w4p51kw4p51kw4p5.png",
      category: "IoT",
      technologies: ["ESP32", "Magnetometer", "C++"],
      github: "https://github.com/chetanngavali/ESP32_Magnetometer_Keylogger",
      demo: "#",
    },
    {
      title: "ESP32 Marauder nRF",
      description: "Advanced wireless security testing platform combining WiFi, Bluetooth/BLE, and nRF24L01+ capabilities for comprehensive RF analysis and testing.",
      image: "https://i.postimg.cc/wMgtDdZY/Gemini-Generated-Image-mrhzdumrhzdumrhz.png",
      category: "IoT",
      technologies: ["ESP32", "C++", "Wireless Protocols"],
      github: "https://github.com/chetanngavali/ESP32_Marauder_nRF",
      demo: "#",
    },
    {
      title: "ESP32 MouseJack",
      description: "Security testing tool that demonstrates the MouseJack vulnerability for authorized penetration testing and security research.",
      image: "https://i.postimg.cc/jSbs5hpy/Gemini-Generated-Image-xrxl76xrxl76xrxl.png",
      category: "IoT",
      technologies: ["ESP32", "C++", "Wireless Protocols"],
      github: "https://github.com/chetanngavali/ESP32_MouseJack",
      demo: "#",
    },
    {
      title: "nRFBox - ESP32",
      description: "Advanced wireless security testing tool using ESP32 with dual nRF24L01+ modules",
      image: "https://i.postimg.cc/1RB0MWH8/Gemini-Generated-Image-b0mmfub0mmfub0mm.png",
      category: "IoT",
      technologies: ["ESP32", "C++", "Wireless Protocols"],
      github: "https://github.com/chetanngavali/ESP32_nRFBox",
      demo: "#",
    },
    {
      title:"ESP32_WalkieTalkie",
      description: "Professional-grade two-way voice communication system using ESP32 modules with I2S audio, WiFi communication, and push-to-talk functionality.",
      image: "https://i.postimg.cc/QdmHZPFF/Gemini-Generated-Image-2fku662fku662fku.png",
      category: "IoT",
      technologies: ["ESP32", "C++", "Wireless Protocols"],
      github: "https://github.com/chetanngavali/ESP32_WalkieTalkie",
      demo: "#",
    },
    {
      title:"ESP8266_NFC_BusinessCard",
      description: "Portable NFC Business Card Writer using ESP8266 (NodeMCU), RC522 RFID/NFC module, and SSD1306 OLED display. Write URLs to NFC cards that automatically redirect mobile devices when tapped.",
      image: "https://i.postimg.cc/G2w073bQ/Gemini-Generated-Image-tw2ac4tw2ac4tw2a.png",
      category: "IoT",
      technologies: ["ESP8266", "C++", "NFC"],
      github: "https://github.com/chetanngavali/ESP8266_NFC_BusinessCard",
      demo: "#",
    },
    {
      title: "Google-Sheets-Email-Automation",
      description: " Google Sheets Email Automation A powerful automation system that monitors Google Sheets for new entries and automatically sends personalized emails with PDF attachments using Hostinger SMTP. ",
      image: "https://i.postimg.cc/htLHjDK6/Google_Sheets_Email_Automation.png",
      category: "Automation",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/Google-Sheets-Email-Automation",
      demo: "#",
    },
    {
      title: "MirrorMoo",
      description: "MirrorMood is a web-based user interface that detects and visualizes human facial expressions in real time using modern frontend technologies.",
      image: "https://i.postimg.cc/Kj5Mj3s2/Mirror_Mood_Face_Expression.png",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/MirrorMood---Face-Expression-UI",
      demo: "#",
    },
    {
      title: "Farming-Assistance-web-Application",
      description: "FarmAssist - Comprehensive Farming Assistance App A modern, comprehensive web application designed to empower farmers with essential tools and information for successful farming operations. ",
      image: "https://i.postimg.cc/gkSx7p9G/Farming_Assistance_App.png",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/Farming-Assistance-web-Application",
      demo: "#",
    },
    {
      title: "CodeCraft Academy - Student Coding Platform",
      description: "A modern, interactive learning platform designed to teach coding through AI assistance, gamification, and creative tools.",
      image: "https://i.postimg.cc/wxt1S052/517683523-c0decb3f-9643-4799-bd8f-42d56eb271d5.png",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/CodeCraft-Academy",
      demo: "#",
    },
    {
      title: "LifeHub",
      description: "LifeHub - All-in-One Life Management Platform A comprehensive digital life management platform that combines 11 essential services into one unified experience. LifeHub helps you organize every aspect of your daily life, from managing food inventory to planning trips and tracking baby milestones.",
      image: "https://i.postimg.cc/Fs7r7J6B/All_In_One_Life_Management_Platform.png",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/LifeHub",
      demo: "#",
    },
    {
      title: "university-management-system",
      description: "A comprehensive university management system built with modern web technologies.",
      image: "https://i.postimg.cc/G905LNNg/university_management_system.png",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/university-management-system",
      demo: "#",
    },
    {
      title: "hire-mess-and-chinese-Menucard",
      description: "A modern, interactive menu card system for a Chinese restaurant.",
      image: "https://i.postimg.cc/c1KnQVqF/Screenshot_2025_11_22_at_13_40_34_menu_card_app.png",
      category: "Web Dev",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/hire-mess-and-chinese",
      demo: "#",
    },
    {
      title: "Secure Stego",
      description: "This Python tool provides secure steganography by encrypting text with AEAD (ChaCha20-Poly1305 or AES-256-GCM) and embedding ciphertext into image pixels using cryptographically random ordering. Only users with the correct password can extract and decrypt messages, ensuring strong protection for secure communication and data privacy. ",
      image: "https://i.postimg.cc/2yXr5HGZ/secure_stego.png",
      category: "Security",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/chetanngavali/secure_stego",
      demo: "#",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 relative overflow-hidden flex items-center" data-testid="projects-section">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background animate-pulse-slow"></div>
      </div>

      {/* Floating Project Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/10 rounded-xl rotate-45 animate-float">
          <Rocket className="w-8 h-8 text-primary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
        <div className="absolute bottom-32 right-1/4 w-14 h-14 bg-secondary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "1s" }}>
          <Github className="w-7 h-7 text-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
        </div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-accent/10 rounded-xl rotate-12 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 h-18 bg-primary/10 rounded-xl -rotate-45 animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <Rocket className="inline-block w-10 h-10 mr-4" />
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground">Showcasing innovation across security, creativity, and technology</p>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border border-muted text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group glass-effect rounded-xl overflow-hidden card-3d"
              data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-3 py-1 bg-${project.category === "Security" ? "primary" : project.category === "Web Dev" ? "secondary" : "accent"}/20 text-${project.category === "Security" ? "primary" : project.category === "Web Dev" ? "secondary" : "accent"} rounded-full text-xs`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted/50 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-github-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-demo-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
