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

  // Cybersecurity Data
  const cybersecurityAreas = [
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

  const certifications = ["CISSP", "CEH", "OSCP", "Security+"];

  // Photography Data
  const galleryImages = [
    {
      src: urbanStreetPhoto,
      alt: "Urban cityscape photography",
      title: "Urban Landscapes",
      description: "City architecture & street photography",
    },
    {
      src: professionalPortrait,
      alt: "Portrait photography",
      title: "Portrait Series",
      description: "Professional & artistic portraits",
    },
    {
      src: mountainLandscape,
      alt: "Nature landscape photography",
      title: "Nature Escapes",
      description: "Landscape & adventure photography",
    },
    {
      src: macroFlowerPhoto,
      alt: "Abstract architecture photography",
      title: "Abstract Forms",
      description: "Geometric & minimal compositions",
    },
    {
      src: seascapePhoto,
      alt: "Event photography",
      title: "Event Coverage",
      description: "Corporate & social events",
    },
    {
      src: seascapePhoto,
      alt: "Travel photography",
      title: "Travel Stories",
      description: "Cultural & destination photography",
    },
  ];

  const photoStats = [
    { value: "500+", label: "Photos Captured" },
    { value: "50+", label: "Events Covered" },
    { value: "25+", label: "Happy Clients" },
    { value: "5", label: "Years Experience" },
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
        </motion.div>

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
                <div className="text-accent">chetan@security:~$</div>
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

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid={`cert-${cert.toLowerCase()}`}
                  >
                    {cert}
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
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl hover-tilt cursor-pointer card-3d"
                  onClick={() => openLightbox(index)}
                  data-testid={`gallery-image-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold">{image.title}</h4>
                      <p className="text-sm opacity-80">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
