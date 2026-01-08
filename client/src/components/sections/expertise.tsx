// Cybersecurity Skills
  const cybersecuritySkills = [
    "Network Hardening",
    "Vulnerability Assessment",
    "Incident Response",
    "Firewall Management",
    "SIEM Operations",
    "Ethical Hacking",
    "Security Auditing",
    "Threat Intelligence",
    "Cryptography",
    "Risk Analysis",
    "Linux Security",
    "Web Application Security"
  ];
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Camera, Wifi, Bug, Eye } from "lucide-react";
import { Lightbox } from "@/components/ui/lightbox";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import urbanStreetPhoto from "@assets/generated_images/Urban_street_photography_7cff418c.png";
import professionalPortrait from "@assets/generated_images/Professional_portrait_photography_2423bc7e.png";
import mountainLandscape from "@assets/generated_images/Mountain_landscape_photography_66d3ce36.png";
import macroFlowerPhoto from "@assets/generated_images/Macro_flower_photography_8caff2c1.png";
import seascapePhoto from "@assets/generated_images/Peaceful_seascape_photography_871ffb57.png";

export function Expertise() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("cybersecurity");

  // Achievements Data (placeholder)
  const achievements = [
    {
      title: "Rajya Puraskar (Award) by The Bharat Scouts and Guides",
      description: "This award reflects my dedication towards leadership, discipline, community service, and personal development within the scouting movement. The journey involved consistent training, skill development, social service activities, and successful completion of state-level assessments.",
    },
    {
      title: "1st Rank in the Mind Spark Hackthon 2025",
      description: "This experience taught me how to manage time effectively, stay focused under pressure, think clearly, and collaborate well in a fast-paced environment. Once our team aligned on the core idea, everything flowed with clarity and purpose.",
    },
    {
      title: "International Hackathon - SUNHACKS-2K25",
      description: "I recently had the opportunity to participate in SUNHACKS-2K25, an International Level Hackathon organized by the Sunhacks Hackathon. It was an incredible experience to brainstorm, collaborate, and bring ideas to life alongside talented peers.",
    },
    {
      title: "Quiz Competition",
      description: " I have successfully participated in the Online Tech Quiz Competition organized by Knowledge Institute of Technology through Unstop.\n\nRepresenting K K Wagh Institute of Engineering Education and Research, I had the opportunity to enhance my technical knowledge, problem-solving skills, and quick decision-making through this engaging quiz challenge.",
    },
    {
      title: "14-day CyberXplore Bootcamp",
      description: "This journey has not only strengthened my cybersecurity skills but also broadened my perspective with expert-led sessions and panel discussions. Excited to apply these learnings and continue exploring the world of cybersecurity!",
    },
    {
      title: "Global Annual Security Conference 2024",
      description: "This event was an amazing opportunity to Learn about the latest trends in cybersecurity\n Connect with experts and like-minded professionals Explore strategies for building secure and resilient digital systems",
    },
  ];

  // Experience Data
  const experiences = [
    {
      title: "Leader - District Cyber Warrior Caption (DCWC)",
      company: "Cyber Hunter Warrior",
      duration: "May 2025 - Present",
      location: "Remote",
      description: "Leading a team of cyber enthusiasts to promote cybersecurity awareness and skills at the district level. Organizing workshops, competitions, and awareness campaigns to educate students and the community about cyber threats and best practices.",
    },
    {
      title: "Social Media Manager & Photographer",
      company: "TechnoHacks Solutions",
      duration: "Feb 2024 - Present",
      location: "Parttime, Remote",
      description: "Managing social media presence and content creation for TechnoHacks Solutions. Responsible for photography, graphic design, and digital marketing strategies to enhance brand visibility and engagement across various platforms.",
    },
  ];

  const certifications = [
    {
      icon: Shield,
      title: "Ethical Hacking Training",
      description: "by TechnoHacks Solutions.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "By Tech Mahindra",
    },
    {
      icon: Shield,
      title: "Cyber security",
      description: "by Skill India Digital Hub",
    },
    {
      icon: Shield,
      title: "ISO/IEC 27001:2022",
      description: "By SkillFront!",
    },
    {
      icon: Shield,
      title: "Digital Forensics",
      description: "by Security Blue Team",
    },
    {
      incon: Shield,
      title: "Cyber Xplore Bootcamp",
      description: "by Ghost nett",
    },
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "by Security Blue Team",
    },
    {
      icon: Shield,
      title: "Cyber Security Associate",
      description: "by Reliance Foundation skill academy",
    },
    {
      icon: Shield,
      title: "Cybersecurity Essentials",
      description: "by Tech Mahindra Foundation",
    },
    {
      icon: Shield,
      title: " Introduction to Cybersecurity",
      description: "by Cisco Networking Academy",
    },
    {
      icon: Shield,
      title: "Kali Linux for Ethical Hackers",
      description: "by Udemy",
    },
    {
      icon: Shield,
      title: "CCPC",
      description: "by Red Team Leaders",
    },
    {
      icon: Shield,
      title: "Social Media Pentesting",
      description: "by M Cyber Academy",
    },
  ];

  // Cybersecurity Data
  const cybersecurityAreas = [
    {
      icon: Wifi,
      title: "Cybersecurity & Information Security",
      description: "Protecting digital assets through robust security measures and protocols.",
      tools: ["Threat Models", "Attack Surfaces"],
      color: "primary",
    },
    {
      icon: Bug,
      title: "Network & Wireless Security",
      description: "Identifying vulnerabilities through ethical hacking and comprehensive security assessments.",
      tools: ["Wi-Fi security", "Wireless protocols", "VPNs"],
      color: "secondary",
    },
    {
      icon: Eye,
      title: "IoT Security & Embedded Systems",
      description: "Advanced monitoring and incident response using cutting-edge SIEM solutions.",
      tools: ["Firmware analysis", "Secure boot", "Device hardening"],
      color: "accent",
    },
    {
      icon: Shield,
      title: "RFID / NFC Security",
      description: "Securing RFID and NFC systems against unauthorized access and data breaches.",
      tools: ["Tag cloning", "Eavesdropping", "Relay attacks"],
      color: "primary",
    },
    {
      icon: Bug,
      title: "Web & API Security",
      description: "Ensuring the security of web applications and APIs through vulnerability assessments and penetration testing.",
      tools: ["API security testing", "secure coding"],
      color: "secondary",
    },
    {
      icon: Eye,
      title: "Scripting & Automation",
      description: "Automating security tasks and processes using scripting languages and tools.",
      tools: ["Python", "Bash", "PowerShell"],
      color: "accent",
    },
    {
      icon: Shield,
      title: "OSINT & Reconnaissance",
      description: "Gathering and analyzing publicly available information for security assessments.",
      tools: ["Maltego", "Shodan", "theHarvester"],
      color: "primary",
    },
    {
      icon: Bug,
      title: "Incident Awareness & Cyber Law (India)",
      description: "Understanding cyber laws and regulations to ensure compliance and effective incident response.",
      tools: ["IT Act 2000", "Data Protection Laws"],
      color: "secondary",
    },
  ];

  

    // Cybersecurity Data
  const cybersecurity = [
    {
      icon: Wifi,
      title: "Network Security",
      description: "Designing secure network architectures and implementing robust firewall configurations.",
      tools: ["Wireshark", "pfSense", "Nmap"],
      color: "primary",
    },
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Identifying vulnerabilities through ethical hacking and comprehensive security assessments.",
      tools: ["Metasploit", "Burp Suite", "Kali Linux"],
      color: "secondary",
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Advanced monitoring and incident response using cutting-edge SIEM solutions.",
      tools: ["Splunk", "ELK Stack", "OSSEC"],
      color: "accent",
    },
  ];
  

  // Photography Data
  // Empty galleryImages array; user will upload later
  const galleryImages: Array<{ src: string; alt: string; title: string; description: string }> = [];

  const photoStats = [
    { value: "700+", label: "Photos Captured" },
    { value: "12+", label: "Events Covered" },
    { value: "10+", label: "Happy Clients" },
    { value: "4+", label: "Years Experience" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="expertise" ref={ref} className="min-h-screen py-20 relative overflow-hidden flex items-center" data-testid="expertise-section">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background animate-pulse-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-xl rotate-45 animate-float">
          <Shield className="w-8 h-8 text-primary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-secondary/10 rounded-xl rotate-12 animate-float" style={{ animationDelay: "1s" }}>
          <Camera className="w-8 h-8 text-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12" />
        </div>
        <div className="absolute bottom-40 left-32 w-14 h-14 bg-accent/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "2s" }}>
          <Wifi className="w-7 h-7 text-accent/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-18 h-18 bg-primary/10 rounded-xl -rotate-45 animate-float" style={{ animationDelay: "3s" }}>
          <Eye className="w-8 h-8 text-primary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            MY EXPERTISE
          </h2>
          <p className="text-xl text-muted-foreground">Mastering cybersecurity and visual storytelling</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setActiveTab("cybersecurity")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all button-3d ${
              activeTab === "cybersecurity"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50"
                : "glass-effect hover:bg-primary/20"
            }`}
            data-testid="tab-cybersecurity"
          >
            <Shield className="inline-block w-5 h-5 mr-2" />
            Cybersecurity
          </button>
          <button
            onClick={() => setActiveTab("photography")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all button-3d ${
              activeTab === "photography"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50"
                : "glass-effect hover:bg-primary/20"
            }`}
            data-testid="tab-photography"
          >
            <Camera className="inline-block w-5 h-5 mr-2" />
            Photography
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all button-3d ${
              activeTab === "achievements"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50"
                : "glass-effect hover:bg-primary/20"
            }`}
            data-testid="tab-achievements"
          >
            🏆 Achievements
          </button>
        </motion.div>
        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-2">
                <span className="text-4xl">🏆</span>
                <h3 className="text-3xl font-bold text-accent">Achievements</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-8">A showcase of my proudest moments in cybersecurity and photography.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {achievements.map((ach, idx) => (
                <div
                  key={ach.title}
                  className="relative group bg-gradient-to-br from-background via-card to-background border border-accent/40 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 shadow-inner">
                    <span className="text-5xl">🏆</span>
                  </div>
                  <div className="font-bold text-xl mb-2 text-accent text-center">{ach.title}</div>
                  <div className="text-muted-foreground text-center text-base leading-relaxed">{ach.description}</div>
                </div>
              ))}
            </div>
            {/* Experience Section */}
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-3xl">💼</span>
                <h4 className="text-2xl font-bold text-primary">Experience</h4>
              </div>
              <p className="text-md text-muted-foreground mb-4">Professional roles and internships</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.title + exp.company}
                  className="relative group bg-gradient-to-br from-background via-card to-background border border-primary/40 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3 shadow-inner">
                    <span className="text-3xl">💼</span>
                  </div>
                  <div className="font-bold text-lg mb-1 text-primary text-center">{exp.title}</div>
                  <div className="font-semibold text-base mb-1 text-accent text-center">{exp.company}</div>
                  <div className="text-xs text-muted-foreground mb-1 text-center">{exp.duration} | {exp.location}</div>
                  <div className="text-muted-foreground text-center text-base leading-relaxed">{exp.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Cybersecurity Tab */}
        {activeTab === "cybersecurity" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="terminal-effect rounded-xl p-8 mb-12 font-mono"
              data-testid="terminal-display"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-accent">chetan@Gavali:~$</div>
              </div>
              <div className="text-accent space-y-2">
                <div>&gt; Initializing security protocols...</div>
                <div>&gt; Scanning for vulnerabilities...</div>
                <div>&gt; Implementing defense mechanisms...</div>
                <div className="text-green-400">&gt; System secured successfully ✓</div>
              </div>
            </motion.div>

            {/* Expertise Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {cybersecurityAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="glass-effect p-6 rounded-xl card-3d"
                  data-testid={`expertise-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`text-3xl text-${area.color} mb-4`}>
                    <area.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-3 py-1 bg-${area.color}/20 text-${area.color} rounded-full text-sm`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications as styled cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-16 text-center"
            >
              <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 border border-primary text-primary rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-colors w-48 max-w-full flex flex-col items-center shadow-sm"
                    data-testid={`cert-${cert.title.toLowerCase()}`}
                  >
                    {cert.icon && typeof cert.icon === "function" && (
  <cert.icon className="w-6 h-6 mb-1 text-primary" />
)}
                    <div className="font-semibold text-base mb-0.5">{cert.title}</div>
                    {cert.description && (
                      <div className="text-muted-foreground text-center text-xs">{cert.description}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        )}

        {/* Photography Tab */}
        {activeTab === "photography" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {galleryImages.length === 0 && (
                <div className="col-span-full text-center text-muted-foreground py-12">
                  No photos uploaded yet. I Will be adding my photography portfolio soon!
                </div>
              )}
              {/* If images are added in the future, they will appear here */}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {photoStats.map((stat) => (
                <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="text-3xl font-tech font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
}
